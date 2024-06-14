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

//* Что такое необъявленная переменная?

//Необъявленная (undeclared или not defined) — это переменная, которая не была объявлена в доступной области видимости.

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

//* Для чего используется оператор двойного отрицания (!!)?
//Предназначен для преобразования значений к логическому типу

//* Для чего используется оператор остатка (%)?
// Оператор взятия остатка %, несмотря на обозначение, никакого отношения к процентам не имеет.
// Результат a % b – это остаток от целочисленного деления a на b.
console.log(5 % 2); // 1

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

//* Как проверить, является ли значение массивом?

//Метод Array.isArray() возвращает true, если объект является массивом и false, если он массивом не является.
console.log(Array.isArray([1, 2, 3]));

//Или оператор instanceof
//Оператор instanceof позволяет проверить, принадлежит ли объект указанному классу, с учётом наследования.
const letters = ["a", "b", "c"];
console.log(letters instanceof Array); // => true

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

const documents = [
  {
    content: "Ты был мне как брат! Я любил тебя!",
    author: "Obi-Wan Kenobi",
    date: "2017-01-17 07:13:07",
  },
  {
    content: "База повстанцев находится на Дантуине.",
    author: "Leia Organa",
    date: "1999-02-19 16:56:11",
  },
  {
    content:
      "Страх открывает доступ к темной стороне! Страх рождает гнев, гнев рождает ненависть, ненависть — залог страданий.",
    author: "Yoda",
    date: "2019-11-27 21:33:56",
  },
];

//composeDocuments

const composeDocuments = (documents) => {
  return documents.reduce(
    (acc, document) => {
      acc.content = acc.content + document.content;
      acc.author.push(document.author);
      if (!acc.date || acc.date < document.date) {
        acc.date = document.date;
      }
      return acc;
    },
    {
      content: "",
      author: [],
      date: null,
    }
  );
};

console.log("DOCUMENTS", composeDocuments(documents));

//* Разница между методами .slice() и .splice()?

//?Метод arr.splice – это универсальный «швейцарский нож» для работы с массивами. Умеет всё: добавлять, удалять и заменять элементы.
// Синтаксис:
// arr.splice(start[, deleteCount, elem1, ..., elemN])
//Он изменяет arr начиная с индекса start: удаляет deleteCount элементов и затем вставляет elem1, ..., elemN на их место.
//  Возвращает массив из удалённых элементов.

let arr21 = ["Я", "Изучаю", "JS"];
arr21.splice(1, 1);
console.log("SPLICE", arr21);
arr21.splice(1, 0, "Знаю");
console.log("SPLICE2", arr21);

//? Метод arr.slice возвращает новый массив, в который копирует все элементы с индекса start до end (не включая end).
//? start и end могут быть отрицательными, в этом случае отсчёт позиции будет вестись с конца массива.

console.log(arr21.slice(0, 2));

//* Как работают методы .find(), .findIndex() и .indexOf()?

//? .find()
// Этот метод принимает коллбэк. Если функция возвращает true, поиск прерывается и возвращается item. Если ничего не найдено, возвращается undefined.
let result = arr.find(function (item, index, array) {
  // если true - возвращается текущий элемент и перебор прерывается
  // если все итерации оказались ложными, возвращается undefined
});

//? .findIndex()
// У метода arr.findIndex такой же синтаксис, но он возвращает индекс, на котором был найден элемент,
// а не сам элемент. Значение -1 возвращается, если ничего не найдено

let users2 = [
  { id: 1, name: "Вася" },
  { id: 2, name: "Петя" },
  { id: 3, name: "Маша" },
  { id: 4, name: "Вася" },
];

// Найти индекс первого Васи
console.log(users2.findIndex((user) => user.name == "Вася")); // 0

// Найти индекс последнего Васи
console.log(users2.findLastIndex((user) => user.name == "Вася")); // 3

//? .indexOf()
// arr.indexOf(item, from) ищет item начиная с индекса from и возвращает номер индекса, на котором был найден искомый элемент, в противном случае -1.

//* Разница между методами .push(), .pop(), .shift() и .unshift()?

//? .push()
//arr.push(...items) – добавляет элементы в конец
//!и возвращает новую длину массива

//? .pop()
// arr.pop() – извлекает элемент из конца
//! и возвращает его значение

//? .shift()
//arr.shift() – извлекает элемент из начала
//! и возвращает его значение

//? .unshift()
//arr.unshift(...items) – добавляет элементы в начало
//! и возвращает новую длину массива

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
    // alert("Привет, " + arguments[i]);
  }
}

sayHi4("Винни", "Пятачок"); // 'Привет, Винни', 'Привет, Пятачок'

//* eventTarget, eventCurrentTarget

//* eventTarget - элемент, вызвавший событие (тот, на котором событие происходит)
//* eventCurrentTarget - элемент, на котором висит обработчик события

//* Синхронные и асинхронные функции
//* Синхронные функции являются блокирующими, в то время как асинхронные - нет

//*Почему в JS функции называют объектами первого класса?

//В JavaScript функции являются объектами первого класса, то есть: они являются объектами и с ними можно взаимодействовать и передавать их точно так же как любой другой объект

//* Разница между host-объектами и нативными объектами?

//Нативные объекты — это объекты, которые являются частью языка JavaScript, определенного
//в спецификации ECMAScript, такие как String, Math, RegExp, Object, Function и т.д.

//Хост-объекты предоставляются средой выполнения (браузером или Node), такие как `window`, `XMLHTTPRequest` и т.д.

//*Почему результат сравнения 2х объектов это false?

//Это происходит потому, что в JavaScript два объекта считаются равными только в том случае, если они фактически являются одним и тем же объектом.
//Даже если все свойства объектов и их значения совпадают, это не делает объекты равными.
//Объекты в данном случае будут сравниваться по ссылке на ячейку памяти, которую они занимают, а не по значениям их свойств.

//*Что такое прототипное наследование? Как создать объект без прототипа?

// Например, у нас есть объект user со своими свойствами и методами, и мы хотим создать объекты admin
// и guest как его слегка изменённые варианты. Мы хотели бы повторно использовать то, что есть у объекта user,
// не копировать/переопределять его методы, а просто создать новый объект на его основе.

// Прототипное наследование — это возможность языка, которая помогает в этом.

//В JavaScript объекты имеют специальное скрытое свойство [[Prototype]] (так оно названо в спецификации), которое либо равно null, либо ссылается на другой объект. Этот объект называется «прототип»

let animal = {
  eats: true,
};
let rabbit = {
  jumps: true,
};

rabbit.__proto__ = animal;

// теперь мы можем найти оба свойства в rabbit:
console.log(rabbit.eats); // true (**)

//? Свойство __proto__ — исторически обусловленный геттер/сеттер для [[Prototype]]
//Это распространённая ошибка начинающих разработчиков – не знать разницы между этими двумя понятиями.

//Обратите внимание, что __proto__ — не то же самое, что внутреннее свойство [[Prototype]]. Это геттер/сеттер для [[Prototype]]. Позже мы увидим ситуации, когда это имеет значение, а пока давайте просто будем иметь это в виду, поскольку мы строим наше понимание языка JavaScript.

//! Object.create(null) создает пустой объект без прототипа ( [[Prototype]]is null):

//* Почему расширение нативных JavaScript-объектов это плохая практика?

// JS использует прототипное наследование. А расширение нативного объекта означает добавление свойств/методов к его прототипу.
//Негативные последствия:
// 1. Возможен конфликт свойств, повторная перезапись, сложно отследить все это.
// Единственный вариант расширения это создание полиффилов

//* Что такое NaN? Как определить, что значение равно NaN?

//NaN - специальное значение "не число", которое обычно говорит о том, что была выполнена бессмысленная операция.
//Результатом практически любой операции, в которой участвует NaN , будет NaN.
//NaN интересное значение, хотя оно обозначает "не число" — с точки зрения типов, оно является числом.

//Используйте Number.isNaN() или isNaN(), чтобы наиболее понятным образом определить является ли значение значением NaN.

const nanValue = NaN;
console.log(isNaN(nanValue)); //true
console.log(Number.isNaN(nanValue)); //true

//* Что такое объектная обертка (Wrapper Objects)?

// Примитивы строка, число и boolean имеют свойства и методы, несмотря на то, что они не являются объектами:

let name12 = "marko";

console.log(typeof name12); // string
console.log(name.toUpperCase()); // MARKO

// Name — это строка (примитивный тип), у которого нет свойств и методов, но когда мы вызываем метод toUpperCase(), это приводит не к ошибке, а к «MARKO».

// Причина такого поведения заключается в том, что name временно преобразуется в объект. У каждого примитива, кроме null и undefined,
//есть объект-обертка. Такими объектами являются String, Number, Boolean, Symbol и BigInt. В нашем случае код принимает следующий вид:

console.log(new String(name).toUpperCase()); // MARKO

// Временный объект отбрасывается по завершении работы со свойством или методом.

//* Как в JavaScript создать объект?

//Пустой объект («пустой ящик») можно создать, используя один из двух вариантов синтаксиса:

let user11 = new Object(); // синтаксис "конструктор объекта"
let user12 = {}; // синтаксис "литерал объекта"

//* Для чего используется ключевое слово new?

// Оператор (операторная функция) new создаёт экземпляр объекта, встроенного или определённого пользователем, имеющего конструктор.

// Синтаксис
// new constructor[([arguments])]

function Func() {
  var c = 1;
  this.a = 100;
}

// Выставим значение прототипу функции
Func.prototype.b = 200;

// Создадим объект
var obj12 = new Func();

// Выведем результат
console.log(obj12.a, obj12.b);

// Получим: 100 200

// В приведенном выше примере ключевое слово new создает пустой объект, а затем устанавливает свойство prototype этого
// пустого объекта таким же, какое у функции Func(). Новое свойство b назначается с помощью Func.prototype. В итоге, новый
// объект также будет включать свойство b. Затем он привязывает к себе все свойства функции, объявленные внутри.
// В нашем случае Func() включает только одно свойство a, объявленное через this. Таким образом, новый пустой объект теперь ещё
// будет включать свойство a. Однако Func() также включает переменную c, которая не объявлена через this. А значит и не будет
// включена в новый объект. Наконец, возвращается вновь созданный объект. Также обратите внимание, что Func() не включает
// оператор return, следовательно компилятор неявно вставит в конец return this.

//* Как работает boxing/unboxing в JavaScript?

//И каждый раз когда мы пытаемся получить свойство (или метод) примитивного значения, оно автоматически
// оборачивается в соответствующий объект, так что ('x').toLowerCase() превращается в (new String('x')).toLowerCase().

//! Такое оборачивание называется Boxing — положить в коробочку. После выполнения метода объект-обёртка просто выбрасывается.

//* Что такое мемоизация? Реализуйте базовую логику функции для мемоизации?
//Мемоизация в программировании, от англ. ("memoize" или "memoization") в том числе и в JavaScript, относится к технике
//оптимизации, при которой результат выполнения функции кэшируется, чтобы избежать повторных вычислений для одних и тех же входных данных

function memoize(func) {
  const chache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (chache[key]) {
      console.log("return memoized result");
      return chache[key];
    } else {
      const value = func(...args);
      chache[key] = value;
      return value;
    }
  };
}

const add1 = (a, b) => {
  return a + b;
};

const memoizedAdd = memoize(add1);

console.log(memoizedAdd(1, 2)); //3
console.log(memoizedAdd(1, 2)); //3 return memoized result

//* Разница между оператором in и методом .hasOwnProperty()?

//Оператор «in» проверяет наличие свойства не только в самом объекте, но и в его прототипах, а метод hasOwnProperty — только в объекте.

//* Разница между глубокой (deep) и поверхностной (shallow) копиями объекта? Как сделать каждую из них?

// При копировании переменной объекта копируется ссылка, но сам объект не дублируется.

let user22 = { name: "John" };

let admin = user22; // копируется ссылка

admin.name = "Pete"; // изменено по ссылке из переменной "admin"

console.log(user22.name); // 'Pete', изменения видны по ссылке из переменной "user"

//!shallow copy
const originalObject = { a: 1, b: { c: 2 } };
const shallowCopy = { ...originalObject };

//Клонирование
let clone = {}; // новый пустой объект

// давайте скопируем все свойства user в него
for (let key in user) {
  clone[key] = user[key];
}

//Object.assign()
//Object.assign(dest, [src1, src2, src3...])
// Первый аргумент dest — целевой объект.
// Остальные аргументы src1, ..., srcN (может быть столько, сколько необходимо) являются исходными объектами
// Метод копирует свойства всех исходных объектов src1, ..., srcN в целевой объект dest. Другими словами,
// свойства всех аргументов, начиная со второго, копируются в первый объект.
// Возвращает объект dest.

let user3 = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// копируем все свойства из permissions1 и permissions2 в user3
Object.assign(user3, permissions1, permissions2);

// теперь user3 = { name: "John", canView: true, canEdit: true }

// JSON.parse(JSON.stringify(x))
// Имеет некоторые недостатки, тк может например преобразовать свойства с датой в строку

//* Что такое цепочка вызовов функций (chaining)? Как реализовать такой подход?

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this; //необходимо вернуть this для последующего вызова методов
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    // показывает текущую ступеньку
    console.log(this.step);
    return this;
  },
};

ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0

//class method
class Test {
  constructor() {
    this.total = 0;
  }

  add(value) {
    this.total += value;
    return this;
  }

  sub(value) {
    this.total -= value;
    return this;
  }

  print() {
    console.log(this.total);
    return this;
  }
}

let testObj = new Test();
testObj.print().add(100).print().sub(50).print();

//function method

const Test2 = function () {
  let total = 0;

  function add(value) {
    total += value;
    return this;
  }

  function sub(value) {
    total -= value;
    return this;
  }

  function print() {
    console.log(total);
    return this;
  }
  return { add, sub, print };
};

let testObj2 = new Test2();
testObj2.print().add(200).print().sub(120).print();

//* Как передаются параметры в функцию: по ссылке или по значению?

// В JavaScript примитивы ( string , number , boolean , null , undefined ) передаются по значению.
// Это значит, что функции не могут изменить исходную переменную. В отличие от них, объекты
// (включая массивы , функции и другие не примитивные типы) передаются по ссылке, вернее, по копии ссылки.

//* Что такое прототип объекта в JavaScript?

// Прототипы - это механизм, с помощью которого объекты JavaScript наследуют свойства друг от друга.
// JavaScript часто описывают как язык прототипного наследования — каждый объект, имеет объект-прототип,
// который выступает как шаблон, от которого объект наследует методы и свойства. Объект-прототип так же
// может иметь свой прототип и наследовать его свойства и методы и так далее. Это часто называется цепочкой
// прототипов и объясняет почему одним объектам доступны свойства и методы которые определены в других объектах.

var animal1 = {
  eats: true,
};
var rabbit1 = {
  jumps: true,
};

rabbit1.__proto__ = animal1;
//Объект, на который указывает ссылка __proto__, называется «прототипом». В данном случае получилось, что animal является прототипом для rabbit.
// в rabbit можно найти оба свойства
console.log(rabbit1.jumps); // true
console.log(rabbit1.eats); // true

//Другими словами, прототип – это «резервное хранилище свойств и методов» объекта, автоматически используемое при поиске.

//* Как работает метод Object.create()?

//Еще один способ создания объекта предоставляет функция Object.create, которая принимает два параметра. Первый параметр - прототип,
// на основе которого будет создаваться объект, а второй параметр - определение свойств и методов объекта:
// свойства задаются так - nameOfProperty: { value: 12, }. Свойство должно быть объектом со свойством value, которое будет записано как значение задаваемого свойства.

// const tom = Object.create(прототип, {  свойства и методы });

let animal2 = {
  eats: true,
};

// создаём новый объект с прототипом animal
let rabbit3 = Object.create(animal2, {
  age: {
    value: 12,
  },
});
console.log(rabbit3);
console.log(rabbit3.eats); // true

console.log(Object.getPrototypeOf(rabbit3) === animal2); // получаем прототип объекта rabbit

Object.setPrototypeOf(rabbit3, {}); // заменяем прототип объекта rabbit на {}

//*Разница между Object.freeze() и Object.seal()?
//seal() — "запечатывает" объект, предотвращая любые изменения объекта, кроме изменения значений его свойств;
//Object.freeze() — самый хардкорный метод, который как-бы "замораживает" объект, предотвращая любые его изменения.

//Object.seal(obj)
// Запрещает добавлять/удалять свойства. Устанавливает configurable: false для всех существующих свойств.
// Object.freeze(obj)
// Запрещает добавлять/удалять/изменять свойства. Устанавливает configurable: false, writable: false для всех существующих свойств.

//* Плюсы и минусы использования use strict?

//? Преимущества

// Не позволяет случайно создавать глобальные переменные.
// Любое присваивание, которое в обычном режиме завершается неудачей, в строгом режиме выдаст исключение.
// При попытке удалить неудаляемые свойства выдаст исключение (в то время как в нестрогом режиме никакого действия бы не произошло).
// Требует, чтобы имена параметров функции были уникальными.
// this в глобальной области видимости равно undefined.
// Перехватывает распространённые ошибки, выдавая исключения.
// Исключает неочевидные особенности языка.

//! Недостатки

// Нельзя использовать некоторые особенности языка, к котороым привыкли некоторые разработчики.
// Нет доступа к function.caller и function.arguments.
// Объединение скриптов, написанных в строгом режиме, может вызвать проблемы.

//* Плюсы и минусы иммутабельности? Как достичь иммутабельности в JS?

// Однако есть несколько причин, почему мутирование объектов может быть нежелательным:

// Несогласованность данных. Если объекты изменяются в разных частях программы, то могут возникнуть проблемы с несогласованностью данных.
// Например, если в одной части программы мы удалили свойство объекта, а в другой части программы ожидаем, что это свойство существует,
// то это может привести к ошибкам.

// Неявные побочные эффекты. Мутирование объектов может привести к неявным побочным эффектам, которые могут быть сложными для отслеживания.
// Например, если мы передаем объект в функцию, которая изменяет его свойства, то это может повлиять на другие части программы, которые используют
// этот же объект.

// Сложность отладки. Мутирование объектов может сделать программу сложной для отладки, особенно если объект изменяется в разных частях программы.
// Это может привести к тому, что ошибки будут трудно обнаруживать и исправлять.

// Чтобы избежать этих проблем, многие разработчики придерживаются практики иммутабельности (immutability), то есть создания объектов,
// которые не могут быть изменены позже. Иммутабельность может сделать программу более предсказуемой и простой для понимания и отладки.

const numbers1 = Object.freeze([1, 2, 3]);
const newNumbers = [...numbers1, 4]; // создаем новый массив, добавляя элемент
console.log(numbers); // [1, 2, 3]
console.log(newNumbers); // [1, 2, 3, 4]

const updatedObject = { ...originalObject, age: 26 };

//* Типы всплывающих окон в JavaScript?

// Для работы с пользователем в JavaScript предусмотрено несколько интерактивных функций:

//? функция alert() позволяет выводить информацию во всплывающем окне;

//alert("Просто вывод информации");

//? функция confirm () позволяет спрашивать соглашение во всплывающем окне;

let result2 = confirm("Вы согласны с confirm?");
// Если ок, то result будет true
// Если отмена, то result будет false

//? функция prompt() получает данные от пользователя во всплывающем окне.

let info = prompt("Сколько вам лет?", 25);
// Второй параметр это значение по-умолчанию
// Его можно и не добавлять

//* Парадигмы программирования в JavaScript?

//? Императивный стиль - То есть наша императивная функция — это набор конкретных команд, которые выполняются последовательно одна за другой.

function onlyOdd(array) {
  const result = [];

  for (const element of array) {
    if (element % 2 !== 0) {
      result.push(element);
    }
  }

  return result;
}

//? Декларативный стиль - Декларативный подход читается в среднем легче, хотя на написание в обоих стилях времени может уходить одинаковое количество

function onlyOdd2(array) {
  return array.filter((element) => element % 2 !== 0);
}

//* Типы ошибок в JavaScript?

// EvalError: представляет ошибку, которая генерируется при выполнении глобальной функции eval()

// RangeError: ошибка генерируется, если параметр или переменная, представляют число, которое находится вне некотоого допустимого диапазона

// ReferenceError: ошибка генерируется при обращении к несуществующей ссылке

// SyntaxError: представляет ошибку синтаксиса

// TypeError: ошибка генерируется, если значение переменной или параметра представляют некорректный тип или пр попытке изменить значение, которое нельзя изменять

// URIError: ошибка генерируется при передаче функциям encodeURI() и decodeURI() некорректных значений

// AggregateError: предоставляет ошибку, которая объединяет несколько возникших ошибок

//* Разница между typeof и instanceof?

// ? typeof определяет примитивный тип данных переменной, например, 'number' или 'string'
//Оператор typeof обычно используется для определения примитивных типов данных: 'number', 'string', 'boolean', 'undefined',
//'object', 'symbol' (начиная с ECMAScript 2015), а также 'function'
let myVar = 1;
if (typeof myVar !== "undefined") {
  // myVar абсолютно безопасна
}
typeof null === "object";

//? instanceof проверяет свойство наследования, уточняет, создан ли объект с использованием конкретного прототипа или класса.

function MyCustomType(name) {
  this.name = name;
}
const myVar1 = new MyCustomType("MyVar1");
console.log(myVar1 instanceof MyCustomType); // true

let nonExistent = null;
console.log(nonExistent instanceof Object); // false — нет, не объект

//* JavaScript статически, или динамически типизированный язык?

//JavaScript является языком с динамической типизацией, что означает, что переменные могут принимать значения разных типов во время выполнения.

//* Что такое регулярное выражение (Regular Expression)?

// Регулярные выражения – мощное средство поиска и замены в строке.

//* Что такое рекурсия?
// Рекурсия – это термин в программировании, означающий вызов функцией самой себя. Рекурсивные функции могут быть использованы для элегантного решения определённых задач.

// Когда функция вызывает саму себя, это называется шагом рекурсии. База рекурсии – это такие аргументы функции,
// которые делают задачу настолько простой, что решение не требует дальнейших вложенных вызовов.

//? рекурсивно вычислить сумму до числа n (1 + 2 + ... + n)
function sumTo(n) {
  if (n <= 1) return n;
  return n + sumTo(n - 1);
}

console.log(sumTo(100)); //5050

//? вычислить факториал числа
//Факториал натурального числа – это число, умноженное на "себя минус один", затем на "себя минус два", и так далее до 1. Факториал n обозначается как n!
function factorial(n) {
  if (n === 1) return n;
  return n * factorial(n - 1);
}

console.log(factorial(5));

//? числа Фибоначчи
//Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21....

function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(3));

//?

let list1 = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function printList(list) {
  if (list.next === null) {
    console.log(list.value);
    return;
  }
  console.log(list.value);
  printList(list.next);
}

console.log(printList(list1));

//* Что такое прототип (Prototype) объекта?

//Свойство __proto__ объекта Object.prototype является свойством доступа (комбинацией геттера и сеттера),
//которое расширяет внутренний прототип [[Prototype]] объекта (являющийся объектом или null), через который осуществлялся доступ.

//Другими словами, прототип – это «резервное хранилище свойств и методов» объекта, автоматически используемое при поиске.

//* Какие методы используются в регулярных выражениях?

//?regexp.exec(str)

//Метод regexp.exec(str) ищет совпадение с regexp в строке str. В отличие от предыдущих методов, вызывается на регулярном выражении, а не на строке.
//Он ведёт себя по-разному в зависимости от того, имеет ли регулярное выражение флаг g.
// Если нет g, то regexp.exec(str) возвращает первое совпадение в точности как str.match(regexp). Такое поведение не даёт нам ничего нового.

//Но если есть g, то:
// Вызов regexp.exec(str) возвращает первое совпадение и запоминает позицию после него в свойстве regexp.lastIndex.

let str3 = "Больше о JavaScript на https://javascript.info";
let regexp = /javascript/gi;

let result1;

while ((result1 = regexp.exec(str3))) {
  console.log(`Найдено ${result1[0]} на позиции ${result1.index}`);
  // Найдено JavaScript на позиции 9, затем
  // Найдено javascript на позиции 31
}

//? regexp.test(str)

//Метод regexp.test(str) ищет совпадение и возвращает true/false, в зависимости от того, находит ли он его.

let str4 = "Я люблю JavaScript";

// эти два теста делают одно и то же
console.log(/люблю/i.test(str4)); // true
console.log(str4.search(/люблю/i) != -1); // true

//* Что такое полифил (polyfill)?

//Новые возможности языка могут включать встроенные функции и синтаксические конструкции.
// Транспилер переписывает код, преобразовывая новые синтаксические конструкции в старые. Но что касается новых встроенных функций,
// нам нужно их как-то реализовать. JavaScript является высокодинамичным языком, скрипты могут добавлять/изменять любые функции,
// чтобы они вели себя в соответствии с современным стандартом.
//? Термин «полифил» означает, что скрипт «заполняет» пробелы и добавляет современные функции.

//* Что такое switch/case? Правила использования switch/case?

//Конструкция switch заменяет собой сразу несколько if.
//Конструкция switch имеет один или более блок case и необязательный блок default.

let num = 2 + 2;

switch (num) {
  case 3:
    alert("Маловато");
    break;
  case 4:
    alert("В точку!");
    break;
  case 5:
    alert("Перебор");
    break;
  default:
    alert("Нет таких значений");
}

//! Если break нет, то выполнение пойдёт ниже по следующим case, при этом остальные проверки игнорируются.

//* Что такое выражения (expression) и инструкции (statement) в JavaScript?

//? Выражение (англ. expression) — это код, который после выполнения возвращает какое-либо значение. Например, 5 + 3 вернёт 8, а Math.random() — случайное число.

//? В JavaScript все инструкции можно поделить на несколько категорий:

// управление потоком выполнения (if и else, switch, throw и так далее);
// итерации (for, while и так далее);
// объявление значений (var, let, const);
// функции (function, return и так далее);
// прочие (debugger, import, export).

//* Разница между .some() и .every()?

//Метод some() позволяет упростить написание кода в случае, когда мы хотим проверить наличие определённого элемента в массиве.
//В отличие от every(), чтобы результат выражения стал true, достаточно, чтобы хотя бы один элемент удовлетворил условию функции-предиката.
//some() => true, если хоть один элемент вернул true при вызове коллбэка
//some() => true, если все элементы вернули true при вызове коллбэка

const testArr = [1, 2, 3];
console.log(
  "SOME",
  testArr.some((el) => el === 2) //true
);

const testArr2 = ["str1", "str2", "str3"];
console.log(
  "EVERY",
  testArr2.every((el) => typeof el === "string") //true
);
