<html>
    <head>
        <title> kanagayo test </title>
    </head>
    <body>
        <?php
            define("FIZZ", 3);
            define("BUZZ", 5);
            class FizzBuzz {
                private function is_fizz($num) {
                    return ($num % FIZZ == 0);
                }
                private function is_buzz($num) {
                    return ($num % BUZZ == 0);
                }
                public function fizz_buzz($num) {
                    for ($i = 1; $i <= $num; $i++) {
                        if ($this->is_fizz($i) && $this->is_buzz($i)) {
                            echo "FizzBuzz";
                        } elseif ($this->is_fizz($i)) {
                            echo "Fizz";
                        } elseif ($this->is_buzz($i)) {
                            echo "Buzz";
                        } else {
                            echo $i;
                        }
                        echo "<br>";
                    }    
                }    
            }
            $fz = new FizzBuzz();
            $fz->fizz_buzz(100);
        ?>
    <body>
<html>