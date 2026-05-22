<div align="center">
    <img src="public/images/cwc-logo-4-colors.svg" alt="Code with Carrie logo" width="50%" />
    <h1>JavaScript Fundamentals: Logic & Syntax</h1>
    <p><em>Code examples (with demo videos!) and extra practice exercises for new learners</em></p>
    <a href="http://www.codewithcarrie.com"><img src="https://img.shields.io/badge/by-CodeWithCarrie.com-b03454?style=for-the-badge" alt="badge linking to CodeWithCarrie's website" /></a>
    <img src="https://img.shields.io/badge/JavaScript-F0DB4F?style=for-the-badge&logo=javascript&logoColor=333333" alt="JavaScript" />
    <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=ffffff" alt="npm" />
    
</div>

---

### Welcome!

I am currently creating a **completely new** volume of demos and practice exercises for anyone looking to pick up the basics of programming in the context of JavaScript. In a field increasingly dominated by AI code generation, it is essential to have a firm grasp on the fundamentals in order to plan ahead, compose crystal-clear prompts, and recognize errors and poorly-formed code. The only way to build muscle is to exercise it, and learning programming is no different!

> [!IMPORTANT]
> You need to deepen your problem-solving skills and core understanding of syntax and code composition independently _before_ you can integrate AI tools in your workflow and become a more efficient developer. My learning resources are designed to do just that!

---

### HOW TO FORK AND CLONE

#### CREATE YOUR OWN COPY

1. FORK it to your own GitHub account
1. COPY the link from your new repo on GitHub
1. CLONE it to your local machine. Example:

`git clone https://github.com/YourUsername/javascript-fundamentals`

#### PRACTICE IN YOUR OWN BRANCHES

If you want to update your forked repository from my parent repository when I add or change things to mine in the future, there are instructions below this section.
It will go much easier if you don't ever change the code in `main`. Instead, do the following:

1. From `main`, use the command `git checkout -b new-branch-name` to create your own branch for practicing (example: `functions-practice`).
1. Practice as much as you'd like in your new branch, making commits as you add code.
1. When you are ready to work on something different in another new branch, use the command `git checkout main` to return to `main` and then you can repeat the two steps above.

### HOW TO UPDATE YOUR REPO AFTER I'VE UPDATED MINE

**Set the upstream link:**

1. On your local machine, make sure you are in the correct directory in the terminal.
1. Use the command `git remote add upstream https://github.com/CodeWithCarrie/javascript-fundamentals`

You now have a direct link to my original repo!

Use the command `git remote -v` to verify that you have linked to both `origin` (your forked repo) and `upstream` (my original repo)

**Update your repo anytime I make changes in the future:**

1. On your local machine, make sure you are in the correct directory in the terminal.
1. If you have any uncommitted changes, **stage** and **commit** them.
1. Make sure you are in the branch you wish to update (e.g. `main`)
1. Use the command `git fetch upstream` so your local repo has knowledge of changes I made in my repo
1. Use the command `git rebase upstream/main` to sync your repo

**Check to see which branches you already have:**

1. You can use the command `git branch` anytime to see what local branches you have
1. The command `git branch -r` will show you branches that exist on GitHub (after you've fetched that knowledge)

---

## DEMOS & PRACTICE EXERCISES

Each topic will have at least one set of starter code and solution code corresponding to a video on the [@CodeWithCarrie](https://youtube.com/@CodeWithCarrie) YouTube channel, and most topics will include hands-on practice exercises as well. Use the links in the tables below for quick peeks at the code. You can fork your own copy of this repository for practice on your local machine. While individual links are available below for each video, you can also start with the [full playlist](https://www.youtube.com/playlist?list=PLvcPeTeqi37QYL9fnn4Y1ZJdsyFTHJU7D).

> [!TIP]
> I recommend working through the demos and exercises in the sequence shown below.

Go forth and learn!

---

### SETUP

This particular collection of coding exercises focuses solely on JavaScript (occasionally with the readline-sync dependency installed via npm). In my demo videos, I demonstrate Git best practices, but my tutorials on Git and GitHub are in a different repository.

> [!NOTE]
> Make sure you have npm and Node.js [installed](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) before continuing with any of the exercises below.

---

### 1 - Basic Syntax

| Topics                                  | Code                                                                           | Videos                               |  Length |
| --------------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------ | ------: |
| Printing to the Console                 | [printing-to-the-console](/tutorials/01-basic-syntax/printing-to-the-console/) | [Demo](https://youtu.be/setRUjWlPPY) |    6:29 |
| Declaring & Initializing Variables      | [declaring-variables](/tutorials/01-basic-syntax/declaring-variables/)         | [Demo](https://youtu.be/6itBZ65-D3A) |    6:49 |
| Assigning Data Types                    | [data-types](/tutorials/01-basic-syntax/data-types/)                           | [Demo](https://youtu.be/QABAPdzfQqA) |    7:16 |
| Order of Code Execution                 | [code-execution](/tutorials/01-basic-syntax/code-execution/)                   | [Demo](https://youtu.be/qMEOOwXoDEU) |    4:17 |
| Naming Variables                        | [naming-variables](/tutorials/01-basic-syntax/naming-variables/)               | [Demo](https://youtu.be/M3xjxDgAdBY) |    4:03 |
| Data Type Conversion: Strings           | [data-type-conversion](/tutorials/01-basic-syntax/data-type-conversion/)       | [Demo](https://youtu.be/bAd9Oug2UGo) |    6:36 |
| Data Type Conversion: Numbers           | [data-type-conversion](/tutorials/01-basic-syntax/data-type-conversion/)       | [Demo](https://youtu.be/KqDdIMRdoLk) |    7:26 |
| Data Type Conversion: Booleans          | [data-type-conversion](/tutorials/01-basic-syntax/data-type-conversion/)       | [Demo](https://youtu.be/xTPpM-wQXLc) |    6:52 |
| Data Type Conversion: Type Coercion     | [data-type-conversion](/tutorials/01-basic-syntax/data-type-conversion/)       | [Demo](https://youtu.be/OA1NSzU0SHs) |    7:49 |
| Template Literals                       | [template-literals](/tutorials/01-basic-syntax/template-literals/)             | [Demo](https://youtu.be/aomY7Y5khUI) |    7:37 |
| Constants                               | [constants](/tutorials/01-basic-syntax/constants/)                             | [Demo](https://youtu.be/NDcT4XVbLFo) |    4:27 |
| Capturing User Input with readline-sync | [user-input](/tutorials/01-basic-syntax/user-input/)                           | [Demo](https://youtu.be/UDFCkM5fAUo) |   11:08 |
|                                         |                                                                                | TOTAL                                | 1:20:49 |

---

### 2 - Conditionals

| Topics                        | Code                                                                                     | Videos                               | Length |
| ----------------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------ | -----: |
| Basic Boolean Expressions     | [basic-boolean-expressions](/tutorials/02-conditionals/basic-boolean-expressions/)       | [Demo](https://youtu.be/C8JBw-Nrgd8) |   6:32 |
| Compound Boolean Expressions  | [compound-boolean-expressions](/tutorials/02-conditionals/compound-boolean-expressions/) | [Demo](https://youtu.be/9iuuOkLV_UY) |   5:20 |
| Basic Conditional Statements  | [basic-conditionals](/tutorials//02-conditionals/basic-conditionals/)                    | [Demo](https://youtu.be/QsWtOX6bNZI) |  11:11 |
| Nested Conditional Statements | [nested-conditionals](/tutorials/02-conditionals/nested-conditionals/)                   | [Demo](https://youtu.be/XhzXDnG06x4) |   7:55 |
| Ternary Expressions           | [ternary-expressions](/tutorials/02-conditionals/ternary-expressions/)                   | [Demo](https://youtu.be/B8P8RbmmeUg) |   5:19 |
|                               |                                                                                          | TOTAL                                |  36:17 |

---

### 3 - Errors & Debugging

| Topics                              | Code                                                                           | Videos                               | Length |
| ----------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------ | -----: |
| Debugging Syntax and Runtime Errors | [syntax-errors](/tutorials/03-errors-and-debugging/syntax-and-runtime-errors/) | [Demo](https://youtu.be/63hfXRu7sDQ) |   6:48 |
| Debugging Logic Errors              | [logic-errors](/tutorials/03-errors-and-debugging/logic-errors/)               | [Demo](https://youtu.be/_9iAOWDVpR0) |   4:02 |
|                                     |                                                                                | TOTAL                                |  10:50 |

---

### 4 - Strings

| Topics                                        | Code                                                                        | Videos                               | Length |
| --------------------------------------------- | --------------------------------------------------------------------------- | ------------------------------------ | -----: |
| String Length, Indexing, and Bracket Notation | [length-indexing-notation](/tutorials/04-strings/length-indexing-notation/) | [Demo](https://youtu.be/5ugTb7ZNn5c) |   5:34 |
| Common String Methods: Searching Strings      | [string-methods-search](/tutorials/04-strings/string-methods-search/)       | [Demo](https://youtu.be/9kpV2qskS1M) |   4:36 |
| Common String Methods: Transforming Strings   | [string-methods-transform](/tutorials/04-strings/string-methods-transform/) | [Demo](https://youtu.be/K3KdD3M3eTA) |   4:11 |
| Common String Methods: Retrieving Substrings  | [string-methods-retrieve](/tutorials/04-strings/string-methods-retrieve/)   | [Demo](https://youtu.be/NkgNjj2a96w) |   5:03 |
| Method Chaining                               | [method-chaining](/tutorials/04-strings/method-chaining/)                   | [Demo](https://youtu.be/C6q0YFZzM9o) |   4:14 |
|                                               |                                                                             | TOTAL                                |  23:38 |

---

### 5 - Arrays

| Topics                                                | Code                                                                                 | Videos                               | Length |
| ----------------------------------------------------- | ------------------------------------------------------------------------------------ | ------------------------------------ | -----: |
| Introduction to Arrays                                | [arrays-intro](/tutorials/05-arrays/arrays-intro/)                                   | [Demo](https://youtu.be/aJPwRCzTDrU) |   6:14 |
| Creating Arrays of n Length                           | [creating-n-length](/tutorials/05-arrays/creating-n-length/)                         | [Demo](https://youtu.be/tV_Iuxt13Kw) |   4:52 |
| Array Length, Indexing, and Bracket Notation          | [length-indexing-notation](/tutorials/05-arrays/length-indexing-notation/)           | [Demo](https://youtu.be/hxu2-AgMG0A) |   4:31 |
| Common Array Methods: Adding & Removing Elements      | [array-methods-add-remove](/tutorials/05-arrays/array-methods-add-remove/)           | [Demo](https://youtu.be/shZWIO2dzhM) |   4:04 |
| Common Array Methods: Querying & Accessing Elements   | [array-methods-query-access](/tutorials/05-arrays/array-methods-query-access/)       | [Demo](https://youtu.be/jaqKTOUsPN8) |   3:51 |
| Common Array Methods: Combining & Extracting Elements | [array-methods-combine-extract](/tutorials/05-arrays/array-methods-combine-extract/) | [Demo](https://youtu.be/8BNkYFGJva0) |   4:59 |
| Common Array Methods: Sorting & Reversing Elements    | [array-methods-sort-reverse](/tutorials/05-arrays/array-methods-sort-reverse/)       | [Demo](https://youtu.be/eDarMuePJEU) |   2:56 |
| Converting Between Strings & Arrays                   | [array-string-conversion](/tutorials/05-arrays/array-string-conversion/)             | [Demo](https://youtu.be/s2x0N54wO0I) |   5:46 |
| Multi-Dimensional Arrays                              | [multi-dimensional-arrays](/tutorials/05-arrays/multi-dimensional-arrays/)           | [Demo](https://youtu.be/m3JBINRAMWE) |   6:01 |
|                                                       |                                                                                      | **TOTAL**                            |  43:14 |

---

### 6 - Loops

| Topics                     | Code                                                                          | Videos         | Length |
| :------------------------- | :---------------------------------------------------------------------------- | :------------- | -----: |
| For Loops                  | [for-loops](/tutorials/06-loops/for-loops/)                                   | _Coming soon!_ |        |
| For-Of Loops               | [for-of-loops](/tutorials/06-loops/for-of-loops/)                             | _Coming soon!_ |        |
| While Loops                | [while-loops](/tutorials/06-loops/while-loops/)                               | _Coming soon!_ |        |
| Do-While Loops             | [do-while-loops](/tutorials/06-loops/do-while-loops/)                         | _Coming soon!_ |        |
| Nested Loops               | [nested-loops](/tutorials/06-loops/nested-loops/)                             | _Coming soon!_ |        |
| Problem-Solving with Loops | [problem-solving-with-loops](/tutorials/06-loops/problem-solving-with-loops/) | _Coming soon!_ |        |
|                            |                                                                               | **TOTAL**      |        |

---

### 7 - Function Basics

| Topics                                 | Code                                                                       | Videos                               | Length |
| :------------------------------------- | :------------------------------------------------------------------------- | :----------------------------------- | -----: |
| Introduction to Functions              | [functions-intro](/tutorials/07-functions/functions-intro/)                | [Demo](https://youtu.be/u7lPKTwcohc) |   6:08 |
| Function Input & Output                | [input-output](/tutorials/07-functions/input-output/)                      | [Demo](https://youtu.be/jSErMvfcwqI) |  10:04 |
| Variable Scope                         | [variable-scope](/tutorials/07-functions/variable-scope/)                  | [Demo](https://youtu.be/th_YkzQh6is) |   6:13 |
| Procedural Recursion                   | [recursion-procedural](/tutorials/07-functions/recursion-procedural/)      | [Demo](https://youtu.be/i8wz8EKtuBo) |   9:50 |
| Reductive Recursion                    | [recursion-reductive](/tutorials/07-functions/recursion-reductive/)        | [Demo](https://youtu.be/Nwtxb4WMeck) |   4:51 |
| Helper Functions                       | [helper-functions](/tutorials/07-functions/helper-functions)               | _Coming soon!_                       |        |
| Interactive Programming with Functions | [interactive-programming](/tutorials/07-functions/interactive-programming) | _Coming soon!_                       |        |
|                                        |                                                                            | **TOTAL**                            |        |

---

### 8 - Objects

| Topics                                  | Code                                                                                    | Videos                               | Length |
| :-------------------------------------- | :-------------------------------------------------------------------------------------- | :----------------------------------- | -----: |
| Introduction to Objects                 | [objects-intro](/tutorials/08-objects/objects-intro/)                                   | [Demo](https://youtu.be/3whafTBfg8U) |   5:42 |
| Accessing & Modifying Object Properties | [accessing-modifying-properties](/tutorials/08-objects/accessing-modifying-properties/) | [Demo](https://youtu.be/Eu6IVzAOcdg) |   6:21 |
| The Math Module & The Spread Operator   | [math-module](/tutorials/08-objects/math-module/)                                       | [Demo](https://youtu.be/Jf0QjQJRft0) |   7:24 |
| Object Methods & Context                | [object-methods](/tutorials/08-objects/object-methods/)                                 | _Coming soon!_                       |        |
| Complex Objects & Mutation              | [complex-objects](/tutorials/08-objects/complex-objects/)                               | _Coming soon!_                       |        |
| Looping Over Key/Value Pairs            | [looping-over-key-value-pairs](/tutorials/08-objects/looping-over-key-value-pairs/)     | _Coming soon!_                       |        |
| Looping Over Arrays of Objects          | [looping-over-arrays-of-objects](/tutorials/08-objects/looping-over-arrays-of-objects/) | _Coming soon!_                       |        |
|                                         |                                                                                         | **TOTAL**                            |        |

---

### 9 - Anonymous & Higher-Order Functions

_Coming soon!_

---

## ABOUT THE AUTHOR

Caroline Jones - [@Carolista](https://github.com/Carolista) - [CodeWithCarrie.com](http://codewithcarrie.com) - [LinkedIn](https://www.linkedin.com/in/carolinerjones)
