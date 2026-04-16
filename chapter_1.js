// Глобальный объект для хранения глав
window.CHAPTER_1 = {
    "start": {
        bg: "bg_room.webp",
        spriteLeft: "", spriteCenter: "zhanna_norm.webp", spriteRight: "",
        speaker: "Жанна",
        text: "Серёж... Ты скоро уходишь? Мне почему-то так тревожно сегодня.",
        choices: [
            { text: "Всё будет хорошо, любимая. Я скоро вернусь.", next: "scene_room_2" },
            { text: "Не накручивай себя. Закрой дверь и ложись спать.", next: "scene_room_2" }
        ]
    },
    "scene_room_2": {
        bg: "bg_room.webp",
        spriteLeft: "", spriteCenter: "zhanna_norm.webp", spriteRight: "",
        speaker: "Жанна",
        text: "Хорошо... Я просто... Погоди, кто-то звонит в дверь.",
        choices: [
            { text: "[Подойти к двери]", next: "scene_room_3" }
        ]
    },
    "scene_room_3": {
        bg: "bg_room.webp",
        spriteLeft: "", spriteCenter: "zhanna_angry.webp", spriteRight: "",
        speaker: "Жанна",
        text: "На пороге никого нет. Но тут... пустая коробка. И внутри моё старое платье, которое я дарила Ане. Оно разорвано в клочья.",
        choices: [
            { text: "Это почерк Ани. Не трогай это, я сейчас приеду!", next: "scene_room_4" },
            { text: "Просто выброси это в мусор. Она пытается нас запугать.", next: "scene_room_4" }
        ]
    },
    "scene_room_4": {
        bg: "bg_room.webp",
        spriteLeft: "", spriteCenter: "zhanna_angry.webp", spriteRight: "",
        speaker: "Жанна",
        text: "Я выброшу это. Но Серёжа... мне страшно. Я чувствую, что она где-то рядом.",
        choices: [
            { text: "[На следующий день...]", next: "scene_street_1" }
        ]
    },

    "scene_street_1": {
        bg: "bg_street.webp",
        spriteLeft: "", spriteCenter: "zhanna_norm.webp", spriteRight: "",
        speaker: "Жанна",
        text: "(Мысли) Голова раскалывается после вчерашнего. Нужно просто пройтись и подышать воздухом. Серёжа сказал, что задержится...",
        choices: [
            { text: "[Идти дальше]", next: "scene_street_2" }
        ]
    },
    "scene_street_2": {
        bg: "bg_street.webp",
        spriteLeft: "", spriteCenter: "roma_dark.webp", spriteRight: "zhanna_norm.webp",
        speaker: "Рома",
        text: "Жанна? Привет. Не ожидал тебя здесь увидеть. Выглядишь... уставшей.",
        choices: [
            { text: "Рома? Что ты здесь делаешь?", next: "scene_street_roma_talk" },
            { text: "Отойди от меня. Мне некогда с тобой говорить.", next: "scene_street_roma_aggro" }
        ]
    },
    "scene_street_roma_talk": {
        bg: "bg_street.webp",
        spriteLeft: "", spriteCenter: "roma_dark.webp", spriteRight: "zhanna_norm.webp",
        speaker: "Рома",
        text: "Просто гуляю. Слушай, я не хочу лезть в вашу жизнь, но... ты уверена, что Серёжа сейчас на работе? Я видел его машину возле дома Ани.",
        choices: [
            { text: "Ты лжешь! Зачем ты это делаешь?!", next: "scene_street_roma_lie" },
            { text: "У тебя есть доказательства, или ты просто треплешь языком?", next: "scene_street_roma_proof" }
        ]
    },
    "scene_street_roma_aggro": {
        bg: "bg_street.webp",
        spriteLeft: "", spriteCenter: "roma_dark.webp", spriteRight: "zhanna_angry.webp",
        speaker: "Рома",
        text: "Грубо. А я ведь хотел тебя предупредить. Твой ненаглядный Серёжа прямо сейчас утешает свою бывшую.",
        choices: [
            { text: "Ты больной! Я не верю ни единому твоему слову!", next: "scene_street_roma_lie" },
            { text: "Покажи доказательства, или пошел вон.", next: "scene_street_roma_proof" }
        ]
    },
    "scene_street_roma_proof": {
        bg: "bg_street.webp",
        spriteLeft: "", spriteCenter: "roma_dark.webp", spriteRight: "zhanna_angry.webp",
        speaker: "Рома",
        text: "(Достает телефон) Вот, смотри. Это сделано час назад. Он заходит в её подъезд. Ты всё ещё думаешь, что нужна ему?",
        choices: [
            { text: "(С дрожью) Это фотошоп... Это не может быть правдой...", next: "scene_street_end" },
            { text: "(Выбить телефон из его рук) Держись от нас подальше, психопат!", next: "scene_street_end" }
        ]
    },
    "scene_street_roma_lie": {
        bg: "bg_street.webp",
        spriteLeft: "", spriteCenter: "roma_dark.webp", spriteRight: "zhanna_angry.webp",
        speaker: "Рома",
        text: "Верь во что хочешь, Жанна. Но когда иллюзия разобьется, не приходи ко мне плакать. Ты сделала свой выбор.",
        choices: [
            { text: "[Уйти прочь]", next: "scene_street_end" }
        ]
    },
    "scene_street_end": {
        bg: "bg_street.webp",
        spriteLeft: "", spriteCenter: "zhanna_norm.webp", spriteRight: "",
        speaker: "Жанна",
        text: "(Мысли) У меня трясутся руки. Нужно срочно вернуться домой. Рома просто пытается залезть мне в голову... Серёжа бы так не поступил.",
        choices: [
            { text: "[Вернуться в квартиру]", next: "scene_room_paranoia_1" }
        ]
    },

    "scene_room_paranoia_1": {
        bg: "bg_room.webp",
        spriteLeft: "", spriteCenter: "zhanna_angry.webp", spriteRight: "",
        speaker: "Жанна",
        text: "Телефон Серёжи недоступен... Почему он недоступен?! Вдох-выдох. У него просто села батарея.",
        choices: [
            { text: "[Ждать]", next: "scene_room_paranoia_2" }
        ]
    },
    "scene_room_paranoia_2": {
        bg: "bg_room.webp",
        spriteLeft: "", spriteCenter: "zhanna_norm.webp", spriteRight: "",
        speaker: "Телефон (СМС от Серёжи)",
        text: "«Жанна, срочно приезжай в наш старый офис. Мне нужна твоя помощь. Я всё объясню на месте. Никому не звони.»",
        choices: [
            { text: "Это странно... Но я должна поехать.", next: "scene_trap_1" },
            { text: "Что-то здесь не так. Но я не могу его бросить.", next: "scene_trap_1" }
        ]
    },

    "scene_trap_1": {
        bg: "bg_ruin.webp",
        spriteLeft: "", spriteCenter: "zhanna_norm.webp", spriteRight: "",
        speaker: "Жанна",
        text: "Серёжа?! Ты здесь? Тут всё перевернуто... Боже, что здесь произошло?",
        choices: [
            { text: "[Пройти вглубь комнаты]", next: "scene_trap_2" }
        ]
    },
    "scene_trap_2": {
        bg: "bg_ruin.webp",
        spriteLeft: "anya_smirk.webp", spriteCenter: "", spriteRight: "zhanna_angry.webp",
        speaker: "Аня",
        text: "А он всё-таки был прав. Ты прибежала по первому зову, как преданная собачка.",
        choices: [
            { text: "Аня?! Где Серёжа?! Что ты с ним сделала?!", next: "scene_trap_3" },
            { text: "Я так и знала, что это твоих рук дело. Мразь.", next: "scene_trap_3" }
        ]
    },
    "scene_trap_3": {
        bg: "bg_ruin.webp",
        spriteLeft: "anya_smirk.webp", spriteCenter: "roma_dark.webp", spriteRight: "zhanna_angry.webp",
        speaker: "Рома",
        text: "С ним всё в порядке, Жанна. Он просто... немного занят. А у нас с тобой остался незаконченный разговор.",
        choices: [
            { text: "Вы оба просто больные! Вы не разрушите нашу жизнь!", next: "scene_trap_leave" },
            { text: "Я сейчас же вызываю полицию!", next: "scene_trap_leave" }
        ]
    },
    "scene_trap_leave": {
        bg: "bg_ruin.webp",
        spriteLeft: "anya_smirk.webp", spriteCenter: "roma_dark.webp", spriteRight: "zhanna_angry.webp",
        speaker: "Аня",
        text: "Ой, полицию? Как страшно. Мы тебя не тронем, Жанна. По крайней мере, физически. Мы просто хотели передать привет.",
        choices: [
            { text: "Чего вы добиваетесь?!", next: "scene_trap_leave_2" }
        ]
    },
    "scene_trap_leave_2": {
        bg: "bg_ruin.webp",
        spriteLeft: "anya_smirk.webp", spriteCenter: "roma_dark.webp", spriteRight: "zhanna_angry.webp",
        speaker: "Рома",
        text: "Мы хотим, чтобы ты поняла, с кем живешь. Спроси Серёжу, где он был вчера с восьми до десяти вечера. Если, конечно, он решится сказать правду.",
        choices: [
            { text: "[Далее]", next: "scene_trap_leave_3" }
        ]
    },
    "scene_trap_leave_3": {
        bg: "bg_ruin.webp",
        spriteLeft: "", spriteCenter: "zhanna_scared.webp", spriteRight: "",
        speaker: "Жанна",
        text: "(Мысли) Они просто ушли... Оставили меня здесь. У меня дрожат колени. Нужно вернуться домой до того, как придет Серёжа.",
        choices: [
            { text: "[Поехать домой]", next: "ch2_home_1" }
        ]
    },

    "ch2_home_1": {
        bg: "bg_room_night.webp",
        spriteLeft: "", spriteCenter: "zhanna_scared.webp", spriteRight: "",
        speaker: "Жанна",
        text: "Я заперла дверь на два оборота. На часах полночь. Серёжи до сих пор нет. Что, если они были правы? Нет... я не должна им верить.",
        choices: [
            { text: "[Звук открывающегося замка]", next: "ch2_serezha_arrives" }
        ]
    },
    "ch2_serezha_arrives": {
        bg: "bg_room_night.webp",
        spriteLeft: "serezha_norm.webp", spriteCenter: "", spriteRight: "zhanna_scared.webp",
        speaker: "Серёжа",
        text: "Жанна? Почему ты сидишь в темноте? Прости, что так поздно, на работе был полный завал, а телефон сел.",
        choices: [
            { text: "(Скрытная) Всё нормально. Просто задумалась.", next: "ch2_lie_to_serezha" },
            { text: "(Честная) Серёжа... мне страшно. Я сегодня видела Аню и Рому.", next: "ch2_truth_to_serezha" }
        ]
    },
    "ch2_lie_to_serezha": {
        bg: "bg_room_night.webp",
        spriteLeft: "serezha_shadow.webp", spriteCenter: "", spriteRight: "zhanna_scared.webp",
        speaker: "Серёжа",
        text: "Точно всё хорошо? Ты выглядишь бледной. Ладно, я пойду в душ.",
        choices: [
            { text: "[Смотреть ему вслед]", next: "ch2_phone_check" }
        ]
    },
    "ch2_truth_to_serezha": {
        bg: "bg_room_night.webp",
        spriteLeft: "serezha_norm.webp", spriteCenter: "", spriteRight: "zhanna_scared.webp",
        speaker: "Серёжа",
        text: "Что?! Они тебе угрожали? Жанна, почему ты сразу мне не позвонила?! Так, я разберусь с этим. Они больше к тебе не подойдут.",
        choices: [
            { text: "Спасибо... Я так испугалась.", next: "ch2_phone_check" }
        ]
    },
    "ch2_phone_check": {
        bg: "bg_room_night.webp",
        spriteLeft: "", spriteCenter: "zhanna_norm.webp", spriteRight: "",
        speaker: "Жанна",
        text: "(Мысли) Он оставил свой телефон на столе. Он поставил его на зарядку. Экран загорелся... Одно новое уведомление.",
        choices: [
            { text: "[Прочитать уведомление]", next: "ch2_notification" },
            { text: "[Отвернуться от телефона]", next: "ch2_ignore_phone" }
        ]
    },
    "ch2_notification": {
        bg: "bg_room_night.webp",
        spriteLeft: "", spriteCenter: "zhanna_scared.webp", spriteRight: "",
        speaker: "Телефон Серёжи",
        text: "«Скрытый номер: Ты забыл у меня свои ключи. Завтра в то же время?»",
        choices: [
            { text: "[Конец обновления]", next: "chapter_2_end" }
        ]
    },
    "ch2_ignore_phone": {
        bg: "bg_room_night.webp",
        spriteLeft: "", spriteCenter: "zhanna_scared.webp", spriteRight: "",
        speaker: "Жанна",
        text: "(Мысли) Нет. Я не буду проверять его телефон. Я не уподоблюсь им. Я доверяю ему.",
        choices: [
            { text: "[Конец обновления]", next: "chapter_2_end" }
        ]
    },
    "chapter_2_end": {
        bg: "bg_room_night.webp",
        spriteLeft: "", spriteCenter: "", spriteRight: "",
        speaker: "Система",
        text: "ГЛАВА 2 ЗАВЕРШЕНА. Семена сомнений посеяны. Ваше доверие определит финал в следующих главах...",
        choices: [
            { text: "[Начать с начала]", next: "start" }
        ]
    }
};
