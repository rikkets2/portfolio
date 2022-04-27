//После игры необходимо спросить номер вопроса. 
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа

var event, ok;

var answers = [];
var useranswers = {
    turn1: "Вопрос скрыт так как вышли из игры",
    question1: "на вопрос не ответили, вышли из игры",
    turn2: "Вопрос скрыт так как вышли из игры",
    question2: "на вопрос не ответили, вышли из игры",
    turn3: "Вопрос скрыт так как вышли из игры",
    question3: "на вопрос не ответили, вышли из игры"
};
console.log(useranswers);
do { //Выводим первый вопрос
    ok = false;
    event = +prompt(works.a00 + works.a1 + works.a2 + '-1 - Выход из игры');

    if (event == -1) {
        break;
    } else {
        ok = isAnswer(works.a0, event);
    }
} while (!ok);
switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        do {
            useranswers.turn1 = works.a00;
            useranswers.question1 = works.a1;
            ok = false;
            event = +prompt(works.b00 + works.b1 + works.b2 + '-1 - Выход из игры');
            if (event == -1) {
                break;
            } else {
                ok = isAnswer(works.b0, event);
            }
        } while (!ok);
        switch (event) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                do {
                    useranswers.question2 = works.b1;
                    useranswers.turn2 = works.b00;
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    } else {
                        ok = isAnswer(works.d0, event);
                    }
                } while (!ok);
                useranswers.turn3 = works.d00;
                if (event == 1) {
                    useranswers.question3 = works.d1;
                }
                if (event == 2) {
                    useranswers.question3 = works.d2;
                }
                break;
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                do {
                    useranswers.question2 = works.b2;
                    useranswers.turn2 = works.b00;
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    } else {
                        ok = isAnswer(works.d0, event);
                    }
                } while (!ok);
                useranswers.turn3 = works.d00;
                if (event == 1) {
                    useranswers.question3 = works.d1;
                }
                if (event == 2) {
                    useranswers.question3 = works.d2;
                }
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        do {
            useranswers.question1 = works.a2;
            useranswers.turn1 = works.a00;
            ok = false;
            event = +prompt(works.c00 + works.c1 + works.c2 + '-1 - Выход из игры');
            if (event == -1) {
                break;
            } else {
                ok = isAnswer(works.c0, event);
            }
        } while (!ok);
        switch (event) {
            case 1: // Первое действие
                do {
                    useranswers.question2 = works.c1;
                    useranswers.turn2 = works.c00;
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    } else {
                        ok = isAnswer(works.d0, event);
                    }
                } while (!ok);
                useranswers.turn3 = works.d00;
                if (event == 1) {
                    useranswers.question3 = works.d1;
                }
                if (event == 2) {
                    useranswers.question3 = works.d2;
                }
                break;
            case 2: // Второе действие
                do {
                    useranswers.question2 = works.c2;
                    useranswers.turn2 = works.c00;
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    } else {
                        ok = isAnswer(works.d0, event);
                    }
                } while (!ok);
                useranswers.turn3 = works.d00;
                if (event == 1) {
                    useranswers.question3 = works.d1;
                }
                if (event == 2) {
                    useranswers.question3 = works.d2;
                }
                break;
            case -1: // Второе действие

                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}
alert('Спасибо за игру');
console.log(useranswers);
var p = +prompt("Введите номер вопроса, который вы бы хотели посмотреть");
while ((p < 1) || (p > 4) || (isNaN(p))) {
    alert("Вы ввели недопустимый символ или номер вопроса");
    p = +prompt("Введите номер хода который вы бы хотели посмотреть");
};
switch (p) {
    case 1:
        alert("Ход1" + useranswers.turn1 + "Вы ответили " + useranswers.question1);
        break;
    case 2:
        alert("Ход 2 " + useranswers.turn2 + "Вы ответили " + useranswers.question2);
        break;
    case 3:
        alert("Ход 3 " + useranswers.turn3 + "Вы ответили " + useranswers.question3);
        break;
}


//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    } else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;

}
