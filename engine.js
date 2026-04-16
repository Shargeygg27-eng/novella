let currentSceneId = "start";
let isTyping = false;
let typeInterval;
let activeStory = window.CHAPTER_1; // Берем сюжет из chapter_1.js

// === 1. ПРЕДЗАГРУЗКА (PRELOADER) ===
async function preloadChapterImages(storyData) {
    const imagesToLoad = new Set();
    
    // Собираем все уникальные файлы
    for (let key in storyData) {
        let scene = storyData[key];
        if (scene.bg) imagesToLoad.add(scene.bg);
        if (scene.spriteLeft) imagesToLoad.add(scene.spriteLeft);
        if (scene.spriteCenter) imagesToLoad.add(scene.spriteCenter);
        if (scene.spriteRight) imagesToLoad.add(scene.spriteRight);
    }

    const totalImages = imagesToLoad.size;
    let loadedImages = 0;
    
    const loadingBar = document.getElementById('loading-bar-fill');
    const loadingText = document.getElementById('loading-text');

    if (totalImages === 0) {
        finishPreload();
        return;
    }

    imagesToLoad.forEach(src => {
        const img = new Image();
        img.src = src;
        img.onload = img.onerror = () => {
            loadedImages++;
            let percent = Math.floor((loadedImages / totalImages) * 100);
            loadingBar.style.width = percent + "%";
            loadingText.innerText = percent + "%";
            
            if (loadedImages === totalImages) {
                setTimeout(finishPreload, 500); // Небольшая пауза для красоты
            }
        };
    });
}

function finishPreload() {
    document.getElementById('loading-screen').classList.remove('active');
    // Как только экран загрузки исчез, стартуем первую сцену
    setTimeout(() => {
        loadScene("start", true); // true = запуск без черного экрана (просто появление)
    }, 800);
}

// === 2. КИНЕМАТОГРАФИЧНАЯ ЗАГРУЗКА СЦЕНЫ ===
function loadScene(sceneId, isInitialLoad = false) {
    const scene = activeStory[sceneId];
    if (!scene) return;
    currentSceneId = sceneId;

    const fadeEl = document.getElementById('cinematic-fade');
    
    // Если это не самый первый запуск, делаем Fade-To-Black
    if (!isInitialLoad) {
        fadeEl.classList.remove('transparent'); // Экран чернеет
        
        // Ждем 500мс пока экран полностью черный, затем меняем картинки
        setTimeout(() => {
            applySceneData(scene);
            fadeEl.classList.add('transparent'); // Экран светлеет
        }, 500);
    } else {
        // Первый запуск - просто применяем и убираем черноту
        applySceneData(scene);
        fadeEl.classList.add('transparent');
    }
}

// Применение данных сцены
function applySceneData(scene) {
    // 1. Установка фона
    const bgEl = document.getElementById('vn-bg');
    if (bgEl) bgEl.style.backgroundImage = `url('${scene.bg}')`;

    // 2. Установка спрайтов
    updateSprite('sprite-left', scene.spriteLeft);
    updateSprite('sprite-center', scene.spriteCenter);
    updateSprite('sprite-right', scene.spriteRight);

    // 3. Установка спикера и сброс окна
    const speakerEl = document.getElementById('speaker-name');
    if (speakerEl) speakerEl.innerText = scene.speaker;
    
    const choicesCont = document.getElementById('choices-container');
    if (choicesCont) choicesCont.innerHTML = ""; 
    
    const clickFwd = document.getElementById('click-forward');
    if (clickFwd) clickFwd.style.display = "block"; 
    
    // Запуск печати текста
    typeText(scene.text, scene.choices);
}

function updateSprite(elementId, imgSrc) {
    const el = document.getElementById(elementId);
    if (!el) return;
    
    if (imgSrc && imgSrc !== "") {
        el.src = imgSrc;
        el.classList.remove('hidden');
    } else {
        // Жестко скрываем через класс
        el.classList.add('hidden');
        el.src = ""; // Очищаем источник, чтобы не было "призраков"
    }
}

// === 3. МЕХАНИКА ТЕКСТА ===
function typeText(text, choices) {
    const textEl = document.getElementById('dialog-text');
    if (!textEl) return;
    
    textEl.innerText = "";
    isTyping = true;
    let i = 0;
    
    clearInterval(typeInterval);
    typeInterval = setInterval(() => {
        if (i < text.length) {
            textEl.textContent += text[i];
            i++;
        } else {
            clearInterval(typeInterval);
            isTyping = false;
            showChoices(choices);
        }
    }, 35); // Плавная печать
}

function nextLine() {
    const scene = activeStory[currentSceneId];
    if (!scene) return;
    
    if (isTyping) {
        clearInterval(typeInterval);
        const textEl = document.getElementById('dialog-text');
        if (textEl) textEl.textContent = scene.text;
        isTyping = false;
        showChoices(scene.choices);
    } else if (scene.choices.length === 1 && scene.choices[0].text === "[Далее]") {
        loadScene(scene.choices[0].next);
    } else if (scene.choices.length === 1 && scene.choices[0].text.startsWith("[")) {
        loadScene(scene.choices[0].next);
    }
}

function showChoices(choices) {
    const clickFwd = document.getElementById('click-forward');
    const container = document.getElementById('choices-container');
    
    if (!container) return;
    
    if (choices.length === 0 || (choices.length === 1 && choices[0].text.startsWith("["))) {
        return;
    }
    
    if (clickFwd) clickFwd.style.display = "none"; 
    container.innerHTML = "";
    
    choices.forEach(c => {
        let btn = document.createElement('div');
        btn.className = "choice-btn";
        btn.innerText = c.text;
        btn.onclick = () => loadScene(c.next);
        container.appendChild(btn);
    });
}

// Запуск предзагрузки при открытии
document.addEventListener('DOMContentLoaded', () => {
    preloadChapterImages(activeStory);
});
