#include <stdio.h>

void fizz_buzz(const int num) {
    const int FIZZ = 3;
    const int BUZZ = 5;
    int i = 0;

    for (i = 1; i <= num; i++) {
        if (i % FIZZ == 0 && i % BUZZ == 0) {
            printf("FizzBuzz");
        } else if (i % FIZZ == 0) {
            printf("Fizz");
        } else if (i % BUZZ == 0) {
            printf("Buzz");
        } else {
            printf("%d", i);
        }
        printf("\n");
    }
    return;
}

int main(void) {
    fizz_buzz(100);
    return 0;
}