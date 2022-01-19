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