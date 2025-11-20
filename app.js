var courseName = "NodeJS";
var a = 10;
var b = 20;
console.log(courseName);
console.log(a + b);
//console.log(window);//Errors out
console.log(global);
console.log(this); //Empty Object
console.log(globalThis);
console.log(globalThis === global); //true
console.log(globalThis === this); //false
