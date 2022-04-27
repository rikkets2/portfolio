var a = document.querySelector("div");
var letters = ["A", "B", "C", "D", "E", "F", "G", "H"];
console.log(a)
var table = document.createElement("table");
for (let i = 0; i <= 9; i++) {
    tr = document.createElement("tr");
    for (let j = 0; j <= 9; j++) {
        td = document.createElement("td");
        if ((i % 2 == 0) && (j % 2 == 0)) { td.setAttribute("class", "white") } else {
            if ((i % 2 == 0) || (j % 2 == 0)) { td.setAttribute("class", "black") }
            else {
                td.setAttribute("class", "white")
        };
    };
        td.setAttribute("style", "border:5px solid brown;width:200px;height:200px");
        if ((i == 0) || (j == 0) || (i == 9) || (j == 0)) {
            if (((i == 0) && (j == 0)) || (((i == 9) && (j == 9))) || ((i == 0) && (j == 9)) || ((i == 9) && (j == 0))) {
                td.setAttribute("class", "empty"); td.setAttribute("style", "");
            }
            else { td.setAttribute("class", "edge"); td.setAttribute("style", "") };
        };
        if ((j == 0) || (j == 9)) {
            if ((j == 9) && ((i >= 1) && (i < 9))) { td.setAttribute("class", " edgerotate");td.setAttribute("style", "") }
            td.innerText = (9 - i);
        }
        else {
                if ((i == 0) || (i == 9)) {
                    if (i == 0) { td.setAttribute("class", "edgerotate"); }
                    td.innerText = letters[j - 1];
                }
        };    
        tr.append(td);
        if ((i == 2)&& (j!=0)&& (j!=9)) {
            var h = document.createElement("i");
            h.setAttribute("class", "fas fa-chess-pawn");
            h.setAttribute("style", "width:200px;height:167px;font-size:156px; color:#f81c1c;text-align:center;vertical-align: middle");
            td.append(h);
        }//добавил пешки , не стал добавлять буквы из названий
        if ((i == 1)&& ((j==1)|| (j==8))) {
            var l = document.createElement("i");
            l.setAttribute("class", "fas fa-chess-rook");
            l.setAttribute("style", "width:200px;height:167px;font-size:156px; color:#f81c1c;text-align:center;vertical-align: middle");
            td.append(l);
        }//добавил ладьи , не стал добавлять буквы из названий
        if ((i == 1)&& ((j==2)|| (j==7))) {
            var k = document.createElement("i");
            k.setAttribute("class", "fas fa-chess-knight");
            k.setAttribute("style", "width:200px;height:167px;font-size:156px; color:#f81c1c;text-align:center;vertical-align: middle");
            td.append(k);
        }//добавил коней , не стал добавлять буквы из названий
        if ((i == 1)&& ((j==3)|| (j==6))) {
            var s = document.createElement("i");
            s.setAttribute("class", "fas fa-chess-bishop");
            s.setAttribute("style", "width:200px;height:167px;font-size:156px; color:#f81c1c;text-align:center;vertical-align: middle");
            td.append(s);
        }//добавил слонов , не стал добавлять буквы из названий
        if ((i == 1)&& (j==4)) {
            var s = document.createElement("i");
            s.setAttribute("class","fas fa-chess-queen");
            s.setAttribute("style", "width:200px;height:167px;font-size:156px; color:#f81c1c;text-align:center;vertical-align: middle");
            td.append(s);
        }//добавил ферзя , не стал добавлять буквы из названий
        if ((i == 1)&& (j==5)) {
            var q = document.createElement("i");
            q.setAttribute("class","fas fa-chess-king");
            q.setAttribute("style", "width:200px;height:167px;font-size:156px; color:#f81c1c;text-align:center;vertical-align: middle");
            td.append(q);
        }//добавил короля , не стал добавлять буквы из названий
///////////////////////////////////////////////////////////////////////////////////// теперь белые
     if ((i == 7) && ((j!=0)&& (j!=9))) {
    var h = document.createElement("i");
    h.setAttribute("class", "fas fa-chess-pawn");
    h.setAttribute("style", "width:200px;height:167px;font-size:156px; color:white;text-align:center;vertical-align: middle");
               td.append(h);
        }
    //добавил пешки , не стал добавлять буквы из названий
        if ((i == 8) && ((j == 1) || (j == 8))) {
    var l = document.createElement("i");
    l.setAttribute("class", "fas fa-chess-rook");
    l.setAttribute("style", "width:200px;height:167px;font-size:156px; color:white;text-align:center;vertical-align: middle");
    td.append(l);
}//добавил ладьи , не стал добавлять буквы из названий
if ((i == 8)&& ((j==2)|| (j==7))) {
    var k = document.createElement("i");
    k.setAttribute("class", "fas fa-chess-knight");
    k.setAttribute("style", "width:200px;height:167px;font-size:156px; color:white;text-align:center;vertical-align: middle");
    td.append(k);
}//добавил коней , не стал добавлять буквы из названий
if ((i == 8)&& ((j==3)|| (j==6))) {
    var s = document.createElement("i");
    s.setAttribute("class", "fas fa-chess-bishop");
    s.setAttribute("style", "width:200px;height:167px;font-size:156px; color:white;text-align:center;vertical-align: middle");
    td.append(s);
}//добавил слонов , не стал добавлять буквы из названий
if ((i == 8)&& (j==4)) {
    var s = document.createElement("i");
    s.setAttribute("class","fas fa-chess-queen");
    s.setAttribute("style", "width:200px;height:167px;font-size:156px; color:white;text-align:center;vertical-align: middle");
    td.append(s);
}//добавил ферзя , не стал добавлять буквы из названий
if ((i == 8)&& (j==5)) {
    var q = document.createElement("i");
    q.setAttribute("class","fas fa-chess-king");
    q.setAttribute("style", "width:200px;height:167px;font-size:156px; color:white;text-align:center;vertical-align: middle");
    td.append(q);
}//добавил короля , не стал добавлять буквы из названий
    }
    table.append(tr);
    }
console.log(table);
a.append(table);   
