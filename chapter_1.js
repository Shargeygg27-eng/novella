window.CHAPTER_1 = {
    // ==========================================
    // ГЛАВА 1: ИЛЛЮЗИЯ БЕЗОПАСНОСТИ
    // ==========================================
    "start": { bg: "bg_room.webp", spriteLeft: "", spriteCenter: "zhanna_norm.webp", spriteRight: "", speaker: "Жанна", text: "Серёж... Ты скоро уходишь? Мне почему-то так тревожно сегодня.", choices: [{ text: "Всё будет хорошо, любимая. Я скоро вернусь.", next: "scene_room_2" }, { text: "Не накручивай себя. Закрой дверь и ложись спать.", next: "scene_room_2" }] },
    "scene_room_2": { bg: "bg_room.webp", spriteLeft: "", spriteCenter: "zhanna_norm.webp", spriteRight: "", speaker: "Жанна", text: "Хорошо... Я просто... Погоди, кто-то звонит в дверь.", choices: [{ text: "[Подойти к двери]", next: "scene_room_3" }] },
    "scene_room_3": { bg: "bg_room.webp", spriteLeft: "", spriteCenter: "zhanna_angry.webp", spriteRight: "", speaker: "Жанна", text: "На пороге никого нет. Но тут... пустая коробка. И внутри моё старое платье, которое я дарила Ане. Оно разорвано в клочья.", choices: [{ text: "Это почерк Ани. Не трогай это, я сейчас приеду!", next: "scene_room_4" }, { text: "Просто выброси это в мусор. Она пытается нас запугать.", next: "scene_room_4" }] },
    "scene_room_4": { bg: "bg_room.webp", spriteLeft: "", spriteCenter: "zhanna_angry.webp", spriteRight: "", speaker: "Жанна", text: "Я выброшу это. Но Серёжа... мне страшно. Я чувствую, что она где-то рядом.", choices: [{ text: "[На следующий день...]", next: "scene_street_1" }] },
    
    "scene_street_1": { bg: "bg_street.webp", spriteLeft: "", spriteCenter: "zhanna_norm.webp", spriteRight: "", speaker: "Жанна", text: "(Мысли) Голова раскалывается после вчерашнего. Нужно просто пройтись и подышать воздухом. Серёжа сказал, что задержится...", choices: [{ text: "[Идти дальше]", next: "scene_street_2" }] },
    "scene_street_2": { bg: "bg_street.webp", spriteLeft: "", spriteCenter: "roma_dark.webp", spriteRight: "zhanna_norm.webp", speaker: "Рома", text: "Жанна? Привет. Не ожидал тебя здесь увидеть. Выглядишь... уставшей.", choices: [{ text: "Рома? Что ты здесь делаешь?", next: "scene_street_roma_talk" }, { text: "Отойди от меня. Мне некогда с тобой говорить.", next: "scene_street_roma_aggro" }] },
    "scene_street_roma_talk": { bg: "bg_street.webp", spriteLeft: "", spriteCenter: "roma_dark.webp", spriteRight: "zhanna_norm.webp", speaker: "Рома", text: "Просто гуляю. Слушай, я не хочу лезть в вашу жизнь, но... ты уверена, что Серёжа сейчас на работе? Я видел его машину возле дома Ани.", choices: [{ text: "Ты лжешь! Зачем ты это делаешь?!", next: "scene_street_roma_lie" }, { text: "У тебя есть доказательства, или ты просто треплешь языком?", next: "scene_street_roma_proof" }] },
    "scene_street_roma_aggro": { bg: "bg_street.webp", spriteLeft: "", spriteCenter: "roma_dark.webp", spriteRight: "zhanna_angry.webp", speaker: "Рома", text: "Грубо. А я ведь хотел тебя предупредить. Твой ненаглядный Серёжа прямо сейчас утешает свою бывшую.", choices: [{ text: "Ты больной! Я не верю ни единому твоему слову!", next: "scene_street_roma_lie" }, { text: "Покажи доказательства, или пошел вон.", next: "scene_street_roma_proof" }] },
    "scene_street_roma_proof": { bg: "bg_street.webp", spriteLeft: "", spriteCenter: "roma_dark.webp", spriteRight: "zhanna_angry.webp", speaker: "Рома", text: "(Достает телефон) Вот, смотри. Это сделано час назад. Он заходит в её подъезд. Ты всё ещё думаешь, что нужна ему?", choices: [{ text: "(С дрожью) Это фотошоп... Это не может быть правдой...", next: "scene_street_end" }, { text: "(Выбить телефон из его рук) Держись от нас подальше, психопат!", next: "scene_street_end" }] },
    "scene_street_roma_lie": { bg: "bg_street.webp", spriteLeft: "", spriteCenter: "roma_dark.webp", spriteRight: "zhanna_angry.webp", speaker: "Рома", text: "Верь во что хочешь, Жанна. Но когда иллюзия разобьется, не приходи ко мне плакать. Ты сделала свой выбор.", choices: [{ text: "[Уйти прочь]", next: "scene_street_end" }] },
    "scene_street_end": { bg: "bg_street.webp", spriteLeft: "", spriteCenter: "zhanna_norm.webp", spriteRight: "", speaker: "Жанна", text: "(Мысли) У меня трясутся руки. Нужно срочно вернуться домой. Рома просто пытается залезть мне в голову... Серёжа бы так не поступил.", choices: [{ text: "[Вернуться в квартиру]", next: "scene_room_paranoia_1" }] },
    
    "scene_room_paranoia_1": { bg: "bg_room.webp", spriteLeft: "", spriteCenter: "zhanna_angry.webp", spriteRight: "", speaker: "Жанна", text: "Телефон Серёжи недоступен... Почему он недоступен?! Вдох-выдох. У него просто села батарея.", choices: [{ text: "[Ждать]", next: "scene_room_paranoia_2" }] },
    "scene_room_paranoia_2": { bg: "bg_room.webp", spriteLeft: "", spriteCenter: "zhanna_norm.webp", spriteRight: "", speaker: "Телефон (СМС от Серёжи)", text: "«Жанна, срочно приезжай в наш старый офис. Мне нужна твоя помощь. Я всё объясню на месте. Никому не звони.»", choices: [{ text: "Это странно... Но я должна поехать.", next: "scene_trap_1" }, { text: "Что-то здесь не так. Но я не могу его бросить.", next: "scene_trap_1" }] },
    
    "scene_trap_1": { bg: "bg_ruin.webp", spriteLeft: "", spriteCenter: "zhanna_norm.webp", spriteRight: "", speaker: "Жанна", text: "Серёжа?! Ты здесь? Тут всё перевернуто... Боже, что здесь произошло?", choices: [{ text: "[Пройти вглубь комнаты]", next: "scene_trap_2" }] },
    "scene_trap_2": { bg: "bg_ruin.webp", spriteLeft: "anya_smirk.webp", spriteCenter: "", spriteRight: "zhanna_angry.webp", speaker: "Аня", text: "А он всё-таки был прав. Ты прибежала по первому зову, как преданная собачка.", choices: [{ text: "Аня?! Где Серёжа?! Что ты с ним сделала?!", next: "scene_trap_3" }, { text: "Я так и знала, что это твоих рук дело. Мразь.", next: "scene_trap_3" }] },
    "scene_trap_3": { bg: "bg_ruin.webp", spriteLeft: "anya_smirk.webp", spriteCenter: "roma_dark.webp", spriteRight: "zhanna_angry.webp", speaker: "Рома", text: "С ним всё в порядке, Жанна. Он просто... немного занят. А у нас с тобой остался незаконченный разговор.", choices: [{ text: "Вы оба просто больные! Вы не разрушите нашу жизнь!", next: "scene_trap_leave" }, { text: "Я сейчас же вызываю полицию!", next: "scene_trap_leave" }] },
    "scene_trap_leave": { bg: "bg_ruin.webp", spriteLeft: "anya_smirk.webp", spriteCenter: "roma_dark.webp", spriteRight: "zhanna_angry.webp", speaker: "Аня", text: "Ой, полицию? Как страшно. Мы тебя не тронем, Жанна. По крайней мере, физически. Мы просто хотели передать привет.", choices: [{ text: "Чего вы добиваетесь?!", next: "scene_trap_leave_2" }] },
    "scene_trap_leave_2": { bg: "bg_ruin.webp", spriteLeft: "anya_smirk.webp", spriteCenter: "roma_dark.webp", spriteRight: "zhanna_angry.webp", speaker: "Рома", text: "Мы хотим, чтобы ты поняла, с кем живешь. Спроси Серёжу, где он был вчера с восьми до десяти вечера. Если, конечно, он решится сказать правду.", choices: [{ text: "[Далее]", next: "scene_trap_leave_3" }] },
    "scene_trap_leave_3": { bg: "bg_ruin.webp", spriteLeft: "", spriteCenter: "zhanna_scared.webp", spriteRight: "", speaker: "Жанна", text: "(Мысли) Они просто ушли... Оставили меня здесь. У меня дрожат колени. Нужно вернуться домой до того, как придет Серёжа.", choices: [{ text: "[Поехать домой]", next: "ch2_home_1" }] },

    // ==========================================
    // ГЛАВА 2: СЕМЕНА СОМНЕНИЙ
    // ==========================================
    "ch2_home_1": { bg: "bg_room_night.webp", spriteLeft: "", spriteCenter: "zhanna_scared.webp", spriteRight: "", speaker: "Жанна", text: "Я заперла дверь на два оборота. На часах полночь. Серёжи до сих пор нет. Что, если они были правы? Нет... я не должна им верить.", choices: [{ text: "[Звук открывающегося замка]", next: "ch2_serezha_arrives" }] },
    "ch2_serezha_arrives": { bg: "bg_room_night.webp", spriteLeft: "serezha_norm.webp", spriteCenter: "", spriteRight: "zhanna_scared.webp", speaker: "Серёжа", text: "Жанна? Почему ты сидишь в темноте? Прости, что так поздно, на работе был полный завал, а телефон сел.", choices: [{ text: "(Скрытная) Всё нормально. Просто задумалась.", next: "ch2_lie_to_serezha" }, { text: "(Честная) Серёжа... мне страшно. Я сегодня видела Аню и Рому.", next: "ch2_truth_to_serezha" }] },
    "ch2_lie_to_serezha": { bg: "bg_room_night.webp", spriteLeft: "serezha_shadow.webp", spriteCenter: "", spriteRight: "zhanna_scared.webp", speaker: "Серёжа", text: "Точно всё хорошо? Ты выглядишь бледной. Ладно, я пойду в душ.", choices: [{ text: "[Смотреть ему вслед]", next: "ch2_phone_check" }] },
    "ch2_truth_to_serezha": { bg: "bg_room_night.webp", spriteLeft: "serezha_norm.webp", spriteCenter: "", spriteRight: "zhanna_scared.webp", speaker: "Серёжа", text: "Что?! Они тебе угрожали? Жанна, почему ты сразу мне не позвонила?! Так, я разберусь с этим. Они больше к тебе не подойдут.", choices: [{ text: "Спасибо... Я так испугалась.", next: "ch2_phone_check" }] },
    
    "ch2_phone_check": { bg: "bg_room_night.webp", spriteLeft: "", spriteCenter: "zhanna_norm.webp", spriteRight: "", speaker: "Жанна", text: "(Мысли) Он пошел в ванную, а телефон оставил на столе... Экран загорелся. Одно новое уведомление.", choices: [{ text: "[Прочитать уведомление]", next: "ch3_confrontation_start" }, { text: "[Отвернуться от телефона]", next: "ch3_trust_path" }] },

    // ==========================================
    // ГЛАВА 3: ПРАВДА И СВЕТ
    // ==========================================
    "ch3_confrontation_start": { bg: "bg_room_night.webp", spriteLeft: "", spriteCenter: "zhanna_scared.webp", spriteRight: "", speaker: "Телефон Серёжи", text: "«Скрытый номер: Ты забыл у меня свои ключи. Завтра в то же время?»", choices: [{ text: "(Задохнуться от ужаса) Не может быть...", next: "ch3_serezha_returns" }] },
    "ch3_trust_path": { bg: "bg_room_night.webp", spriteLeft: "", spriteCenter: "zhanna_norm.webp", spriteRight: "", speaker: "Жанна", text: "(Мысли) Нет. Я не буду проверять его телефон. Я не уподоблюсь им. Я доверяю Серёже.", choices: [{ text: "[Далее]", next: "ch3_serezha_returns" }] },

    "ch3_serezha_returns": { bg: "bg_room_night.webp", spriteLeft: "serezha_norm.webp", spriteCenter: "", spriteRight: "zhanna_scared.webp", speaker: "Серёжа", text: "Фух, вода немного привела в чувства... Жанна, ты плачешь? Что случилось?", choices: [{ text: "Серёжа... Тебе пришло сообщение. Про ключи. От скрытого номера.", next: "ch3_serezha_shocked" }] },
    "ch3_serezha_shocked": { bg: "bg_room_night.webp", spriteLeft: "serezha_shocked.webp", spriteCenter: "", spriteRight: "zhanna_cry.webp", speaker: "Серёжа", text: "Какое сообщение? О чем ты говоришь? Дай сюда телефон.", choices: [{ text: "[Смотреть, как он читает]", next: "ch3_the_truth_revealed" }] },
    "ch3_the_truth_revealed": { bg: "bg_room_night.webp", spriteLeft: "serezha_norm.webp", spriteCenter: "", spriteRight: "zhanna_cry.webp", speaker: "Серёжа", text: "Что за бред?! Это SMS-подмена. Посмотри детализацию номера — это сервис для анонимных рассылок. Кто-то специально шлет этот мусор!", choices: [{ text: "Но Рома показывал мне фото, где ты заходишь в подъезд Ани!", next: "ch3_the_photo_lie" }] },
    "ch3_the_photo_lie": { bg: "bg_room_night.webp", spriteLeft: "serezha_shocked.webp", spriteCenter: "", spriteRight: "zhanna_cry.webp", speaker: "Серёжа", text: "В подъезд Ани?! Жанна, я не был там с момента нашего расставания! Я был в подвальной мастерской у ювелира сегодня. Связи вообще не было.", choices: [{ text: "Ювелира? Но Рома...", next: "ch3_the_gift" }] },
    "ch3_the_gift": { bg: "bg_room_night.webp", spriteLeft: "serezha_smile.webp", spriteCenter: "", spriteRight: "zhanna_scared.webp", speaker: "Серёжа", text: "(Достает из кармана бархатную коробочку) Я был у ювелира, Жанна. Хотел забрать это к нашей годовщине. Они просто пытаются разрушить нас.", choices: [{ text: "Серёжа... я... я так испугалась.", next: "ch3_embrace" }] },
    "ch3_embrace": { bg: "bg_room_night.webp", spriteLeft: "serezha_smile.webp", spriteCenter: "", spriteRight: "zhanna_smile.webp", speaker: "Серёжа", text: "(Крепко обнимает) Ты ни в чем не виновата. Я люблю тебя. И я никому не позволю разрушить нашу семью.", choices: [{ text: "Я тоже тебя люблю. Но они... они хотели войны.", next: "ch3_united" }] },
    "ch3_united": { bg: "bg_room_night.webp", spriteLeft: "serezha_norm.webp", spriteCenter: "", spriteRight: "zhanna_angry.webp", speaker: "Жанна", text: "(Вытирая слезы, голос тверд) Они хотели войны? Они её получат. И мы уничтожим их. Обоих.", choices: [{ text: "[Пришло время Часа Расплаты...]", next: "ch4_start" }] },

    // ==========================================
    // ГЛАВА 4: ЧАС РАСПЛАТЫ (HOUR OF RECKONING)
    // ==========================================
    
    "ch4_start": {
        bg: "bg_street.webp",
        spriteLeft: "", spriteCenter: "zhanna_norm.webp", spriteRight: "",
        speaker: "Жанна",
        text: "(Мысли) Прошло два дня. Серёжа подделал переписку, используя телефоны Ромы и Ани. Мы заманили их в ловушку на старом складе. Они думают, что сейчас добьют нас.",
        choices: [
            { text: "[Войти на заброшенный склад]", next: "ch4_trap_door" }
        ]
    },
    "ch4_trap_door": {
        bg: "bg_ruin.webp", 
        spriteLeft: "anya_smirk.webp", spriteCenter: "roma_dark.webp", spriteRight: "",
        speaker: "Аня",
        text: "*самодовольно* Серёж? А мы тебя заждались. Ну что, готов признать, что проиграл? Или нам скинуть Жанне еще пару интересных файлов?",
        choices: [
            { text: "[Звук тяжелого засова на двери]", next: "ch4_trap_revealed" }
        ]
    },
    "ch4_trap_revealed": {
        bg: "bg_ruin.webp",
        spriteLeft: "serezha_norm.webp", spriteCenter: "", spriteRight: "zhanna_angry.webp", 
        speaker: "Серёжа",
        text: "*холодно* Ты правда думала, что мы будем вечно терпеть твои игры, сука? Твои дешевые фокусы закончились.",
        choices: [
            { text: "Аня делает шаг назад", next: "ch4_psychological_pressure_1" }
        ]
    },
    "ch4_psychological_pressure_1": {
        bg: "bg_ruin.webp",
        spriteLeft: "anya_smirk.webp", spriteCenter: "roma_dark.webp", spriteRight: "zhanna_angry.webp",
        speaker: "Жанна",
        text: "*делает шаг вперед* Посмотри на неё, Серёж. Столько гонора, а сейчас трясется. Твой ручной пес, Рома, даже гавкнуть сейчас боится.",
        choices: [
            { text: "Рома бросается вперед", next: "ch4_psychological_pressure_2" }
        ]
    },
    "ch4_psychological_pressure_2": {
        bg: "bg_ruin.webp",
        spriteLeft: "anya_smirk.webp", spriteCenter: "roma_beaten.webp", spriteRight: "serezha_angry.webp",
        speaker: "Серёжа",
        text: "*бьет Рому наотмашь, тот падает* А ты, уебок, вообще лежи и не рыпайся. Решил, что сможешь лезть в мою семью? Хуево ты всё просчитал.",
        choices: [
            { text: "[Рома остается лежать на полу]", next: "ch4_physical_dominance" }
        ]
    },
    "ch4_physical_dominance": {
        bg: "bg_ruin.webp",
        spriteLeft: "anya_smirk.webp", spriteCenter: "roma_beaten.webp", spriteRight: "zhanna_angry.webp", 
        speaker: "Аня",
        text: "*в панике срывается* Вы оба психи! Вы не посмеете... Я всё равно всё уничтожу! Я...",
        choices: [
            { text: "[Сбить Аню с ног]", next: "ch4_dominance_culmination" }
        ]
    },

    // ТА САМАЯ СЦЕНА С КАРТИНКИ
    "ch4_dominance_culmination": {
        bg: "bg_ruin.webp",
        spriteLeft: "", spriteCenter: "cg_zhanna_dominance.webp", spriteRight: "", // Выводим арт по центру!
        speaker: "Жанна",
        text: "*ставит тяжелый ботинок прямо на лицо Ане, вдавливая её в пол* Я сказала — завали ебало. Ты пыталась отнять моё счастье. А теперь ты жалкий мусор у меня под ногами. Усекла, блядь?",
        choices: [
            { text: "Аня скулит от боли и унижения", next: "ch4_terms_and_choices" }
        ]
    },
    "ch4_terms_and_choices": {
        bg: "bg_ruin.webp",
        spriteLeft: "anya_smirk.webp", spriteCenter: "roma_beaten.webp", spriteRight: "serezha_norm.webp", 
        speaker: "Серёжа",
        text: "Расклад такой. Вы выметаетесь из города. Сегодня же. Если я увижу хотя бы тень кого-то из вас возле Жанны — я переломаю вам обоим ноги. Это не угроза, это факт.",
        choices: [
            { text: "А если нет?", next: "ch4_terms_and_choices_2" }
        ]
    },
    "ch4_terms_and_choices_2": {
        bg: "bg_ruin.webp",
        spriteLeft: "anya_smirk.webp", spriteCenter: "roma_beaten.webp", spriteRight: "zhanna_angry.webp",
        speaker: "Жанна",
        text: "*убирает ногу и кидает им папку* А если нет, то вот это чистосердечное признание в преследовании, взломе и угрозах вместе с вашими фотками уходит ментам. Подписывайте, уебки. Быстро.",
        choices: [
            { text: "[Заставить их подписать]", next: "chapter_4_end" }
        ]
    },
    "chapter_4_end": {
        bg: "bg_ruin.webp",
        spriteLeft: "", spriteCenter: "", spriteRight: "", 
        speaker: "Система",
        text: "ГЛАВА 4 ЗАВЕРШЕНА. Враги полностью раздавлены. Но закончилась ли на этом история?",
        choices: [
            { text: "[Продолжить...]", next: "start" }
        ]
    }
};
