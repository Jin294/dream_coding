// 1. String concatenation
console.log('my'+'cat');
console.log('1'+2); //문자열과 숫자를 합치면 숫자가 문자열로 변환되어 인식됨.
console.log(`string literals: 1+2 = ${1+2}`);
console.log(`ellie's \nbook`);
console.log('ellie\'s book')

// 2. Numeric operators
console.log(1 + 1); //add
console.log(1 - 1); //substractyd
console.log(1 / 1); //divide
console.log(1 * 1); //multiply
console.log(5 % 2); //remainer(나누고 나머지값)
console.log(2 ** 3); //exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter; //[선업데이트, 후할당]
// counter = counter +1; 카운터에 1을 더해서 다시 할당, counter 값은 3
// preIncrement = counter preIncrement에 카운터를 할당, 즉 3이 할당됨
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++;
// postIncrement = counter; 현재 counter는 3, 따라서 post도 3 [선할당, 후업데이트]
// counter = counter + 1;  4
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

const preDecrement = --counter; //[선업데이트, 후할당]
// counter = counter +1; 카운터에 1을 더해서 다시 할당, counter 값은 3
// preDecrement = counter preDecrement에 카운터를 할당, 즉 3이 할당됨
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);

const postDecrement = counter--;
// postDecrement = counter; 현재 counter는 3, 따라서 post도 3 [선할당, 후업데이트]
// counter = counter + 1;  4
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

// 4. Assignmnet operators
let x= 3;
let y= 6;
x += y; // x=x+y;
x -= y;
x *= y;
x /= y;

// 5. Conparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or), finds the first truthy value
//하나라도 true로 계산되면 true 표시
console.log(`or: ${value1 || value2 || check()}`);
// if value1이 true라면 뒤에까지 실행 안됨
// check 같이 heavy한 operation들은 뒤에 놓는 것이 좋음(더 효율적)

// && (뭉), finds the first falsy value
//모두 true로 계산되면 true 표시
//하나라도 false로 계산되면 false 표시
console.log(`and: ${value1 && value2 && check()}`);

// often used to compress long if-statement
// nullableObject && nullableObject.something
if (nullableObject != null) {
	nullableObject.something;
}

function check(){
	for(let i = 0; i < 10; i++) {
		console.log('😂');
	}
	return true;
}

//! (not) 값을 반대로 바꿔줌
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// ==loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// ===strict equality, no type conversion , type이 같이 않으면 동일하지 않음.
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

//object equality be reference
const ellie1 = { name: 'ellie' };
const ellie2 = { name: 'ellie' };
const ellie3 = ellie1;
//1과 2는 똑같은 메모리가 들어있는 object지만 각각 다른 reference가 들어있음

console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);

//equality - puzzler
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);

// 8. Conditional operators: if
// if, else if, else
const name = 'ellie';
if (name === 'ellie') {
	console.log('Welcome, Ellie!');
} else if (name === 'coder') {
	console.log('you are amazing coder');
} else {
	console.log('unknown');
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'ellie' ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS

const browser = 'IE';
switch (browser) {
	case 'IE':
		console.log('go away!');
		break;
	case 'Chrome':
	case 'Firefox':
		console.log('love you!');
		break;
	default:
		console.log('same all!');
		break;
}

// 11. Loops
// while loop, while the condition is truthy, false가 나올때까지 계속 반복함.
// body code is executed.
let i = 3;
while (i > 0) {
	console.log(`while: ${i}`);
	i--;
}

// do while loop, body code is executed first, //block을 먼저 실행하고 나서 조건 확인
// then check the condition.
do {
	console.log(`do while: ${i}`);
	i--;
} while (i > 0);

// for loop, for(begin; consition; step)
for (i = 3; i > 0; i--) {
	console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
	//inline variable declaration
	console.log(`inline variable for: ${i}`);
}

//nested loops
for (let i = 0; i < 10; i++) {
	for (let j = 0; j < 10; j++) {
		console.log(`i:${i}, j:${j}`);
	}
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers(use continue)

{ //mine
	const a = 0;
	while (a =< 10) {
		i++;
		if (a == even) {
			console.log(`while: ${a}`);
		}	
	}
}

//Answer
	for (let a = 0; a < 11; a++) {
		if (a % 2 === 0) {
			console.log(`q1. ${a}`);
		}
	}

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)

{ //mine
	const b = 0;
	if (b < 8) {
		console.log(`while: ${b}`);
		i++;
	} else {
		break;
	}
}
//Answer
for (let b = 0; b < 11; b++){
	if (b > 8) {
		break;
	}
	console.log(`q2. ${b}`);
}
