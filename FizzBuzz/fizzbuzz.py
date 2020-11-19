class FizzBuzz:
    def __init__(self):
        self.__fizz = 3
        self.__buzz = 5

    def __isFizz(self, num):
        return num % self.__fizz == 0
    
    def __isBuzz(self, num):
        return num % self.__buzz == 0

    def fizzbuzz(self, num):
        for i in range(1, num + 1, 1):
            if self.__isFizz(i) & self.__isBuzz(i):
                print("FizzBuzz")
            elif self.__isFizz(i):
                print("Fizz")
            elif self.__isBuzz(i):
                print("Buzz")
            else:
                print(i)

fz = FizzBuzz()
fz.fizzbuzz(100)