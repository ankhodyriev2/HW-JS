//- Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//    Вивести кожну змінну за допомогою: console.log

//- Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

//- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//    let a = 100; let b = '100'; let c = true;

//Додаткове для тих хто цікавився prompt`oм
//- За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

//1.1
let h = "hello";
console.log(h);
let o = "owu";
console.log(o);
let m = "com";
console.log(m);
let u = "ua";
console.log(u);
let na = 1;
console.log(na);
let nb = 10;
console.log(nb);
let nc = -999;
console.log(nc);
let nd = 123;
console.log(nd);
let nf = 3.14;
console.log(nf);
let nh = 2.7;
console.log(nh);
let nj = 16;
console.log(nj);
let xz = true;
console.log(xz);
let yz = false;
console.log(yz);

//1.2

let firstname = "Andriy";
let middleName = "Oleksandrovych";
let lastName = "Khodyriev";
console.log(`${firstname} ${middleName} ${lastName}`);

//1.3
let a = 100;
console.log(typeof a);

let b = 100;
console.log(typeof b);

let c = true;
console.log(typeof c);

//1.4

let signFN = prompt("What's your firstName?");
console.log(signFN);

let signMN = prompt("What's your middleName?");
console.log(signMN);

let age = prompt("How old are you?");
console.log(age);