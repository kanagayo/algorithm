"use strict";

class FizzBuzz {
    constructor(fizz = 3, buzz = 5) {
        this.fizz = fizz;
        this.buzz = buzz;
    }
    fizzbuzz(number = 100) {
        for (let i = 1; i <= number; i++) {
            if (this._isFizz(i) && this._isBuzz(i)) {
                console.log("FizzBuzz");
            } else if (this._isFizz(i)) {
                console.log("Fizz");
            } else if (this._isBuzz(i)) {
                console.log("Buzz");
            } else {
                console.log(i);
            }
        }
    }

    _isFizz(number) {
        return number % this.fizz === 0;
    }

    _isBuzz(number) {
        return number % this.buzz === 0;
    }
}

const fz = new FizzBuzz();
fz.fizzbuzz();fg