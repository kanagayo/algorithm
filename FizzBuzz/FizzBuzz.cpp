#include <iostream>

class FizzBuzz {
    private:
        const int FIZZ = 3;
        const int BUZZ = 5;
        int number = 0;

        bool isFizz(const int num) {
            return num % FIZZ == 0;
        }

        bool isBuzz(const int num) {
            return num % BUZZ == 0;
        }

    public:
        FizzBuzz(const int num) {
            number = num;
        }

        void fizz_buzz() {
            for (int i = 1; i <= number; i++) {
                if(isFizz(i) && isBuzz(i)) {
                    std::cout << "FizzBuzz";
                } else if (isFizz(i)) {
                    std::cout << "Fizz";
                } else if (isBuzz(i)) {
                    std::cout << "Buzz";
                } else {
                    std::cout << i;
                }
                std::cout << "\n";
            }
            return;
        }
};

int main(void) {
    FizzBuzz fz(100);
    fz.fizz_buzz();
    return 0;
}
