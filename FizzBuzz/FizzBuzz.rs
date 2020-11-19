#[derive (Clone, Copy)]
struct FizzBuzz {
    fizz: i8,
    buzz: i8,
}

fn is_fizz(fz: FizzBuzz, num: i8) -> bool {
    return (num % fz.fizz == 0) as bool;
}

fn is_buzz(fz: FizzBuzz, num: i8) -> bool {
    return (num % fz.buzz == 0) as bool;
}

fn fizz_buzz(fz: FizzBuzz, num: i8) {
    for i in 1..num + 1 {
        if is_fizz(fz, i) && is_buzz(fz, i) {
            println!("FizzBuzz");
        } else if is_fizz(fz, i) {
            println!("Fizz");
        } else if is_buzz(fz, i) {
            println!("Buzz");
        } else {
            println!("{}", i);
        }
    }
}

fn main(){
    fizz_buzz(FizzBuzz{fizz:3, buzz:5}, 100);
}