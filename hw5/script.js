// Задан массив users с первоначальными данными.
// Напишите 3 функции, которые будут менять этот массив: 
// 1) Функция addUser(name, salary). Функция должна добавить нового пользователя как последний элемент в массив users. 
//    Функция должна автоматически подобрать значение id (реализовать аналог автоинкремента)
// 2) Функция removeUser(id). Функция должна по передаваемому в качестве аргумента ID реализовать удаление пользователя в массиве users
// 3) Функция changeUser(id, name, salary). Функция должна по id найти заданный элемент и 
//    переопределить значение name и salary на значение, указанные в аргументе в момент вызова

// Примечание: 
// 1) Все функции должны менять исходный массив users
// 2) Необходимо реализовать обработку случая, если в функции передать неизвестный id (реализовать процесс на ваше усмотрение). 
//    Будет достаточно реализовать сообщение об ошибке в консоли.
// 3) В приложенном результате продемонстрировать вызовы всех функции на произвольных примерах.


let users = [
  { id: 1, name: "Steven", salary: "5000" },
  { id: 2, name: "Neena", salary: "10000" },
  { id: 3, name: "John", salary: "4500" },
];

// 1.

function addUser(name, salary) {
  const newUser = {
    id: users[users.length - 1].id + 1,
    name: name,
    salary: salary,
  };
  users.push(newUser);
}

addUser("Anna", "70000");
console.log(users);

// 2.

function removeUser(id) {
  const index = users.findIndex((user) => user.id === id);
  if (index) {
    users.splice(index, 1);
  } else {
    console.log("Ошибка: Пользователя с таким ID не существует.");
  }
}

removeUser(3);
console.log(users);

// 3.

function changeUser(id, name, salary) {
  const index = users.find((user) => user.id === id);
  const changedUser = {
    id: id,
    name: name,
    salary: salary,
  };
  if (index) {
    users.splice(index, 1, changedUser);
  } else {
    console.log("Ошибка: Пользователя с таким ID не существует.");
  }
}

changeUser(1, "Olga", "5100");
console.log(users);
      


      

      


      

    