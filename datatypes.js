//number
var intNum = 10;
var floatNum = 0.1;
console.log(typeof intNum, typeof floatNum) // number number
var num = 5 / 2;
console.log(num);							// 2.5
console.log(typeof num);					// number
console.log(Math.floor(num));				// 2
console.log();

//string
var singleQuoteStr = 'single quote string';
var doubleQuoteStr = "single quote string";
console.log(typeof singleQuoteStr, typeof doubleQuoteStr)	// string string
var str = "Javascript";
console.log(str);											// Javascript
console.log(typeof str);									// string
console.log(str.length);									// 10
console.log(str[0], str[1], str[2], str[9], str[10]);		// J a v t undefined
str[0] = 'T';
console.log(str);											// Javascript
console.log(str[0]);										// J
console.log();

//boolean
var boolVar = true;
var boolVar2 = false;
console.log(typeof boolVar, typeof boolVar2);	// boolean boolean
console.log();

//undefined
var undefinedVar;
console.log(typeof undefinedVar);	// undefined
console.log();

//null
var nullVar = null;
console.log(typeof nullVar);		// object 
console.log(nullVar);				// null
console.log();