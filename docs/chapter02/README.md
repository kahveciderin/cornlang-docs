# Programming a Guessing Game

Let's jump into Cornlang by writing a guessing game together. This chapter introduces you to the basic concepts of programming in Corn by showing how some of the common programming tasks can be implemented in Corn. These concepts will be discussed in the later chapters in more detail, but for now you will practice the fundamentals.

## Setting Up a New Project

To set up a new project, go to the projects directory and create a new directory called `guessing_game`. In this directory, create a new file called `main.corn` and open it in your text editor.

## Processing a Guess

The first part of the guessing game program will ask for input and convert that input to a number. Enter the following code into the `main.corn` file:

```corn
fun main => none {
    var lstvar 20 i3 guess
    init_arr(guess, 20, 0)
    var i5 counter = 0
    print("Your guess: ")
    while(true) {
        var i3 inchr = inchar()
        if(inchr == "\n"[0]){
            break
        }
        arr_set_index(guess, counter, inchr)
        counter += 1
    }
    var i5 g_int = to_int(guess)
    println("You guessed $n".fmt(g_int))
}
```

<br>

There is a lot going on in this piece of code, so let's break it down into its parts.

```corn
fun main => none {
```
As you saw in Chapter 1, `main` is the entry point of the program. This is where the program starts.
<br>
```corn
var lstvar 20 i3 guess
```

This line of the program creates a variable `guess` that is a list of 20 8-bit integers. `var` defines a variable, the next keyword `lstvar 20` specifies it is a list of 20 elements and i3 means the values this lits hold will be 8 bits long.

<br>

```corn
    init_arr(guess, 20, 0)
```

This line of the program initializes the list of 20 elements in `guess` to 0.

<br>

```corn
    var i5 counter = 0
```

This line creates a 32-bit variable called `counter` and initializes it to 0. We will see how this is useful in the next few lines.

<br>

```corn
    print("Your guess: ")
```

This line prints out a message to the user, indicating that they should enter a number. Notice that this is not a `println`, but a `print`, which doesn't print a newline after printing the string.

<br>

```corn
    while(true) {
```

This line creates a loop. A loop is a way of repeating a block of code until a condition is met. In this case, the loop will repeat until we explicitly tell it to stop.

<br>

```corn
        var i3 inchr = inchar()
```

This is where the magic happens! `inchar` is a function that reads a single character from the user. The `inchr` function returns an 8-bit integer (a character). We create a new variable called `inchr` and assign it the value returned by `inchar` to it.

<br>

```corn
        if(inchr == "\n"[0]){
```

Another cool thing about `inchr` is that it will return the character `\n` (newline) if the user presses the enter key. This is a common way to signal the end of input. Here, we are checking if the `inchr` variable is equal to the character `\n` (newline). If it is, we break out of the loop. The `[0]` is a special syntax that means "the first element of the array or string". Here, we are using it to convert the string `"\n"` to a character.

<br>

```corn
            break
```

This line breaks out of the infinite loop.

<br>

```corn
        }
```

This line ends the `if` block. The code between two curly brackets is called a `block`.

<br>

```corn
        arr_set_index(guess, counter, inchr)
```

Remember that we have ended the loop if the entered character was a newline. So, this line of code is only going to be reached if the user entered a character other than a newline, in which case it will set the value of the `guess` list at the index `counter` to the value of `inchr`.

<br>

```corn
        counter += 1
````

We increment the counter by one to make the next iteration of the loop work.

<br>

```corn
    }
```

We end `while` block.

<br>

```corn
    var i5 g_int = to_int(guess)
```

We initialize a variable called g_int (stands for "guess integer") to the value of the list `guess`, but while doing so we convert `guess` to an integer using the `to_int` function.

<br>

```corn
    println("You guessed $n".fmt(g_int))
```

We print the user's guess. Here, we have a function called `fmt`, which takes a string and a list of arguments. The string is the format string, and the list of arguments is the list of values to be inserted into the format string. `$n` here means that the argument corresponding to that slot, in this case `g_int`, will be inserted into the format string at that exact location.

<br>

```corn
}
```

We end the function block.

### Testing the First Part

Let's test the first part of the guessing game. Compile and run the program with the commands you learned in Chapter 1.

The output should look something like this:

```
Your guess: 241
You guessed 241
```

assuming you entered `241`.


## Generating a Secret Number

Next, we need to generate a secret number that the user will try to guess. The secret number should be different every time so the game is fun to play more than once. Let’s use a random number between 1 and 128 so the game isn’t too difficult. Luckily for us, Cornlang includes a random function in its standard library.

### Using `rand_range` to Create a Random Number Between 1 and 128

Now that you know what to do, let's implement it in our program:

```corn
fun main => none {
    rand_start()
    var i5 picked = rand_range(1, 128)

    println("Secret number: $n".fmt(picked))

    var lstvar 20 i3 guess
    init_arr(guess, 20, 0)
    var i5 counter = 0
    print("Your guess: ")
    while(true) {
        var i3 inchr = inchar()
        if(inchr == "\n"[0]){
            break
        }
        arr_set_index(guess, counter, inchr)
        counter += 1
    }
    var i5 g_int = to_int(guess)
    println("You guessed $n".fmt(g_int))
}
```


The `rand_start` function is called at the beginning of the program. It initializes the random module and seeds it with the current time. Then we call `rand_range` to get a random number between 1 and 128. We save this number in a variable called `picked`. Then we print this for debug purposes, it wouldn't be much of a game if we left this like that so we will remove this on the final release.

Compile and run your program. It should print a different random number every time you run it.

## Comparing the Guess to the Secret Number

Now that we have a secret number, we can compare the user's guess with the number and tell him if the guess is lower or higher than the picked number, and if it is equal, we can terminate the program.

Enter the following code to your `main.corn` file:

```corn
fun main => none {
    rand_start()
    var i5 picked = rand_range(1, 128)
    var i5 total_guesses = 0
    while(true) {
        total_guesses += 1
        var lstvar 20 i3 guess
        init_arr(guess, 20, 0)
        var i5 counter = 0
        print("Your guess: ")
        while(true) {
            var i3 inchr = inchar()
            if(inchr == "\n"[0]){
                break
            }
            arr_set_index(guess, counter, inchr)
            counter += 1
        }
        var i5 g_int = to_int(guess)
        if (g_int == picked) {
            break
        }
        if (g_int < picked) {
            println("Too low")
        } else {
            println("Too high")
        }
    }
    println("You WON in $n tries!".fmt(total_guesses))
}
```

We added a variable called `total_guesses` that will keep track of how many guesses the user made before finding the number. Then we moved everything into a loop for the user to make multiple guesses after one another. 

Then there is these lines of code:

```corn
        if (g_int == picked) {
            break
        }
        if (g_int < picked) {
            println("Too low")
        } else {
            println("Too high")
        }
```

The first line compares our guess with the secret number, and if they match we terminate the outer loop.
The second line checks if the guessed number is less than our secret number. If so, we print `Too low`.
If the previous `if` didn't execute, the `else` block will execute, which means the number guessed must be greater than the secret number (Remember we checked whether they are equal or not before even reaching here) so we print `Too high`

After the loop, we added a line to print in how many tries the user won the game.

## Summary

At this point, you've successfully built a guessing game in Cornlang. Congratulations!

This project was a hands-on way to introduce you to many new Cornlang concepts: variables, arrays and array operations, loops, if's and else's, builtin functions, type conversions and many more. Chapter 3 will cover these concepts in more detail.