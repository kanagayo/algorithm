package main

import "fmt"

type FizzBuzz struct {
	fizz int
	buzz int
}

func NewFizzBuzz() *FizzBuzz {
	fz := new(FizzBuzz)
	fz.fizz = 3
	fz.buzz = 5
	return fz
}

func (fz FizzBuzz) isFizz(num int) bool {
	return num%fz.fizz == 0
}

func (fz FizzBuzz) isBuzz(num int) bool {
	return num%fz.buzz == 0
}

func (fz FizzBuzz) Fizzbuzz(num int) {
	for i := 1; i <= num; i++ {
		if fz.isFizz(i) && fz.isBuzz(i) {
			fmt.Println("FizzBuzz")
		} else if fz.isFizz(i) {
			fmt.Println("Fizz")
		} else if fz.isBuzz(i) {
			fmt.Println("Buzz")
		} else {
			fmt.Println(i)
		}
	}
}

func main() {
	fz := NewFizzBuzz()
	fz.Fizzbuzz(100)
}
