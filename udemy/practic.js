// const options = {
// 	name: 'test',
// 	width: 1024,
// 	height: 1024,
// 	colors: {
// 		border: 'black',
// 		bg: 'red'
// 	},
// 	makeTest: function () {
// 		console.log("Test");
// 	}
// };
// options.makeTest();
/* деструктуризация обьекта */
// const {border, bg} = options.colors;
/****************************************/
// console.log(border);
// console.log(Object.keys(options).length); /******** у обьекта нет свойства length но с помощью Object.keys() которое возвращает массив мы можем применить это свойство*********/
// console.log(options["colors"]["bg"]);
/******************цикл for in достать свойства и ключи из обьектов******************/
// let counter = 0;
// for(let key in options){
// 	if(typeof(options[key]) ==='object'){
// 		for(let i in options[key]){
// 			console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
// 			counter++;
// 		}
// 	}else{
// 		console.log(`Свойство ${key} имеет значение ${options[key]}`);
// 		counter++;
// 	}
// };

/******************цикл for of не работает с обьектами!!!******************/


/****************** Массивы и псевдомассивы******************/

const arr = [1,2,3,6,8];
arr.sort(cmpairNuma);
// console.log(arr);
/**что бы отсортировать числа */
function cmpairNuma(a,b) {
	return a - b;
}
// arr.push(10);
// console.log(arr);

// for(let i=0; i <arr.length; i++){
// 	console.log(arr[i]);
// }

// for( value of arr){
// 	console.log(value);
// };
// arr.forEach(function (item, i, arr) {
// 	console.log(`${i}: ${item} внутри массива ${arr}`);
// });
/**создать копию обьекта (поверхностная копия, только на первом уровне!!!)*/

function copy(mainObj) {
	let objCopy ={};

	let key;
	for(key in mainObj){
		objCopy[key] = mainObj[key];
	}
	return objCopy;
}

const numbers = {
	a:2,
	b:5,
	c:{
		x:7,
		y:4
	}
};
const newNumbers = copy(numbers);
newNumbers.a=10;

//не меняет т.к. это глубокий уровень

newNumbers.с.x = 10;

// console.log(newNumbers);
// console.log(numbers);


/** создать  копию обьекта метод Object.assign({}, add) */
const add ={
	d:17,
	e:20
};
const clone = Object.assign({}, add);
clone.d =20;
// console.log(add);
// console.log(clone);

/** метод для создания копии массива */

const oldArray = ['a','b','c'];
const newArray = oldArray.slice();
newArray[1] = 'fgh'
console.log(oldArray);
console.log(newArray);
/**оператор разворота "..."  */
const video = ['youtube','vimeo','rutube'],
		blogs = ['wordpress','livejournal','blogger'],
		internet = [...video, ...blogs, 'vk', 'facebook'];
		console.log(internet);

function log(a,b,c) {
	console.log(a);
	console.log(b);
	console.log(c);
}

const num = [2,5,7];
log(...num);
/**работает так же с обьектами, появился в новом стандарте es9 */
const array = ['a','b'];
const newArray = [...array];