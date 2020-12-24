var i;

var im1 = document.querySelector("#a1");
var im2 = document.querySelector("#a2");
var im3 = document.querySelector("#a3");
im = [im1, im2, im3];
console.log(im);
var x;

var on = 0;
for (let i = 0; i < im.length; i++) {
  im[i].onclick = fullscreen;

  console.log(im[i]);
}

function fullscreen(event) {
  console.log(event.target.src);
  if (on == 0) {
    var block = document.createElement("div");
    block.setAttribute(
      "style",
      "width:500px;height:600px;position:absolute;background-size:cover;background-image: url(" +
        event.target.src +
        ")"
    );
    globalblock = document.querySelector(".links");
    globalblock.append(block);
    console.log(block);
    on = 1;
    block.onclick = fullscreen;
  } else {
    var block = document.querySelector(".links div");
    block.remove([1]);
    on = 0;
  }
}
var s = document.querySelector(".slider .slide img");
console.log(slide);
var but = document.querySelector(".slider a");
console.log(but);
var but2 = document.querySelectorAll(".slider a")[1];
console.log(but2);
i = 3;

function slide(event) {
  if (i > 1) {
    s.setAttribute("src", "img/" + (i - 1) + ".jpg");
    i--;
  } else {
    i = 4;
    s.setAttribute("src", "img/" + i + ".jpg");
  }
}

function slide2(event) {
  if (i < 4) {
    s.setAttribute("src", "img/" + (i + 1) + ".jpg");
    i++;
  } else {
    i = 1;
    s.setAttribute("src", "img/" + i + ".jpg");
  }
}
but.onclick = slide;
but2.onclick = slide2;

var cart = [];
var goods = [];
var good1 = {
  name: "СОБАКЕН1",
  price: "100",
  image: "1.jpg",
};

var good2 = {
  name: "СОБАКЕН2",
  price: "200",
  image: "2.jpg",
};
var good3 = {
  name: "СОБАКЕН3",
  price: "300",
  image: "3.jpg",
};
globalprice = 0;
goods = [good1, good2, good3];
var mas = [0, 0, 0];
var q = 0;
var w = 0;

function f(event) {
  var z = event.target.id;
  z = String(z);
  z = z.split("");
  console.log(z);
  console.log(goods[z[1] - 1]);
  cart += goods[z[1] - 1];
  console.log(cart);
  //  carthtml = document.createElement("div");
  cartname = document.querySelector(".globalname");
  if (mas[z[1] - 1] < 1) {
    cb = document.createElement("h3");
    cb.innerText = goods[z[1] - 1].name + " X  " + (mas[z[1] - 1] + 1) + "шт.";
    cb.setAttribute("class", "dog" + z[1]);
    mas[z[1] - 1]++;
    cartname.append(cb);
  } else {
    cb = document.querySelector(".dog" + z[1]);
    cb.innerText = goods[z[1] - 1].name + " X  " + (mas[z[1] - 1] + 1) + "шт.";
    mas[z[1] - 1]++;
  }
  cartquantity = document.querySelector(".quantity");
  q = q + 1;
  w = parseInt(w + parseInt(goods[z[1] - 1].price));
  cartquantity.innerText = "ОБЩЕЕ КОЛИЧЕСТВО:" + q + " шт.";
  cc = document.createElement("h3");
  globalbuy = document.querySelector(".globalprice");
  globalbuy.innerText = "ОБЩАЯ СТОИМОСТЬ СОБАКЕНОВ равна " + w + " печенек";
}

var i = 0;
for (var i = 0; i < goods.length; i++) {
  goodshtml = document.querySelector(".goods");
  a = document.createElement("div");
  b = document.createElement("h2");
  b.innerText = goods[i].name;
  c = document.createElement("h3");
  c.innerText = goods[i].price;
  d = document.createElement("img");
  d.setAttribute("src", "img/" + (i + 1) + ".jpg");
  e = document.createElement("button");
  e.setAttribute("style", "width:300px;height:50px");
  e.innerText = "КУПИТЬ";
  e.setAttribute("id", "b" + (i + 1));
  a.append(b, c, d, e);
  goodshtml.append(a);
  console.log(a);
}
for (var i = 0; i < goods.length; i++) {
  buy = document.querySelector("#b" + (i + 1));
  buy.onclick = f;
}
var clear = document.querySelector(".cancel");
clear.onclick = cancel;
function cancel() {
  clear1 = document.querySelector(".globalprice");
  clear1.innerText = "ОБЩАЯ СТОИМОСТЬ СОБАКЕНОВ:";
  clear2 = document.querySelector(".globalname");
  clear2.innerText = "НАЗВАНИЕ ТОВАРА:";
  clear3 = document.querySelector(".quantity");
  clear3.innerText = "ОБЩЕЕ КОЛИЧЕСТВО:";
  mas = [0, 0, 0];
  q = 0;
}
