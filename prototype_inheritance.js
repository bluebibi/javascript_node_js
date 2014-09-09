var foo = {
	name : "James Kim",
	age : 30
}

console.log(foo);
console.log(foo.toString());
console.dir(foo);
console.log(foo.__proto__);
console.log(foo.__proto__.toString());
console.log();
console.log(Object.prototype);
console.log(Array.prototype);
console.log();
console.log(foo.__proto__ == Object.prototype);