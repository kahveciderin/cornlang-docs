# Hello, World!

Now that you've installed Cornlang, let's write a simple program. It's traditional to write a program that says "Hello, World!" to the screen when learning a new language. It's a good idea to learn a new language by writing a program that does something simple. This is a good opportunity to get familiar with the syntax of the language and to get a feel for how it works.

## Creating a Project Directory

You'll start by creating a directory for your projects. This directory will contain all of the projects you'll create in this book. It doesn't matter to Cornlang where your project lives, but for this book, we'll create it in the home directory.

For Linux, MacOS and PowerShell on Windows, enter this:
```bash
$ mkdir ~/projects
$ cd ~/projects
$ mkdir hello_world
$ cd hello_world
```

For Windows CMD, enter this:
```cmd
> mkdir "%USERPROFILE%\projects"
> cd /d "%USERPROFILE%\projects"
> mkdir hello_world
> cd hello_world
```

## Writing and Running a Cornlang program

Next, make a new file called `hello_world.corn` and enter this:

Filename: `hello_world.corn`
```corn
fun main => none {
    println("Hello, world!")
}
```

Save the file and go back to your terminal window. On Linux or MacOS, enter the following commands to compile and run the program:

```bash
$ cornpile hello_world.corn
$ ./hello_world
Hello, world!
```

On Windows, enter the command `.\hello_world.exe` instead of `./hello_world`:

```cmd
> cornpile hello_world.corn
> .\hello_world.exe
Hello, world!
```

Regardless of your operating system, the string Hello, world! should print to the terminal. If you don’t see this output, refer back to the [Troubleshooting](/chapter01/installation#troubleshooting) part of the Installation section for ways to get help.

If Hello, world! did print, congratulations! You’ve officially written a Corn program. That makes you a Corn programmer — welcome!

## Anatomy of a Cornlang Program

Let's review in detail what just happened in your newly created "Hello, world!" program. Here's the first piece of the puzzle:

```corn
fun main => none {

}
```

These lines define a function in Cornlang. The `main` function is special; it's the entry point of the program. The `none` type is a special type that means "no type" as in "this function won't return a value.". The `=> none` part of the function definition is a special syntax that means "this function will return this type".

This function doesn't take any arguments. If it had arguments, they would be passed in as a list of arguments in the function definition as in this example:
```corn
fun main a:i5 b:i5 => none {

}
```

You don't need to worry about this for now, we will discuss it in more detail in the third chapter.

Also note that the function body is wrapped in curly brackets `{}`. Cornlang requires these around bodies of code, including function bodies. It’s good style to place the opening curly bracket on the same line as the function declaration, adding one space in between.

If you want to stick to a standard style across Cornlang projects, you can use an automatic formatter tool called `cornroast` to format your code in a particular style. If you followed the installation instructions, `cornroast` should already be installed on your computer!"

Inside the `main` function, we have a single line of code:

```corn
    println("Hello, world!")
```

This line does all the work in this little program, it prints text to the screen. There are a few things to note about this line of code:

First, this calls a builtin function. The `println` function is a builtin function that prints text to the screen. We will discuss builtins in chapter 3.

Second, you see the "Hello, world!" string. This is a string literal. A string literal is a string of characters surrounded by double quotes. We pass this string as an argument to the `println` function.

Third, there is no line terminator in Cornlang. The cornpiler is smart enough to understand where each statement ends, so it doesn't require the programmer to manually terminate the line. If you wish hovewer, you can force it to terminate the line with a semicolon (`;`).

Now that you've written a simple "Hello, world!" program, let's move on to writing more complex programs.