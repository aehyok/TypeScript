//布尔类型
let	isDone:	boolean	=	false;

//字符串类型
let	stringName:string	=	"bob";
stringName="Smith";

let	testName:	string	=	`Gene`; 
let	age:	number	=	37; 
let	sentence:	string	=	`Hello,	my name is ${testName}.I'll be	${age+1}years old next month.`;
console.info(sentence);

let list: number[]=[1,2,3];

let	notSure:any	= 4;

//JavaScrpit中的let和var区别 ：当用 let 声明一个变量，它使用的是词法作用域或块作用域。
////https://www.cnblogs.com/asand/p/7205632.html

let x = 10;
//let x = 20; // 错误，不能在1个作用域里多次声明`x`