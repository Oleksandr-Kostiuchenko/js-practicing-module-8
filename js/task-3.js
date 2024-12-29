//! ========================================== Деструктуризація ==========================================

//TODO: 1. Отримай значення властивостей об'єкта через деструктуризацію. 
//? Використовуй перейменування змінних і значення за замовчуванням.
// const product = { name: 'Laptop', price: 1500 };
// console.log(product);

// const {name: productName, price, rating = 8.8} = product;

// console.log(`Product name: ${productName}`);
// console.log(`Price: ${price}$`);
// console.log(`Rating: ${rating}/10`);


//TODO: 2. Деструктуризація в циклах та функціях
//? Виведи значення властивостей кожного об'єкта в консоль через деструктуризацію.
// const users = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 35 },
// ];

// const printUsersInfo = (usersArr) => {
//     usersArr.forEach(el => {
//         const {name, age} = el;
//         console.log(`User: ${name}. Age: ${age}y.o.`);
//     });
// };

// printUsersInfo(users);

//TODO: 3. Деструктуризація масивів
//? Отримай значення масиву через деструктуризацію. Додай значення за замовчуванням.
// const colors = ['red', 'green'];
// const[color1, color2, color3 = 'blue'] = colors;

// console.log(color1);
// console.log(color2);
// console.log(color3);
// console.log(`${color1[0].toUpperCase()}${color2[0].toUpperCase()}${color3[0].toUpperCase()}`);


//TODO: 4. Пропуск значень
//? Отримай перше та четверте значення масиву через деструктуризацію.
// const numbers = [1, 2, 3, 4, 5];

// const[firstNum, , , fourthNum,] = numbers;

// console.log(firstNum);
// console.log(fourthNum);

//TODO: 5. Напиши функцію, яка приймає об'єкт продукту та повертає рядок з інформацією про продукт у форматі:
//? Product [назва] costs [ціна] and we have [запас] in stock
//? Значення category, rating, owner мають запакуватись в інший масив
// const phone = {
//     name: 'Samsung S24',
//     price: 1000,
//     stock: 50,

//     category: 'Phones',
//     rating: 9,
//     owner: 'Rozetka',
//     comments: {
//         Vasya: 'Good Phone!',
//         Petya: 'Using samsung already 2 years! I like it!',
//         Ivan: 'Very good quality!'
//     }
// }
// console.log(phone);

// const productInfo = productObj => {
//     const{name, price, stock, ...otherProp} = productObj;
//     console.log(`Product ${name} costs ${price}$ and we have ${stock} in stock`);

//     productProp(otherProp);
// }

// const productProp = propArr =>{
//     const {category, rating, owner, comments: {Vasya, Petya, Ivan}} = propArr;

//     console.log('Some other info:');
//     console.log('Category:', category);
//     console.log(`Rating: ${rating}/10`);
//     console.log('Owner:', owner);
//     console.log('Comments:');
//     console.log(Vasya);
//     console.log(Petya);
//     console.log(Ivan);
// }

// productInfo(phone);