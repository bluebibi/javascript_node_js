//using object literal
var emptyObject = {}
console.log(typeof emptyObject);	// object
console.log(emptyObject)			// {}
console.log()

var foo1 = {
	name : 'James Kim',
	age : 31,
	gender: 'male'
};
console.log(typeof foo1);	// object 
console.log(foo1);	// { name: 'bar', age: 31, gender: 'male' }
console.log();

//using new Object()
var foo2 = new Object();
foo2.name = 'James Kim';
foo2.age = 31;
foo2.gender = 'male';
console.log(typeof foo2);	// object 
console.log(foo2);	// { name: 'bar', age: 31, gender: 'male' }
console.log();

//using function creator
function Person() {
};
var foo3 = new Person();
foo3.name = 'Thomas Kim';
foo3.age = 34;
foo3.gender = 'mail';
console.log(typeof foo3);	// object 
console.log(foo3);	// { name: 'bar', age: 31, gender: 'male' }
console.log()

//object access/update
var myCar = {
	make : "Ford",
    model : "Mustang",
    year : 1969
};

console.log(myCar.make);		// Ford
console.log(myCar.model);		// Mustang
console.log(myCar.year);		// 1969
console.log(myCar['make']);		// Ford
console.log(myCar['model']);	// Mustang
console.log(myCar['year']);		// 1969
console.log();

console.log(myCar.name);		// undefined
console.log(myCar['name']);		// undefined
console.log();

myCar.make = "Toyota"
myCar['model'] = "RAV4"
myCar['year'] = 2008
console.log(myCar['make']);		// Toyota
console.log(myCar.model);		// RAV4
console.log(myCar.year);		// 2008
console.log();

myCar.number = "GJG3988"
console.log(myCar['number']);	// GJG3998
console.log(myCar.number);		// GJG3998
console.log();

myCar['current-location'] = "New York City";
console.log(myCar['current-location']);	// New York City
//console.log(myCar.current-location);		// Error
console.log();


// using for statement
var myCar = {
	make : "Ford",
    model : "Mustang",
    year : 1969
};
console.log(myCar);
var prop;
for (prop in myCar) {
	console.log(prop + ":" + myCar[prop]);
}
console.log();
/*
make:Ford
model:Mustang
year:1969
*/

var myCar = {
	make : "Ford",
    model : "Mustang",
    year : 1969
};

console.log(myCar.year);	// 1969
delete myCar.year;			
console.log(myCar.year);	// undefined
console.log();

delete myCar;
console.log(myCar);			// Ford
console.log(myCar.make);	// Ford
console.log()

myCar = null
console.log(myCar);			// null			
//console.log(myCar.make);	// Error

//object reference
var refX = {
	val: 10
};

var refY = refX;

console.log(refX.val);		// 10
console.log(refY.val);		// 10

refY.val = 20;
console.log(refX.val);		// 20
console.log(refY.val);		// 20
console.log()

// object comparison
var x = 10;
var y = 10;

var refX = {value: 10};
var refY = {value: 10};
var refZ = refY;

console.log(x == y);
console.log(refX == refY);
console.log(refX.value == refY.value);
console.log(refY == refZ);
console.log();

// call by value
function change(n, refN) {
	n = 20;
	refN.val = 20;
}

var x = 10;
var refX = { val: 10 };

console.log("Before calling function - x:" + x); 				// 10
console.log("Before calling function - refX.val:" + refX.val);	// 10

change(x, refX);

console.log("After calling function - x:" + x);					// 10
console.log("After calling function - refX.val:" + refX.val);	// 20