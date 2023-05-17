let goods = [
   {id: 1, title: 'Микроволновка', price: 1500, count: 4},
   {id: 2, title: 'Телевизор', price: 2500, count: 1},
   {id: 3, title: 'Тумба', price: 5500, count: 5},
   {id: 4, title: 'Холодильник', price: 200, count: 2},
   {id: 5, title: 'Стол', price: 5600, count: 5},
   {id: 6, title: 'Телефон', price: 1900, count: 12},
   {id: 7, title: 'Компьютер', price: 4200, count: 11},
   {id: 8, title: 'Мангал', price: 250, count: 7},
   {id: 9, title: 'Люстра', price: 300, count: 3},
]

// 1. Отфильтруйте массив таким образом, чтобы там оказались элементы с четным значением ID

let goodsEven = goods.filter((elem) => elem.id % 2 === 0);
console.log(goodsEven);

// 2. Посчитайте сумму всех товаров, учитывая их количество

let goodsPrice = goods.reduce((sum, elem) => sum + elem.price * elem.count, 0);
console.log(goodsPrice);

// 3. Найдите значение элемента массива (продукта), цена которого будет кратна 5

let product = goods.find((elem) => elem.price % 5 === 0);
console.log(product);

// 4. Найдите индекс элемента, count которого будет больше 11

let index = goods.findIndex((elem) => elem.count > 11);
console.log(index);

// 5. Посчитайте количество элементов, count которых является нечетным числом

let elems = goods.filter((elem) => elem.count % 2 !== 0);
let count = elems.length;
console.log(count);

// 6. Посчитайте количество элементов, имя которых начинается на “Т”

let names = goods.filter((elem) => elem.title.startsWith("Т"));
let result = names.length;
console.log(result);

// 7. Создайте новый массив, элементы которого будут хранить значение цен всех товаров с 35-процентной скидкой (только цены)

let newPrices = goods.map((elem) => elem.price * 0.65);
console.log(newPrices);

// 8. Создайте новый массив, изменив только 1 сво-во count на значение 0 для всех элементов (учитывая другие сво-ва)

let newArray = goods.map((item) => ({ ...item, count: 0 }));
console.log(newArray);

// 9. Отфильтруйте массив по сво-ву title

let titles = goods.map((item) => item.title);
console.log(titles);


