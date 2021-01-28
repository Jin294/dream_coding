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
console.log(1 % 1); //remainer(몫)
console.log(1 ** 1); //exponentiation

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

const preDecrement = ++counter; //[선업데이트, 후할당]
// counter = counter +1; 카운터에 1을 더해서 다시 할당, counter 값은 3
// preDecrement = counter preDecrement에 카운터를 할당, 즉 3이 할당됨
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);

const postDecrement = counter++;
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
const 