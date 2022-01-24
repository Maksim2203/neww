'use strict';

// function one(x){
// function two(){
// const a = +prompt("Введите число");
// x--;

// console.log(a);
// console.log(x);

// if (a !== x){
// two();
//         }
//     }

// two();

// }

// one(10);

// function counter(n){
// return function(x){
// return x + n;
//     };
// };

// let sum = counter(1);
// console.log(sum(15));
// console.log(sum(20));

// function pathGenerator(url){
// return function (imageName){
// return url + imageName;
//     }
// }


// let x = Math.floor(Math.random()*11);
// console.log(x);

// function guessNumber(){
// let a = +prompt('Попробуйте угадать число: ');
// if (x !== a){
// guessNumber(x);
// } else{
// alert('Ура, вы победили!')
//     }
// }

// guessNumber(x);



function one() {
    return function two(secretNumber) {
        const userNumber = +prompt("Введите число");
        if (userNumber == '') {
            alert('Введи число')
            two(secretNumber)
        } else if (userNumber == false) {
            return
        } else if (isNaN(userNumber)) {
            alert('Введи число')
            two(secretNumber)
        } else if (isNaN(userNumber)) {
            alert('Введите число!');
            two(secretNumber);

        }
        if (userNumber != secretNumber) {
            if (secretNumber < userNumber) {
                alert('Загаданное число меньше!');
                two(secretNumber);
            } else if (secretNumber > userNumber) {
                alert('Загаданное число больше!');
                two(secretNumber);
            }
        } else {
            alert('Вы победили')
            return
        }
    }
}
let constNumber = one();
constNumber(Math.floor(Math.random() * 101));

