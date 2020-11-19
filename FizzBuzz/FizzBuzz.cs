using System;

namespace FizzBuzz
{
    public class FizzBuzz
    {
        private readonly int FIZZ = 3;
        private readonly int BUZZ = 5;

        private bool isFizz(int num) 
        {
            return num % FIZZ == 0;
        }

        private bool isBuzz(int num) 
        {
            return num % BUZZ == 0;
        }

        public void fizzbuzz(int num = 100)
        {
            for (int i = 1; i <= num; i++)
            {
                if (isFizz(i) && isBuzz(i))
                {
                    Console.Write("FizzBuzz");
                }
                else if (isFizz(i))
                {
                    Console.Write("Fizz");
                }
                else if (isBuzz(i))
                {
                    Console.Write("Buzz");
                }
                else
                {
                    Console.Write(i);
                }
                Console.Write("\n");
            }
        }
    }

    public class FizzBuzzImpl
    {
        static void Main()
        {
            var fz = new FizzBuzz();
            fz.fizzbuzz();
        }
    }
}