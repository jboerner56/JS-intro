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
function printBox(rows,columns){
    // variable for printing the square
    let rect = '';
    // first for loop, used for the columns
    for(let r =0; r <= rows; r++){
        // second for loop to be used for building rows
        // inner loop will run however many times "size is"
        for (let c = 0; c <= columns; c++){
            // adds a * up till the counter hits whatever size in used
            if (r == 1 || r ==rows || c == 0 || c == columns){
            rect += "*"
            }
            else{
                rect += " "
            }
        }
        // adds line break after each time the inner loop runs
        rect += "\n"
    }
    // returns what the nested for loops print out
    return rect;
}
printBox(6,4)
// factor a number
function factors(number){

}
factors()

// cipher
function cipher(string, offset){
    // string to return the coded version
    let code = "";
    let index = 0;
    const cipher = 'abcdefghijklmnopqrstuvwxyz'
    for(l = 0; l <= string.length; l++){

    }
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

// matrix multiplication
// need to finish!!!
function matrixMultiplication(matrix1,matrix2){
    let row = 0;
    let column = 0;
    let row2 = 0;
    let result = [[0,0][0,0]];
    while row < 2{
        while column < 2{
            while (row2 < 2){
                result [row][column] += matrix1 [row][row2] * matrix2[row2][column];
                row2++;
            }
            row2 = 0;
            column++;
        }
        column = 0;
        row++;
    }
    return result
}
