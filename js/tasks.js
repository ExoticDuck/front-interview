//* isPalindrome

function isPalindrome(word) {
  let reversedWord = word.split("").reverse().join("");
  return word === reversedWord;
}

console.log(isPalindrome("тест"));

//* Ф-ия поиска самого короткого слова в предложении

function findShortest(sentence) {
  const arr = sentence.split(" ");
  if (arr.length === 1) {
    return sentence;
  }
  let shortest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    const word = arr[i];
    if (word.length < shortest.length) {
      shortest = word;
    }
  }
  return shortest;
}

console.log(findShortest("ffff aa ff fff fff"));

//* Ф-ия преобразующая имя и фамилию в инициалы

function toInitials(name) {
  const arr = name.split(" ");
  if (arr.length < 2) {
    return "Введите полное имя и фамилию";
  }
  return `${arr[0][0].toUpperCase()}.${arr[1][0].toUpperCase()}.`;
}

console.log(toInitials("Bill gates"));

//* Ф-ия суммирующая все цифры числа

function sumDigits(number) {
  const res = number
    .toString()
    .split("")
    .map((el) => Number(el))
    .reduce((acc, current) => +acc + +current);
  console.log(res);
}

sumDigits(-199);

//* Ф-ия поиска минимального и максимального числа в массиве

function minMax(array) {
  // let min = array[0];
  // let max = array[0];
  // array.forEach((el) => {
  //   min = el < min ? el : min;
  //   max = el > max ? el : max;
  // });
  let min = Math.min(...array);
  let max = Math.max(...array);
  return [min, max];
}

console.log(minMax([2, 9, 10, 25, 47, 4, 1]));

//* Ф-ия создания набора дубликатов символов строки abcd -> A-Bb-Ccc-Dddd

function accum(a) {
  let arr = a.split("");
  let res = "";
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    res +=
      i > 0
        ? "-" + String(element).toLocaleUpperCase() + String(element).repeat(i)
        : String(element).toLocaleUpperCase();
  }
  return res;
}

console.log(accum("abcd"));
