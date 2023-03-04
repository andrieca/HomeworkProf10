// Создать каунтер. Страница с двумя кнопками “+” и “-” и при нажатии на
// какую-либо число должно меняться в соответствующую сторону. Значение counter не должно слетать при перезагрузке страницы.

const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const p = document.querySelector("p");

const number = localStorage.getItem("number");
p.textContent = number;

let text = +p.textContent;
plus.onclick = () => {
    text +=1;
    p.innerText = text;
    localStorage.setItem("number", text);
};


minus.onclick = () => {
    text--;
    p.innerText = text;
    localStorage.setItem("number", text);
};
