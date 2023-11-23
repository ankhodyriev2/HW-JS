//Масиви та об'єкти:
//- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
//- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

//Логічні розгалуження:
 //   - Є змінна х, якій ви надаєте довільне числове значення.
 //   Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
//(в першу, другу, третю или четверту частину години).
//- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
 //   - Користувач вводить або має два числа.
 //       Потрібно знайти та вивести максимальне число з тих двох .
 //       Також потрібно врахувати коли введені рівні числа.
//
 //   - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
  //      за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

  //  - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

// 1.1
let arr = [1,2,3,4,5,'qwerty',true,false,6,7];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

//1.2
let book = {
    title: 'title',
    pageCount: 100,
    genre: 'Mystic',
}
console.log(book);

//1.3
let book2 = {
    title: 'title',
    pageCount: 100,
    genre: 'Mystic',
    author: ['name','age']
}
console.log(book2);

//1.4
let user = [
//name, username, password
    {name: 'Iryna', username: 'airyna', password: 'i123'},
    {name: 'Maryna', username: 'mmaryna', password: 'm123'},
    {name: 'Katya', username: 'kkatya', password: 'k123'},
    {name: 'Tanya', username: 'ttanya', password: 't123'},
    {name: 'Sveta', username: 'ssveta', password: 's123'},
    {name: 'Vanya', username: 'vvanya', password: 'v123'},
    {name: 'Vasya', username: 'vvvasya', password: 'v123'},
    {name: 'Anton', username: 'aanton', password: 'a123'},
    {name: 'Sanya', username: 'ssanya', password: 'ss123'},
    {name: 'Roman', username: 'rroman', password: 'r123'},
]

console.log(user[0].password);
console.log(user[1].password);
console.log(user[2].password);
console.log(user[3].password);
console.log(user[4].password);
console.log(user[5].password);
console.log(user[6].password);
console.log(user[7].password);
console.log(user[8].password);
console.log(user[9].password);

//2.1

let X = prompt('введіть число X') // перевірити 1, 0, -3

if ( X !== 0) {
     console.log('Вірно');
}
else {
   console.log('Невірно');
}


//2.2

let time = prompt('введіть time для годинника');//time 0..59

if (time <= 15) {console.log('Перша чверть')}
else if (time > 15 && time <= 30 ) {console.log('Друга чверть')}
    else if (time > 30 && time <= 45) {console.log('Третя чверть')}
        else if (time > 45) {console.log('Четверта чверть')}

//2.3 У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє

let day = prompt( 'введіть day для місяця');//day 1..31

if (day >= 1 && day <= 10) {console.log('Перша декада')}
else if (day > 10 && day <= 20) {console.log('Друга декада')}
else if (day > 20 && day <= 30) {console.log('Третя декада')}

//2.4
//Розклад на тиждень

let calendar = prompt('Розклад на тиждень: введіть день тижня');
    switch (calendar){
        case 'Monday':
            console.log('Тренування о 8 ранку');
            break;
        case 'Tuesday':
            console.log('Офіс з 9-18 години');
            break;
        case 'Wednesday':
            console.log('Офіс з 14-18 години');
            break;
        case 'Thursday':
            console.log('Офіс з 9-14 години');
            break;
        case 'Friday':
            console.log('Тренування о 8 вечора');
            break;
        case 'Saturday':
            console.log('Тренування о 8 ранку і вечора');
            break;
        case 'Sunday':
            console.log('Вихідний');
            break;
    }

//2.5
    //Користувач вводить або має два числа.
    //       Потрібно знайти та вивести максимальне число з тих двох .
    //       Також потрібно врахувати коли введені рівні числа.

let xy = prompt('Введіть перше число для порівняння y');
    let xz = prompt('Введіть друге число для порівняння z');

if (xy>xz) {
    console.log(xy);
}
else if (xy<xz) {
    console.log(xz);
}
else if (xy === xz) {
    console.log('Числа рівні')
}

//2.6

const x = {title: '' };

x.title ||= 'default';
console.log(x.title);
// Expected output: "default"

//2.7 arrays.js

let courses = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js'],
        logo: '',
        price: 0,
        rating: 5,
        avgResult: 99
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced'],
        logo: '',
        price: 0,
        rating: 4.998,
        avgResult: 97
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'python core',
            'python advanced'],
        logo: '',
        price: 0,
        rating: 4.812,
        avgResult: 98
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'QA/QC'],
        logo: '',
        price: 0,
        rating: 4.65,
        avgResult: 97
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java'],
        logo: '',
        price: 0,
        rating: 4.772,
        avgResult: 100
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass'],
        logo: '',
        price: 0,
        rating: 4.53,
        avgResult: 90
    }
];
if (courses[0].monthDuration > 5) {
    console.log('Супер')
}
if (courses[1].monthDuration > 5) {
    console.log('Супер')
}
if (courses[2].monthDuration > 5) {
    console.log('Супер')
}
if (courses[3].monthDuration > 5) {
    console.log('Супер')
}
if (courses[4].monthDuration > 5) {
    console.log('Супер')
}
if (courses[5].monthDuration > 5) {
    console.log('Супер')
}