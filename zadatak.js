// 1)

var firstNumber = parseInt(prompt('Enter the first number'));
var secondNumber = parseInt(prompt('Enter the second number'));

if(firstNumber > secondNumber) {
    console.log('The first number is greater than the second number');
} else if (firstNumber < secondNumber) {
    console.log('The second number is greater than the first number');
} else {
    console.log('The numbers are the same');
}

// ________________________________________________________________________
// 2)

var firstNumber = parseInt(prompt('Enter the first number'));
var secondNumber = parseInt(prompt('Enter the second number'));

var sum = firstNumber + secondNumber;
var difference = firstNumber - secondNumber;
var product = firstNumber * secondNumber;
var quotient = firstNumber / secondNumber;


if((sum > 99)&&(sum < 1000)) {
    console.log('The sum is: ' +sum);
}
if((difference > 99)&&(difference < 1000)) {
    console.log('The difference is: ' +difference);
}
if((product > 99)&&(product < 1000)) {
    console.log('The product is: ' +product);
}
if((quotient > 99)&&(quotient < 1000)) {
    console.log('The quotient is: ' +quotient);
}

// ________________________________________________________________________
// 3)

var firstNumber = (parseInt(Math.random() * 100));
var secondNumber = (parseInt(Math.random() * 100));

var sum = parseInt(prompt('How much is it: ' + firstNumber + "+" + secondNumber));

if(firstNumber + secondNumber == sum) {
    console.log('Correct answer');
} else {
    console.log(firstNumber + secondNumber);
}

// ________________________________________________________________________
// 4)

var hour = prompt("Enter the hour value")

if((hour < 9)&&(hour >=0)) {
    console.log('Good morning');
}
if((hour > 8)&&(hour < 19)) {
    console.log('Good afternoon');
}
if((hour > 18)&&(hour < 24)) {
    console.log('Good evening');
}

// ________________________________________________________________________
// 5)

var a = parseInt(prompt('Enter the first number'));
var b = parseInt(prompt('Enter the second number'));
var c = parseInt(prompt('Enter the third number'));

if(a>b && a>c) {
    if(b>c) {
        console.log(c + ' ' + b + ' ' + a);
    } else {
        console.log(b + ' ' + c + ' ' + a);
    }

}

if(b>a && b>c) {
    if(a>c) {
        console.log(c + ' ' + a + ' ' + b);
    } else {
        console.log(a + ' ' + c + ' ' + b);
    }
}

if(c>a && c>b) {
    if(a>b) {
        console.log(b + ' ' + a + ' ' + c);
    } else {
        console.log(a + ' ' + b + ' ' + c);
    }
}