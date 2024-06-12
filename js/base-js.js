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
