import Menu from './Menu.js';

const form = document.getElementById("form");
const input = document.getElementById("text");

let test = '';

const num = 10; 

const menu = new Menu(num);


form.addEventListener("submit", function (event) {
    event.preventDefault();

    test = input.value;

    menu.setNum(num);
    menu.go();

    document.getElementById('box').innerHTML = menu.getNum();

    calS(test);

});

function calS(text){
    //match()
    const x = text.split('\n');

    menu.setText(x);
    menu.findSum();
    console.log(menu.getSum(x));

    document.getElementById('box').innerHTML = "Here is your total: " + menu.getSum();

}

console.log('num again + ', num);
