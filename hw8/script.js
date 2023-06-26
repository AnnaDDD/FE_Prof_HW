// Задание 1.
// В программе объявлены переменные name и phone, которые хранят строки.
// В name указано название заведения, а в phone — его номер телефона. Создайте класс Delivery со свойствами name и phone.
// Помимо описанных свойств, добавьте свойство validPhone, которое проверяет значение свойства phone на вхождение знака + в начале строки.
// Если знак отсутствует, свойство validPhone должно принять булевое значение false, в противном случае — true.
// Создайте экземпляр класса Delivery и в качестве аргументов конструктора укажите значения переменных name и phone.
// Получившийся экземпляр класса запишите в переменную deliveryName.
// Пример значений переменных:
// let name = "Pizza"
// let phone = "81234567890"
// Пример результата: false

class Delivery {
  constructor(name, phone) {
    this.name = name;
    this.phone = phone;
    this.validPhone = this.phone.startsWith("+");
  }
}

let deliveryName = new Delivery("Pizza", "81234567890");
console.log(deliveryName.validPhone);

// Задание 2.
// В программе создан класс Permissions, свойства которого описывают права пользователей на редактирование статей на сайте.
// Создайте новый класс Users, который наследуется от класса Permissions.
// Дополнительно в классе Users добавьте свойство name, значение которого класс принимает в качестве аргумента конструктора.

class Permissions {
  constructor() {
    this.create = false;
    this.read = true;
    this.update = false;
    this.remove = false;
  }
}

class Users extends Permissions {
  constructor(name) {
    super();
    this.name = name;
  }
}

let user = new Users("Anna");
console.log(user.name);
console.log(user.read);
console.log(user.update);
console.log(user.remove);

// Задание 3.
// Создайте класс PrintEditionItem со свойствами: name, releaseDate, pagesCount, state, type.
// Конструктор класса должен принимать название (name), дату выпуска (releaseDate) и количество страниц (pagesCount)
//  в качестве аргумента. Состояние (state) по умолчанию установите равным 100, тип type пока должен быть равен null. .
// Создайте метод fix(), увеличивающий state в полтора раза. Метод не должен принимать аргументов.
// Создайте «сеттер» для свойства state, принимающий в качестве аргумента новое состояние печатного издания (число).
// Если новое состояние меньше 0, «сеттер» должен записать в свойство state значение 0.
// Если новое состояние больше 100, должно быть записано значение 100.
// В остальных случаях в свойство state записывается переданное в «сеттер» значение.
// Создайте «геттер», который читает значение свойства state.

// Создайте класс Magazine, который будет наследоваться от класса PrintEditionItem.
// Конструктор класса должен принимать такие же параметры, как и класс-родитель.
// От базового печатного издания журнал отличается только типом. Значение свойства type равно "magazine".

// Создайте класс Book, наследующийся от класса PrintEditionItem.
// Конструктор класса должен принимать такие же параметры, как и класс-родитель, а также имя автора книги author.
// Значение свойства type равно "book".

// Создайте классы NovelBook для романов, FantasticBook для фантастических произведений и DetectiveBook для детективов,
// наследующиеся от класса Book. Значения свойства type равны "novel", "fantastic" и "detective" соответственно.

class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = 100;
    this.type = null;
  }
  fix() {
    this._state *= 1.5;
  }
  set state(value) {
    if (value < 0) {
      this._state = 0;
    } else if (value > 100) {
      this._state = 100;
    } else {
      this._state = value;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, author) {
    super(name, releaseDate, pagesCount);
    this.type = "book";
    this.author = author;
  }
}

class NovelBook extends Book {
  constructor(name, releaseDate, pagesCount, author) {
    super(name, releaseDate, pagesCount, author);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(name, releaseDate, pagesCount, author) {
    super(name, releaseDate, pagesCount, author);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(name, releaseDate, pagesCount, author) {
    super(name, releaseDate, pagesCount, author);
    this.type = "detective";
  }
}

const magazine = new Magazine("Magazine", "2023-06-26", 50);
console.log(magazine.name);
console.log(magazine.releaseDate);
console.log(magazine.pagesCount);
console.log(magazine.state);
console.log(magazine.type);

const novelBook = new NovelBook("Novel Book","2023-06-26", 200,"Joanne Rowling");
console.log(novelBook.name);
console.log(novelBook.releaseDate);
console.log(novelBook.pagesCount);
console.log(novelBook.state);
console.log(novelBook.type);
console.log(novelBook.author);

novelBook.state = 80;
console.log(novelBook.state);

novelBook.fix();
console.log(novelBook.state);
