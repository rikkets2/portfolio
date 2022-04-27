alert("Добро пожаловать в игру\"Кто хочет стать миллионером\"!!!");
var answers = [];
var i=1;
while (!valid(ans)) {
    var ans = Number(prompt(" Вопрос №" +i+":" + quest.q1 + "\n Варианты ответов :" + quest.q11 + quest.q12 + quest.q13 + quest.q14));
    valid(ans);
    if (!valid(ans)) {
        alert("Вы ввели недопустимое значение")
    }
}
correctans (ans)
ans = 0;
while (!valid(ans)) {
    var ans = Number(prompt(" Вопрос № "+i+":" + quest.q2 + " \n Варианты ответов : " + quest.q21 + quest.q22 + quest.q23 + quest.q24));
    valid(ans);
    if (!valid(ans)) {
        alert("Вы ввели недопустимое значение")
    }
}
correctans (ans);
ans = 0;
while (!valid(ans)) {
    var ans = Number(prompt(" Вопрос №"+i+":\n " + quest.q3 + "\n Варианты ответов : " + quest.q31 + quest.q32 + quest.q33 + quest.q34));
    valid(ans);
    if (!valid(ans)) {
        alert("Вы ввели недопустимое значение")
    }
}
correctans (ans);
alert(answers);
alert("Спасибо за игру!!!");
////////////////////////////
function valid(ans) {
    if ((ans > 0) && (ans <= 4) && (Number.isInteger(ans))) {
        return true;
    }
    return false;
}
/////////////////////////
function correctans (ans) {
    if (ans == correct[i-1]) {
        alert("Вы угадали");answers[i-1]="Вопрос № "+i+" отвечен правильно";i++;
        return;
    }
    alert("Вы не угадали");answers[i-1]="Вопрос № "+i+" отвечен неверно";i++;return;
};