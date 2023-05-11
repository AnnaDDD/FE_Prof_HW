// 1. Напишите функцию checkString(arg), который принимает аргумент строкового типа. Функция должна вывести в консоль первую букву аргумента.
// 	Пример:
// 	checkString(‘Test’)
// 	Результат:  T

function checkString(string){
    console.log(string.charAt(0)); 
}
checkString("Test")


// 2. Напишите функцию checkMiddleValue(num1,num2), которая получает в качестве аргумента два числовых значения. Функция должна вернуть их среднее значение. 
// * Доп задание. доработайте функцию таким образом, чтобы выводимое значение округлялось до десятой части
// Пример:
// 	let result = checkMiddleValue(10,20)
// console.log(result)
// 	Результат:  15
	
function checkMiddleValue(num1, num2) {
  let avg = (num1 + num2) / 2;
  return Math.round(avg * 10) / 10;
}

let result = checkMiddleValue(10, 20);
console.log(result);


// 3. Напишите функцию changeValue(arg1, arg2), которая принимает два аргумента (булевый тип, число). Функция, в зависимости от первого аргумента (булевого типа) должна изменить число по следующему правилу: 
// В случае, если первый аргумент будет true, функция должна вернуть квадрат числа. В противном случае - его корень.
// Пример:
// 	let result = changeValue(false,25)
// console.log(result)
// 	Результат:	5

function changeValue(arg1, arg2) {
  if (arg1) {
    return arg2 * arg2;
  } else {
    return Math.sqrt(arg2);
  }
}
let result2 = changeValue(false, 25);
console.log(result2);


// 4. Напишите функцию countString(arg), которая принимает в качестве аргумента строковый тип и возвращает количество букв. Функция должна игнорировать буквы: а, о, у, с
// * Доп задание. доработайте функцию таким образом, чтобы условие включало верхний и нижний регистр (А а, О о, У у, С с)
// Пример:
// 	let result = countString(“строка”)
// console.log(result)
// 	Результат: 3


function countString(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    let letter = str.charAt(i).toLowerCase();
    if (letter !== "а" && letter !== "о" && letter !== "у" && letter !== "с") {
      count++;
    }
  }
  return count;
}
let result3 = countString("строка");
console.log(result3);


// 5. Напишите функцию createQuence(num), которая получает в качестве аргумента числовое значение. 
// Функция должна построить последовательность строк в консоле, количество которых зависит от аргумента по следующему примеру:
// 	createQuence(5)
// 	Результат:
// 	*
// 	**
// 	***
// 	****
// 	*****
// 	Еще пример:
// createQuence(3)
// 	Результат:
// 	*
// 	**
// 	***


function createQuence(num) {
  let string = "";
  for (let i = 1; i <= num; i++) {
    string += "*".repeat(i) + "\n";
  }
  console.log(string);
}
createQuence(5);
createQuence(3);


// 6. Напишите функцию checkEven(array,callback), которая получает в качестве аргумента массив и колбек-функцию. 
// Функция должна проверить, удовлетворяют ли все элементы массива указанному условию колбека. 
// Если найдется хотя бы 1 элемент, который не будет удовлетворять условию, функция должна вернуть сообщение “Не все элементы удовлетворяют указанному условию”, 
// в противном случае “Все элементы удовлетворяют указанному условию”. Колбек в качестве аргумента должен передавать значение элемента.

// 	Пример вызова функции:
// 	let array = [1,2,3,4,5]
// 	checkEven(array, (elem) => elem > 0 )
// 	Результат:
// 	Все элементы удовлетворяют указанному условию

// 	Еще один пример:
// Пример вызова функции:
// 	let array = [1,2,3,4,5]
// 	checkEven(array, (elem) => elem < 4 )
// 	Результат:
// 	Не все элементы удовлетворяют указанному условию


function checkEven(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i])) {
      return "Не все элементы удовлетворяют указанному условию";
    }
  }
  return "Все элементы удовлетворяют указанному условию";
}

let array = [1, 2, 3, 4, 5];
console.log(checkEven(array, (elem) => elem > 0));
console.log(checkEven(array, (elem) => elem < 4));


// 7. Напишите функцию checkSome(array,callback), которая получает в качестве аргумента массив и колбек-функцию. 
// Функция должна проверить, удовлетворяют ли хотя бы 1 элемент массива указанному условию колбека. 
// Если все элементы не будут удовлетворять условию, функция должна вернуть сообщение “Ни один элемент не удовлетворяют указанному условию”, 
// в противном случае “Минимум 1 элемент удовлетворяет указанному условию”. Колбек в качестве аргумента должен передавать значение элемента.

// 	Пример вызова функции:
// 	let array = [1,2,3,4,5]
// 	checkSome(array, (elem) => elem === 4 )
// 	Результат:
// 	Минимум 1 элемент удовлетворяет указанному условию

// 	Еще один пример:
// Пример вызова функции:
// 	let array = [1,2,3,4,5]
// 	checkSome(array, (elem) => elem === 6 )
// 	Результат:
// 	Ни один элемент не удовлетворяют указанному условию


function checkSome(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return "Минимум 1 элемент удовлетворяет указанному условию";
    }
  }
  return "Ни один элемент не удовлетворяют указанному условию";
}

let array2 = [1, 2, 3, 4, 5];
console.log(checkSome(array2, (elem) => elem === 4));
console.log(checkSome(array2, (elem) => elem === 6));
