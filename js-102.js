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