//* data types in js

//?1 - string
let stringVal = "str";

//?2 - number
let numberVal = 4;
let numberVal2 = 4.3332;

//?3 - bigint
let bigIntVal = 1n; //n в конце - специальный идентификатор bigInt

//?4 - boolean
let booleanVal = true;
let booleanVal2 = false;

//?5 -symbol
let symbolVal = Symbol(); //уникальный идентификатор

//?6 - object
let objVal = {};
let objVal2 = [];

//?7 - null
let nullVal = null; //!typeof null = object

//?8 - undefined

let undefinedVal = undefined;

//* == or ===

1 == "1"; //true, тк работает приведение типов
1 === "1"; //false, тк проверяется соответствие типов

//*useStrict
// В спецификации языка ES5 ввели строгий режим "use strict", который обеспечивает более чистый JavaScript код,
// с меньшим количеством небезопасных особенностей. Например, строгий режим заменяет исключениями некоторые ошибки,
// которые ранее молча пропускались. Также строгий режим исправляет ошибки, которые мешали JavaScript-движкам выполнять
// оптимизацию — в некоторых случаях код в строгом режиме может быть оптимизирован для более быстрого выполнения,
// чем код в обычном режиме.

//*function declaration & expression

//Execution
sum(1, 2); //3
// multiply(3, 2); //error

//func declaration - через function
function sum(a, b) {
  return a + b;
}

//func expression - через присваивание
var multiply = function (a, b) {
  return a * b;
};

//* null or undefined
// оба значения обозначают отсутствие данных
// undefined - значение по умолчанию для:
//1. неопределенной переменной

//2. функции без указанного return
const func = () => {};
console.log(func()); //undefined

//3. несуществующего свойства объекта
let obj = {};
console.log(obj.a);

//null служит для явного задания отсутствущего значения

//* Hoisting

//var - до объяыления переменная будет видна со значением undefined
console.log(first); //undefined
var first = "string";
console.log(first);

//let, const
//! console.log(second); //ReferenceError second is not defined
let second = "string2";
console.log(second); //string2

//function может быть вызана до ее объявления

sayHi("Jack");

function sayHi(name) {
  return `Hello ${name}`;
}

//* Операторы && и ||
//&& первое ложное значение или последнее истинное, если все истинны
//|| первое истинное значение

//* setTimeout, setInterval
//обе функции возвращают таймер, который может быть передан в clearTimeout или clearInterval

setTimeout(sayHi("Andy"), 1000);
// Hello....

const timer = setInterval(sayHi("Jack"), 1000);
// Hello Jack
// Hello Jack
// Hello Jack
// Hello Jack
// Hello Jack
// Hello Jack
clearInterval(timer);

//* Область видимости (Scope) - есть три типа: Глобольная, функициональная и блочная

//Global
var a = 10;
function outerFunc() {
  (function innerFunc() {
    console.log(a);
  })();
}
outerFunc();

//Function
function outerFunc1() {
  var a = 10;
  console.log(a);
}
outerFunc();
console.log(a); //a is not defined

// Scope {} for let & const
function func1() {
  if (true) {
    let a = 10;
    const b = 5;
    //var is ok
    var c = 2;
  }
  //! console.log(a); //a is not defined
  //! console.log(b); //b is not defined
  console.log(c); //2
}
func1();

//* let, const, var
//var доступны до объявления
//объявленная var в блочной области видимости видна вне неё
//const нельзя перезаписать

//*highOrderFunctions
const highOrderFunc = (params, callback) => {
  return callback(params);
};

//js native highOrderFunc

/* 
-map
-filter
-forEach
-reduce
...
*/

//*DOM - document object model
//объектная модель документа, кот. браузер создает на основании html кода полученного от сервера.
//интерфейс, с помощью которого js может взаимодействовать с разметкой, изменять ее и тд.

//*Event propagation -
//при клике на элемент или другом действии, событие (event) будет распространяться на всех родителей целевого элемента

//* convert any to boolean

//1
Boolean(null); //false
Boolean(0); //false
Boolean(1); //true
Boolean("str"); //true

//2
!!{}; //true
!!"str"; //true
!!""; //false
!!undefined; //false

// Falsy values
"", 0, null, undefined, NaN, false;

//* методы строк

const str2 = "Some text.";
str2.length;
str2.charAt(1); //o
str2.toUpperCase();
str2.toLocaleLowerCase();
str2.indexOf(".");
str2.lastIndexOf("t");
str2.slice(0, 3);
str2.substr(0, 6);
str2.substring(0, 6);
str2.replace("Some", "Any");
" Hello      ".trim(); //"Hello"

//* методы массивов
const arr = ["Tommy", "Arthur", "John"];

//array methods
arr.length; //3
arr.push("Finn"); //4 - ['Tommy', 'Arthur', 'John', 'Finn'], мутирует массив
arr.pop(); // 'Finn' - ['Tommy', 'Arthur', 'John'], мутирует массив
arr.unshift("Finn"); // 4 - ['Finn', "Tommy", "Arthur", "John"], мутирует массив
arr.shift(); // 'Finn' - ['Tommy', 'Arthur', 'John'], мутирует массив
arr.concat(["Finn"]); //Возвращает новый массив ['Tommy', 'Arthur', 'John', 'Finn']
arr.splice(1, 1, "Finn"); // ['Tommy', 'Finn', 'John'] // возвращает массив удаленных элементов, мутирует исходный массив
arr.splice(0, 1); // ['Finn', 'John'];
arr.toString(); // "Tommy, Arthur, John"
arr.join("-"); // "Tommy-Arthur-John"

//forEach & map - не меняют исходный массив
const arr2 = [1, 2, 3, 4, 5];
const plusTwo = (x) => x + 2;
let newArr3 = [];

//forEach ничего не возвращает
const newArr1 = arr2.forEach((el) => {
  newArr3.push(plusTwo(el));
});

//вернет новый массив
const newArr2 = arr2.map((el) => {
  newArr3.push(plusTwo(el));
});

console.log(newArr1); //undefined
console.log(newArr2); //[3, 4, 5, 6, 7]
console.log(newArr3); //[3, 4, 5, 6, 7]

//reduce
//array.reduce(callback(accumulator, currentValue, index, array), [, initialValue])
//?Если initialValue не задан, то в него попадет первое значение в массиве

//tasks

//1 - среднее значение
let numbers = [4, 0, 10, 12, 34, 6, 2, 8];
const getAverage = (numbers) => {
  const total = numbers.reduce((acc, current) => acc + current, 0);
  return total / numbers.length;
};
console.log(getAverage(numbers));

//2 - посчитать количество джежаев
const users = [
  {
    username: "lando12",
    jedi: false,
  },
  {
    username: "kvaigon99",
    jedi: true,
  },
  {
    username: "anakin skywalker",
    jedi: false, // DARK SIDE ISN'T JEDI WAY!!!
  },
  {
    username: "littlegreenpug",
    jedi: true,
  },
  {
    username: "ray",
    jedi: true,
  },
  {
    username: "padmebestqueenever",
    jedi: false,
  },
];

const countJedi = (users) => {
  return users.reduce((acc, user) => {
    if (user.jedi) {
      return acc++;
    }
    return acc;
  }, 0);
};

console.log("JEDIS", countJedi(users));

//получить массив имен джедаев

const getArrayOnlyJedi = (users) => {
  return users.reduce((acc, user) => {
    if (user.jedi) {
      acc.push(user.username);
    }
    return acc;
  }, []);
};

console.log("JEDI NAMES", getArrayOnlyJedi(users));

//*clean function
// «Чистая» функция - это функция, которая выводит свои данные основываясь
// исключительно на свои входные данные и не вызывает побочных эффектов в приложении.

//Pure func
const add = (x, y) => x + y;
add(4, 4); //8

//not pure
let x = 4;
const notPureAdd = (y) => {
  x += y;
};
add(4); //8

//2 разные результаты при одинаковых входных параметрах
const generateID = () => Math.floor(Math.random() * 10000);

//*this

function getName() {
  return this.name;
}
var name = "Jack";
//Global scope
console.log(getName()); //'Jack'

//Obj scope with call
const obj2 = { name: "Max" };
console.log(getName.call(obj2));

//Obj scope
const obj3 = {
  name: "Tommy",
  getName() {
    return this.name;
  },
};

console.log(obj3.getName()); //'Tommy'

//* call apply bind

function showName(firstPart, lastPart) {
  console.log(`${this[firstPart]} ${this[lastPart]}`);
}

const user = {
  firstName: "Ivan",
  lastName: "Ivanov",
};

showName.call(user, "firstName", "lastName");
showName.apply(user, ["firstName", "lastName"]);

const newShowName = showName.bind(user, "firstName", "lastName");
newShowName();

//* определение наличия свойства в объекте

const obj4 = {
  prop1: "foo",
  prop2: "bar",
};

//hasOwnProperty
console.log(obj4.hasOwnProperty("prop1")); //true

//in
console.log("prop1" in obj4); //true

//index notation
console.log(obj["prop1"]); //foo

//* Замыкание

const sayHi2 = (name) => {
  const greeting = "Hello my name is";
  return `${greeting} ${name}`;
};

//! console.log(greeting); //undefined

sayHi2("jack"); //hello my name is jack

//Closures

const createPhrase = (greeting) => {
  return (name) => `${greeting} ${name}`;
};

const sayHi1 = createPhrase("Hello");
console.log(sayHi1("alex"));

//* IIFE (Immediately Invoked Function Expression) это JavaScript функция, которая выполняется сразу же после того, как она была определена

(function () {
  const greeting = "hello";
  console.log(greeting);
})();

//* псевдомассив arguments

function sayHi4() {
  for (var i = 0; i < arguments.length; i++) {
    alert("Привет, " + arguments[i]);
  }
}

sayHi4("Винни", "Пятачок"); // 'Привет, Винни', 'Привет, Пятачок'

//* eventTarget, eventCurrentTarget

//* eventTarget - элемент, вызвавший событие (тот, на котором событие происходит)
//* eventCurrentTarget - элемент, на котором висит обработчик события

//* Синхронные и асинхронные функции
//* Синхронные функции являются блокирующими, в то время как асинхронные - нет
