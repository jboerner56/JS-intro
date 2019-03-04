// function to print hello to the name that is passed in.
function hello(name){
    console.log(`Hello ${name}`)
}
hello(`jason`)

// part 2 return hello world if there is no name
function hello(name){
    let msg = ''
    if (name){
        msg = `Hello ${name}`;
    }
    else {
    console.log(`Hello World`);
    }
    return msg;
}
hello(`jason`)
// madLib

function madLib(name, subject){
    console.log(`${name}'s favorite subject in school is ${subject} `)
madLib(Jason, Naptime)
}

// tip calculator

function tipAmount(bill, service){
    let tipAmount = 0
    if (service === "Good"){
        tipAmount = bill * .2;
        console.log(tipAmount)
    }
    else if(service === "Fair"){
        tipAmount = bill * .15;
        console.log(tipAmount)
    }
    else{
        tipAmount = bill * .1;
    }
    return tipAmount
}
tipAmount(100, 'Good')
tipAmount(40, 'Fair')

// tip calc 2
function totalAmount(bill, service){
    let totalAmount = tipAmount + bill
    if (service === "Good"){
        tipAmount = bill * .2;
        console.log(tipAmount)
    }
    else if(service === "Fair"){
        tipAmount = bill * .15;
        console.log(tipAmount)
    }
    else{
        tipAmount = bill * .1;
    }
return tipAmount
}
totalAmount(100, 'Good')
totalAmount(40, 'Fair')

// tip calc 3
function splitAmount(bill, service, people){
    if (service === "Good"){
        tipAmount = bill * .2;
    }
    else if(service === "Fair"){
        tipAmount = bill * .15;
    }
    else{
        tipAmount = bill * .1;
    }
let totalAmount = tipAmount + bill
let perPerson = totalAmount / people
}
(splitAmount(100, 'Good', 5))
(splitAmount(40, 'Fair', 2))