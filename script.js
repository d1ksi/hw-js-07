// const number = (9 / 5);
// const f = x => x * number + 32; //f- наша температура в цельсиях, на выходе получаем в фарингейтах


// function rgbToHex(r, g, b) {
//    // если число меньше 15, то добавляем ноль, с помощью `0${(r, g, b).toString(16)}`
//    const rHex = r > 15 ? r.toString(16) : `0${r.toString(16)}`;
//    const gHex = g > 15 ? g.toString(16) : `0${g.toString(16)}`;
//    const bHex = b > 15 ? b.toString(16) : `0${b.toString(16)}`;
//    return `#${rHex}${gHex}${bHex}`;
//    // в rgbToHex мы вводим 3 значения от 0 до 255
// }


// let apartment = 12; //apartment вводим кужную квартиру
// let floors = 9;
// let porches = 3;
// let apartmentsPerFloor = 4;

// let flats = findApartment(apartment, floors, porches, apartmentsPerFloor);
// alert(`Квартира с номером ${apartment} находится в подъезде № ${flats.entrance} на ${flats.floor} этаже`);


// function credentials() {
//    const name = prompt("Введіть ім'я:");
//    const surname = prompt("Введіть прізвище:");
//    const fatherName = prompt("Введіть по-батькові:");
//    const capitalizedFullName = [name, surname, fatherName]
//       .map(word => word.trim().toLowerCase())
//       .map(word => capitalize(word))
//       .join(" ");
//    const fullName = `${capitalizedFullName}`;
//    return { name, surname, fatherName, fullName };
// }
// function capitalize(word) {
//    return word.charAt(0).toUpperCase() + word.slice(1);
// }
// const userCredentials = credentials();
// console.log(userCredentials);


// function multiLineString(inputString) {
//    let result = inputString.split("\\n").join("\n");
//    return result;
// }
// let inputString = "Це рядок з \n використанням \\n як маркера нового рядка.";
// let result = multiLineString(inputString);
// console.log(result);


// const getTextOrDefault = (promptText, defaultValue = "") => prompt(promptText, defaultValue) || defaultValue;
// let input = getTextOrDefault("Введіть текст", "за замовчуванням");
// alert("Ваш ввід: " + input);


// function validateLoginAndPassword(correctLogin, correctPassword) {
//    const enteredLogin = prompt("Enter your login:");
//    if (!enteredLogin) { // якщо користувач відмовився вводити логін
//       return false;
//    }
//    const enteredPassword = prompt("Enter your password:");
//    if (!enteredPassword) { // якщо користувач відмовився вводити пароль
//       return false;
//    }
//    if (enteredLogin === correctLogin && enteredPassword === correctPassword) {
//       return true; // логін і пароль вірні
//    } else {
//       return false; // логін або пароль невірні
//    }
// }
// const correctLogin = "admin";
// const correctPassword = "qwerty";
// if (validateLoginAndPassword(correctLogin, correctPassword)) {
//    alert("Welcome!");
// } else {
//    alert("Invalid login or password.");
// }


// function arrayToTable(arr) {
//    let table = "<table>";
//    for (let row of arr) {
//       table += "<tr>";
//       for (let col of row) {
//          table += `<td>${col}</td>`;
//       }
//       table += "</tr>";
//    }
//    table += "</table>";
//    return table;
// }


// function filterWords(str, forbiddenWords) {
//    return str.split(' ')
//       .filter(word => !forbiddenWords.includes(word))
//       .join(' ');
// }
// const inputStr = 'Це рядок з деякими некоректними словами, такими як бляха, муха, пляшка і шабля';
// const forbiddenWords = ['бляха', 'муха', 'пляшка', 'шабля'];
// const filteredStr = filterWords(inputStr, forbiddenWords);
// console.log(filteredStr); // "Це рядок з деякими некоректними словами, такими як і"


// async function displayCurrencyTable() {
//    const currencyCodes = ["USD", "EUR", "UAH", "PLN"];
//    const ratesTable = [];
//    for (let i = 0; i < currencyCodes.length; i++) {
//       const row = [];
//       for (let j = 0; j < currencyCodes.length; j++) {
//          const rate = await getRealRate(currencyCodes[i], currencyCodes[j]);
//          row.push(rate);
//       }
//       ratesTable.push(row);
//    }
//    displayTable(ratesTable);
// }


// function createFormFromObject(obj) {
//    const form = document.createElement('form');
//    for (let key in obj) {
//       const label = document.createElement('label');
//       label.textContent = `${key}: `;
//       const input = document.createElement('input');
//       input.name = key;
//       switch (typeof obj[key]) {
//          case 'number':
//             input.type = 'number';
//             input.value = obj[key];
//             break;
//          case 'string':
//             input.type = 'text';
//             input.value = obj[key];
//             break;
//          case 'boolean':
//             input.type = 'checkbox';
//             input.checked = obj[key];
//             break;
//          default:
//             input.type = 'text';
//             input.value = obj[key];
//       }
//       label.appendChild(input);
//       form.appendChild(label);
//    }
//    return form;
// }
// const car = {
//    "Name": "chevrolet chevelle malibu",
//    "Cylinders": 8,
//    "Displacement": 307,
//    "Horsepower": 130,
//    "Weight_in_lbs": 3504,
//    "Origin": "USA",
//    "in_production": false
// }
// const form = createFormFromObject(car);
// document.body.appendChild(form);


// function sortArrayByProperty(arr, prop, ascending = true) {
//    arr.sort((a, b) => {
//       let valueA = a[prop];
//       let valueB = b[prop];
//       if (typeof valueA === 'string' && typeof valueB === 'string') {
//          valueA = valueA.toLowerCase();
//          valueB = valueB.toLowerCase();
//       }
//       if (valueA < valueB) {
//          return ascending ? -1 : 1;
//       } else if (valueA > valueB) {
//          return ascending ? 1 : -1;
//       } else {
//          return 0;
//       }
//    });
//    return arr;
// }
// var persons = [
//    { name: "Іван", age: 17 },
//    { name: "Марія", age: 35 },
//    { name: "Олексій", age: 73 },
//    { name: "Яків", age: 12 },
// ];
// sortArrayByProperty(persons, "age"); // сортує за віком за зростанням
// console.log(persons);
// sortArrayByProperty(persons, "name", false); // сортує на ім'я за спаданням
// console.log(persons);


// function displayTableWithSorting(dataArray, sortField, sortOrder) {
//    // Копіюємо масив, щоб не змінювати оригінал
//    const sortedArray = [...dataArray];
//    // Сортуємо масив за заданим полем та порядком сортування
//    sortedArray.sort((a, b) => {
//       if (sortOrder === "asc") {
//          return a[sortField] - b[sortField];
//       } else {
//          return b[sortField] - a[sortField];
//       }
//    });
//    // Створюємо HTML таблицю з відсортованими даними
//    const table = document.createElement("table");
//    const headers = Object.keys(sortedArray[0]);
//    // Додаємо заголовки таблиці
//    const headerRow = document.createElement("tr");
//    headers.forEach(headerText => {
//       const header = document.createElement("th");
//       const textNode = document.createTextNode(headerText);
//       header.appendChild(textNode);
//       headerRow.appendChild(header);
//    });
//    table.appendChild(headerRow);
//    // Додаємо дані в таблицю
//    sortedArray.forEach(rowData => {
//       const row = document.createElement("tr");
//       headers.forEach(headerText => {
//          const cell = document.createElement("td");
//          const textNode = document.createTextNode(rowData[headerText]);
//          cell.appendChild(textNode);
//          row.appendChild(cell);
//       });
//       table.appendChild(row);
//    });
//    // Додаємо таблицю до HTML документу
//    document.body.appendChild(table);
// }
// const dataArray = [
//    { name: "Іван", age: 17 },
//    { name: "Марія", age: 35 },
//    { name: "Олексій", age: 73 },
//    { name: "Яків", age: 12 },
// ];
// displayTableWithSorting(dataArray, "age", "asc"); // Сортування за віком за зростанням
// displayTableWithSorting(dataArray, "name", "desc"); // Сортування за іменем за спаданням


// const calcResult = () => {
//    const first = Number(firstNumber.value);
//    const second = Number(secondNumber.value);
//    const result = first / second;
//    divisionResult.innerHTML = `Результат ділення: ${result}`;
// }
// firstNumber.oninput = secondNumber.oninput = calcResult;


// function calculate(num1, num2, operator) {
//    let result = {};
//    switch (operator) {
//       case '+':
//          result.addition = num1 + num2;
//          break;
//       case '-':
//          result.subtraction = num1 - num2;
//          break;
//       case '*':
//          result.multiplication = num1 * num2;
//          break;
//       case '/':
//          result.division = num1 / num2;
//          break;
//       default:
//          result.error = 'Invalid operator';
//    }
//    return result;
// }


const calcResult = () => {
   const num1 = document.getElementById("num1").value;
   const num2 = document.getElementById("num2").value;
   const operator = document.getElementById("operator").value;
   const result = document.getElementById("result");
   const calc = new Calculator();
   result.innerHTML = calc.calculate(num1, num2, operator);
}