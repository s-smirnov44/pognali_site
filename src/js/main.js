/*======================================= ФУНКЦИЯ ОПРЕДЕЛЕНИЯ ПОДДЕРЖКИ WEBP========================================*/
function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});

/*===========*******************************************************************************************==========*/

document.querySelector(".menu__btn").onclick = function () {
  this.classList.toggle("menu__btn-active");
};

/* Добавление стилей к календарю */

/* Фон для календаря от 30 до 6 */
var elements = document.getElementsByTagName("td");
for (var i = 34; i < elements.length; i++) {
  elements[i].classList.add("free");
}

for (var i = 0; i < elements.length - 11; i++) {
  elements[i].classList.add("disabled");
}

for (var i = 31; i < elements.length - 8; i++) {
  elements[i].classList.add("active");
}

elements[31].classList.add("red-board");

/* /Добавление стилей к календарю */
