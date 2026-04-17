let currentSceneId = "start";
let isTyping = false;
let typeInterval;
let activeStory = window.CHAPTER_1; 

// === 0. ИНИЦИАЛИЗАЦИЯ TELEGRAM WEB APP ===
const tg = window.Telegram.WebApp;
tg.expand(); 
// Маскируем системную шапку Телеграма под цвет нашей игры
tg.setHeaderColor('#000000'); 
tg.setBackgroundColor('#000000');

if (tg.requestFullscreen) {
    tg.requestFullscreen(); 
}

// === 1. ЛОГИКА ГЛАВНОГО МЕНЮ ===
document.addEventListener('DOMContentLoaded', () => {
    generateChaptersGrid();
});

function startGame() {
    document.getElementById('main-menu').classList.remove('active');
    document.getElementById('vn-screen').style.display = "block";
    document.getElementById('loading-screen').classList.add('active');
    preloadChapterImages(activeStory, "start");
}

function showChaptersMenu() {
    document.getElementById('main-menu').classList.remove('active');
    document.getElementById('chapters-menu').classList.add('active');
}

function hideChaptersMenu() {
    document.getElementById('chapters-menu').classList.remove('active');
    document.getElementById('main-menu').classList.add('active');
}

function generateChaptersGrid() {
    const grid = document.getElementById('chapters-grid');
    const entryPoints = ["start", "ch2_home_1", "ch3_serezha_returns", "ch4_start"]; 
    const TOTAL_CHAPTERS = 50;

    for(let i = 1; i <= TOTAL_CHAPTERS; i++) {
        let card = document.createElement('div');
        card.className = "chapter-card";
        
        if (i <= 4) {
            card.innerHTML = `Глава ${i}`;
            card.onclick = () => {
                document.getElementById('chapters-menu').classList.remove('active');
                document.getElementById('vn-screen').style.display = "block";
                document.getElementById('loading-screen').classList.add('active');
                preloadChapterImages(activeStory, entryPoints[i-1]);
            };
        } else {
            card.classList.add('locked');
            card.innerHTML = `🔒<br>Глава ${i}<br><span class="soon-text">скоро...</span>`;
        }
        grid.appendChild(card);
    }
}

// === 2. НАСТОЯЩИЙ ПРЕЛОАДЕР (ПРИ ЗАПУСКЕ) ===
async function preloadChapterImages(storyData, startSceneId) {
    const imagesToLoad = new Set();
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
        finishPreload(startSceneId);
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
                setTimeout(() => finishPreload(startSceneId), 500); 
            }
        };
    });
}

function finishPreload(startSceneId) {
    document.getElementById('loading-screen').classList.remove('active');
    setTimeout(() => {
        loadScene(startSceneId, true); 
    }, 800);
}

// === 3. ИМИТАЦИЯ ЗАГРУЗКИ МЕЖДУ ГЛАВАМИ ===
function simulateChapterTransition(sceneId) {
    const loadingScreen = document.getElementById('loading-screen');
    const loadingBar = document.getElementById('loading-bar-fill');
    const loadingText = document.getElementById('loading-text');
    
    loadingScreen.classList.add('active');
    loadingBar.style.width = "0%";
    loadingText.innerText = "0%";
    
    let percent = 0;
    // Искусственная анимация загрузки на 1-2 секунды
    let interval = setInterval(() => {
        percent += Math.floor(Math.random() * 15) + 5; 
        if (percent > 100) percent = 100;
        
        loadingBar.style.width = percent + "%";
        loadingText.innerText = percent + "%";
        
        if (percent === 100) {
            clearInterval(interval);
            setTimeout(() => {
                loadingScreen.classList.remove('active');
                setTimeout(() => {
                    loadScene(sceneId, true); // Грузим сцену сразу, экран и так был перекрыт
                }, 600);
            }, 500);
        }
    }, 150);
}

// === 4. КИНЕМАТОГРАФИЧНАЯ ЗАГРУЗКА СЦЕНЫ ===
function loadScene(sceneId, isInitialLoad = false) {
    if (sceneId === "start_menu") {
        document.getElementById('vn-screen').style.display = "none";
        document.getElementById('main-menu').classList.add('active');
        return;
    }

    // Перехватчик: Если идем в новую главу по сюжету (а не из меню)
    const chapterStarts = ["ch2_home_1", "ch3_confrontation_start", "ch3_trust_path", "ch4_start"];
    if (chapterStarts.includes(sceneId) && !isInitialLoad) {
        simulateChapterTransition(sceneId);
        return; // Останавливаем обычную загрузку, запускаем экран загрузки
    }

    const scene = activeStory[sceneId];
    if (!scene) return;
    currentSceneId = sceneId;

    const fadeEl = document.getElementById('cinematic-fade');
    
    if (!isInitialLoad) {
        fadeEl.classList.remove('transparent'); 
        setTimeout(() => {
            applySceneData(scene);
            fadeEl.classList.add('transparent'); 
        }, 500);
    } else {
        applySceneData(scene);
        fadeEl.classList.add('transparent');
    }
}

function applySceneData(scene) {
    const bgEl = document.getElementById('vn-bg');
    if (bgEl) bgEl.style.backgroundImage = `url('${scene.bg}')`;

    updateSprite('sprite-left', scene.spriteLeft);
    updateSprite('sprite-center', scene.spriteCenter);
    updateSprite('sprite-right', scene.spriteRight);

    const speakerEl = document.getElementById('speaker-name');
    if (speakerEl) speakerEl.innerText = scene.speaker;
    
    const choicesCont = document.getElementById('choices-container');
    if (choicesCont) choicesCont.innerHTML = ""; 
    
    const clickFwd = document.getElementById('click-forward');
    if (clickFwd) clickFwd.style.display = "block"; 
    
    typeText(scene.text, scene.choices);
}

function updateSprite(elementId, imgSrc) {
    const el = document.getElementById(elementId);
    if (!el) return;
    if (imgSrc && imgSrc !== "") {
        el.src = imgSrc;
        el.classList.remove('hidden');
    } else {
        el.classList.add('hidden');
        el.src = ""; 
    }
}

// === 5. МЕХАНИКА ТЕКСТА ===
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
    }, 35); 
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
