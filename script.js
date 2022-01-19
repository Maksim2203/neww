'use strict'

// function one(x) {
//     function two() {
//         const a = +prompt("Введите число")
//         x--; 

//         console.log(a);
//         console.log(x);

//         if (a !== x) {
//             two()
//         }

//     }
//     two()
// }
// one(10)
// function counter(n) {
//     return function (x) {
//         return x + n
//     }
// }
// let sum = counter(1)
// console.log(sum(15));
// console.log(sum(20));
// function pathGenerator(url){
//     return function(imageName){
//         return url + imageName
//     }
// }
// let urlToIcons = pathGenerator
// let urlToImage= pathGenerator
function one(sekretNumber) {
    return function two() {
        console.log(secretNumber);
        const userNumber = +prompt('Введите число')
        if (isNaN(userNumber)) {
            alert('Введите чило');
            two();
        } else if (userNumber == false) {
            return
        }

        if (userNumber != secretNumber) {
            if (secretNumber < userNumber) {
                alert('')
                two();
            } else if (secretNumber > userNumber) {
                alert('');
                two();
            }

        } else {
            alert('')
            return
        }
    }
}