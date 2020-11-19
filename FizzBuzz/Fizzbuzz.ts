class FizzBuzz {
    private readonly FIZZ:number = 3;
    private readonly BUZZ:number = 5;

    private isFizz(num:number) : boolean {
        return num % this.FIZZ === 0;
    }
    private isBuzz(num:number) : boolean {
        return num % this.BUZZ === 0;
    }

    public fizzbuzz(num:number = 100) : void {
        for (let i = 1; i <= num; i++) {
            if (this.isFizz(i) && this.isBuzz(i)) {
                console.log("FizzBuzz");
            } else if (this.isFizz(i)) {
                console.log("Fizz");
            } else if (this.isBuzz(i)) {
                console.log("Buzz");
            } else {
                console.log(i);
            }
        }
    }
}

const fz = new FizzBuzz();
fz.fizzbuzz();