// 1. В программе задан массив, передающий строковые элементы. Напишите программу, которая которая ответит на вопрос: присутствует ли в массиве элемент, чей корень длины возвращает целое число? 
// В качестве ответа необходимо вывести булевый тип true, false.
// Пример: ['Велосипед','Торт','Тенис','Ракетка','Город']
// Результат: true

let stringArray = ["Велосипед", "Торт", "Тенис", "Ракетка", "Город"];

function isInteger(arr) {
  for (let i = 0; i < arr.length; i++) {
    let arrayLength = arr[i].length;
    let arrayLengthSqrt = Math.sqrt(arrayLength);
    if (Number.isInteger(arrayLengthSqrt)) {
      return true;
    }
  }
  return false;
}

console.log(isInteger(stringArray));

// Используя метод some()

function isIntegerTrueOrFalse(arr) {
  return arr.some(function (elem) {
    let length = elem.length;
    let sqrt = Math.sqrt(length);
    return Number.isInteger(sqrt);
  });
}
console.log(isIntegerTrueOrFalse(stringArray));

  
// 2. В программе задан массив, передающий числовые элементы. Напишите программу, которая сформирует новый массив из отрицательных чисел заданного массива.
// Пример: [1,2,3,-4,5,-6,7,-8,9,10]
// Результат: [-4,-6,-8]

let array = [1, 2, 3, -4, 5, -6, 7, -8, 9, 10];

function getNegativeNumbers(arr) {
  let newArray = arr.filter((elem) => elem < 0);
  return newArray;
}

console.log(getNegativeNumbers(array));


// 3. В программе задана переменная numbers, которая хранит массив из чисел. Определите, какое максимальное количество элементов массива numbers
// (в порядке, который реализован в массиве) можно сложить, чтобы их итоговая сумма не превышала 50. Результат выведите в консоль.

// Пример значений переменных: 
// let numbers = [10, 20, 33, 55, 100] 
// Пример результата: 2

let numbers = [10, 20, 33, 55, 100];

function maxCount(arr) {
  let sum = 0;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum > 50) {
      break;
    }
    count++;
  }

  return count;
}

console.log(maxCount(numbers));

// 4. В программе задана переменная values, которая хранит массив из строк. Определите математическую сумму всех элементов, которые при преобразовании в число не вернут значение NaN. 
// Результат выведите в консоль. 
// Пример значений переменных:
// let values = ["100", "30", "Не число", "20", "Тоже не число"] 
// Пример результата: 150

let values = ["100", "30", "Не число", "20", "Тоже не число"];

let result = values.reduce((sum, elem) => {
  if (!isNaN(elem)) {
    return sum + +elem;
  } else {
    return sum;
  }
}, 0);

console.log(result);


// 5. В программе заданы два массива array_1 и array_2, элементы которого являются числами. 
// Значения внутри одного массива уникальные. Реализуйте функцию intersection, которая принимает в качестве аргументов два массива и возвращает новый массив. 
// Он должен содержать значения, которые встречаются в обоих массивах-аргументах, и быть отсортирован по убыванию. 

// Пример значений переменных: 
// let array_1 = [1, 4, 7, 8, 2] 
// let array_2 = [1, 5, 11, 6, 2]
// Пример результата: [2, 1]

let array_1 = [1, 4, 7, 8, 2];
let array_2 = [1, 5, 11, 6, 2];

function intersection(arr1, arr2) {
  let newArray = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j] && !newArray.includes(arr1[i])) {
        newArray.push(arr1[i]);
        break;
      }
    }
  }

  return newArray.sort((crElem, nxElem) => nxElem - crElem);
}

console.log(intersection(array_1, array_2));
