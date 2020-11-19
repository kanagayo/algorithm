class FizzBuzz
    @@FIZZ = 3
    @@BUZZ = 5

    def fizzbuzz(num)
        for i in 1..100 do
            if isFizz(i) && isBuzz(i) then
                print("FizzBuzz")
            elsif isFizz(i) then
                print("Fizz")
            elsif isBuzz(i) then
                print("Buzz")
            else
                print(i)
            end
            print("\n")
        end
    end

    private

    def isFizz(num)
        return num % @@FIZZ == 0
    end

    def isBuzz(num)
        return num % @@BUZZ == 0
    end

end

fz = FizzBuzz.new
fz.fizzbuzz(100)
