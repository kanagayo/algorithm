class FizzBuzz {

    private static final int FIZZ_NUMBER = 3;
    private static final int BUZZ_NUMBER = 5;
    public static void main(String[] args) {
        int num = 100;

        for (int i = 1; i <= num; i++) {
            if (isFizz(i) && isBuzz(i)) {
                System.out.println("FizzBuzz");
            } else if (isFizz(i)) {
                System.out.println("Fizz");
            } else if (isBuzz(i)) {
                System.out.println("Buzz");
            } else {
                System.out.println(i);
            }
        }
    }
    private static boolean isFizz(final int NUMBER) {
        return NUMBER % FIZZ_NUMBER == 0;
    }

    private static boolean isBuzz(final int NUMBER) {
        return NUMBER % BUZZ_NUMBER == 0;
    }
}