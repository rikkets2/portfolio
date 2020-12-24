//11    
var a=Math.round(prompt("Введите число от 0 до 999"));
while ((a<=0) || (a>=999)||(isNaN(a)))  
{alert("Вы ввели недопустимый символ или число");
var a=prompt("Введите число от 0 до 999");}
var line=[];
a=String(a);
line=a.split("");
alert(line);
var numbers={hundreds:"0",tens:"0",ones:"0"}
console.log(numbers);
  var i=0;
 function lines() {
switch (line.length){
  case 3:
    numbers.hundreds=line[i];
    numbers.tens=line[i+1];
    numbers.ones=line[i+2];
    break;
 case 2 :numbers.tens=line[i];
    numbers.ones=line[i+1];
    break;
    case 1:
    numbers.ones=line[i];
break;
   }
   console.log(numbers);}
   lines (line);
  alert ("Сотен в указанном числе :"+ numbers.hundreds+ " Десятков в указанном числе: "+numbers.tens+" Единиц в указанном числе: "+numbers.ones);
  