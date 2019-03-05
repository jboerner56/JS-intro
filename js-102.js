// function that when given a start and end number, prints each number between. each on a new line
// for loop
function printNumbers(start, end){
    for(let count = start; count <= end; count++){
        console.log(count)
    }
}
printNumbers(1, 10)
// while loop
function printNumbers(start, end){
    let count = start;
    while(count <= end){
        console.log(count)
    }
}
printNumbers(1, 10)

// print square function
// define the function
function printSquare(size){
    // variable for printing the square
    let rect = '';
    // first for loop, used for the columns
    for(let i =0; i < size; i++){
        // second for loop to be used for building rows
        // inner loop will run however many times "size is"
        for (let j = 0; j < size; j++){
            // adds a * up till the counter hits whatever size in used
            rect += "*"
        }
        // adds line break after each time the inner loop runs
        rect += "\n"
    }
    // returns what the nested for loops print out
    return rect;
}
printSquare(5)
// print box
// need to fix this!!!
function printBox(rows, columns){
    // variable sp box can be printed
    let rect = "";
    // first for loop to print out columns
    for(let i = 0; i < columns; i++){
        // second nested loop to print out the rows.
        for(let j = 0; j < rows; j++){
            // or statements that will only print the outside characters for the times between the top and bottom
            if (i == 1 || i == rows)
                    rect += "*";
            else if (j == 1 || j == rows)
                rect += "\n *";
            else
                rect += "\n ";  
        }
    }
    return rect
}
printBox(6,4)

// factor a number
function factors(number){

}
factors()

// cipher
function cipher(string, offset){
    code = ""
}
cipher('Genius without education is like silver in the mine', 13)

// leetspeek
function leetspeak(string){
    transformed = ""
}
leetspeak('Leet')

// long vowels

function vowels(string){
    long = ""
}
vowels('Good')

// sum of numbers
function sumNumbers(arr){
    sum = []

}
sumNumbers([1,2,3,4])

// just positive numbers
function positiveNumbers(arr){
    numbers = []
}
positiveNumbers([1,-3,5,-2,0])

