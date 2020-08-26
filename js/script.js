"use strict";//строгий режим програмування, не пропускає помилки при виведені
//  let  number = 4.6;

//  console.log(4/0);

//  const obj = {
// name: 'John',
// age: 25,
// isMaried: false
//  };
// console.log(obj);

//alert('hello');//спливаюче вікно в браузері на початку роботи
//const result = confirm('are you here?');// таке ж як alert('hello'), але тут можна получити відповідь так або ні, результат який вибере користувач буде збережено в  зінну const result
//console.log(result);
//const answer = prompt('do you have 18 year?', '18');//prompt дає змогу вписати відповідь в спливаюче вікно в нашому випадку  це ск років відповідь яка позамовлуванню буде вписана відповідно до питання , а '18' це чсло яке вписано в рядок введення
//const answer = [];

// answer[0] = prompt('What is your name?', '');
// answer[1] = prompt('what is your surname?', '');
// answer[2] = prompt('How old are you?', '');

//document.write(answer);//answer[0] = prompt('What is your name?', '')-питання в спливаючому вікні, document.write(answer) команда яка дає змогу відповіді на питання в масиві answer[0.2.3] не виводити в консоль  а виводити зразу ж на сторінку екрану

//console.log(typeof(answer))// typeof(answer) команда яка дає змогу визначити тип даних даного рядка
// const category = 'toys';

// console.log(`https://someurl.com/${category}/5`);//за допомогою "``" можемо поставити правильну інтерполяцію, а також знак '$' і '{якась категоія на сайті}', '/5'- означає що в цій категорії 5 елемент буде відображатись, "https://someurl.com/toys/5" - силка яка створилась

// const user = "Vitaliy";

// alert (`hello, ${user}`);

// console.log('arr' + '- object');
// console.log(4 + "5");//(4 + "5") Коли числа без "" тоді вони додаються математично, а якщо вони з "" тоді число простодоплючовується як строка  в нашому випадку console.log(4 + "5") буде дорівнювати "45"


// let incr = 10,
//     decr = 10;

// incr++;//оператор інфкримента, збільшення на 1.
// decr--;//оператор декримента, зменшення на 1

// console.log(incr);
// console.log(decr);  

// console.log(2*4 === 8);

// const isChecked = true,
//       isClose =true;

// console.log(isChecked || isClose);

/////////////////////////////////////
//lesson 12 практичне заняття 1

// const numberOfFilms = +prompt('Скільки фільмів ви бачили?', '');//заитуєм в спливаючому вікні скільки фільмів ви вже бачили, "+" біля prompt це означає що користувач який буде давати відповідь має змогу дати відповідь в чилах, не тільки в словах

// const personalMovieDB = {//стфорюємо зміннну-базуданих
//     count: numberOfFilms,// в цю змінну попадає наша відповідь на питання "скільки фільмів ви бачили?"
//     movies: {},//в цю змінну будемо виводити
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt('Один із останіх переглянутих філмів', ''),
//       b = prompt('Дайте його цінку', ''),
//       c = prompt('Один із останіх переглянутих філмів', ''),
//       d = prompt('Дайте його цінку', '');
      
// personalMovieDB.movies[a] = b;//присвоюєм щоб з [a] питання давало відповідь по відношені до  b; і щоб виводило в .movies в консолі
// personalMovieDB.movies[c] = d;// те саме що вище тільки для [c] = d

// console.log(personalMovieDB);//виводимо
       
/////////////////////////////////////
//lesson 13 умова if and else

// if (4 == 9) {
//     console.log('Ok');
// } else {
//     console.log('Error');
// }

//const num = 50;

// if (num < 49) {
//     console.log('"error');
// } else if (num > 100) {
//     console.log('Много');
// } else {
//     console.log('ok');
//}

// (num === 50) ? console.log('ok'):consoe.log('error');

// const num = 50;

// switch (num) {
//     case 49:
//         console.log('error');
//         break;
//     case 100:
//         console.log('error');
//         break;
//     case 50:
//         console.log('Правильно');
//         break;
//     default:
//         console.log('Іншим разом');
//         break;

// }
///////////////////////////////////////
//lesson 14 цикли

// let num = 50;//створюєо змінну через let а не через const тому що const це є константа і не використовується в циклах 

// while ( num <= 55 ) {// while цикл перший, якщо дослівно перекладати то тоді як, поки, 
//     console.log(num);
//     num++;// оператор який збільшує num = 50 на 1 і так до 54 томущо в нас while ( num < 55 ) 
// }

// do {// другий вид циклу, за допомогою якого ми можемо спочатку заставити цикл щось зроибти а потім аж виконати умову, і якщо необхідно вийти з нього
//     console.log(num);
//     num++;

// }
// while (num < 55);

// for ( let i = 1; i < 8; i++){//це є третій популярний вид циклу, де в середині в циклі створюється змінна"і" let i = 1; скорочено ітератор і яка зараз дорівює 1, після чого ми вказуєм за допомогою команди  i < 8;що у нас буде менше 8 ітерацій тобто 7, і задопомогою команди i++ збільшуємо кожну ітерацію на 1
//     console.log(num);
//     num++;
// }

// for ( let i = 1; i < 10; i++){
//     if (i === 6) {
//        // break;// МИ В ЦИКЛ ДОБАВИЛИ ОПЕАТОР if і використали break для того щоб коли "і" дойде до 6 щоб воно припинило свою роботу(i === 6), а якщо б ми не використали break то в нас би проводилось 9 ітерацій так як ми вказали i < 10 
//         continue;// цей оператор дає змогу не зупинятись на ітерації 5 а йти до 9 так як ми вказали i<10, даний оператор просто пропуска ітерацію 6, і не враховує її
//     }
//     console.log(i);
// }
///////////////////////////////////
// lesson 15 практичне заняття 2

// const numberOfFilms = +prompt('Скільки фільмів ви бачили?', '');//заитуєм в спливаючому вікні скільки фільмів ви вже бачили, "+" біля prompt це означає що користувач який буде давати відповідь має змогу дати відповідь в чилах, не тільки в словах

// const personalMovieDB = {//стфорюємо зміннну-базуданих
//     count: numberOfFilms,// в цю змінну попадає наша відповідь на питання "скільки фільмів ви бачили?"
//     movies: {},//в цю змінну будемо виводити
//     actors: {},
//     genres: [],
//     privat: false
// };

// // const a = prompt('Один із останіх переглянутих філмів', ''),
// //       b = prompt('Дайте його цінку', ''),
// //       c = prompt('Один із останіх переглянутих філмів', ''),
// //       d = prompt('Дайте його цінку', '');
      
// // personalMovieDB.movies[a] = b;//присвоюєм щоб з [a] питання давало відповідь по відношені до  b; і щоб виводило в .movies в консолі
// // personalMovieDB.movies[c] = d;// те саме що вище тільки для [c] = d


// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один із останіх переглянутих філмів', ''),
//           b = prompt('Дайте його цінку', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;//оПератор декрименту, щоб якщо у нас if не виконається щоб цикл повернувся ще раз до початку і користувач був змушений вписати відповідь а не залишати пусту сторінку, пуста сторіна це у нас null
//     }


// }
// if (personalMovieDB.count < 10){
//     console.log('переглянуто дуже мало фільмів');
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count > 10) {
//     console.log(' ви класний кіноглядач');
// } else if (personalMovieDB.count >= 30) {
//     console.log('ви кіноман');
// } else {
//     console.log('виникла помилка');
// }

// console.log(personalMovieDB);//виводимо
//////////////////////////////////////////////
//lesson 16 функції, стрілочні


///////////////......1....../////////
// function showFirstMessage(text) { //варіант 1 як можна вивести Hello world
//     console.log('Hello world');
// }

// showFirstMessage();


//////////////......2....////////////
// function showFirstMessage(text) { // варіант 2 як можна вивести Hello world
//     console.log(text);
// }

// showFirstMessage('hello world');


// let num = 20;//створення глобальної змінної
    
// function showFirstMessage(text) { 
//          console.log('Hello world');
//          let num = 20;//створення локальної змінної, локальна через те що вона створюється в умові function
//      }
    
//      showFirstMessage('hello world');
//      console.log(num);
    
// // function calc(a, b) {// function declaration 
// //     return (a + b);//return (a + b) функція повернення значення на зовні 
// // }
// // console.log(calc(4, 3));
// // console.log(calc(5, 6));
// // console.log(calc(7, 3));

// function ret() {
//     let num = 50;
//     return num;//повертаємо значення локальної змінної
// }

// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function() {//function expression
//     console.log('Hello');
// };

// logger();

// const calc = (a, b) => { return a + b };//стрілочні функції () => 

///////////////////////////////////////
////lesson 17


// const str = "test";
// // const arr = [1, 2, 4];

// // console.log(arr.length);//length виводить скільки символів є в нашій змінні, це може бути як і масив так і строка

// console.log(str.toUpperCase());//даний метод перетворює строку в верхній регістр(прописні букви)
// console.log(str.toLowerCase());//даний метод перетворює строку в нижній регістр(маленькі букви)
// console.log(str);


// const fruit = "Some fruit";

// console.log(fruit.indexOf("fruit"));//indexOf - метод який позволяє знайти кусочок нашої строки і показати з якго індексу воно починається

// const logg = "hello world";

// console.log(logg.slice(6, 11));// slice(6, 11)метод який дозволяю вирізати елемети з строки logg і в нашому випадку вирізає елементи з 7-10 тому що вкащзано в нас з 6-11 а так  як даний метод не бере до уваги те яке вказано а розуміє що потрібно починати після 6 і до 11 тобто це буде 7-10 включно, даний метод підтримує мінусові чила тобто якщо числа + то нумерація з ліва на право а якщо числа - тоді нумерація з права на ліво

// console.log(logg.substring(6, 11));// substring(6, 11) метод який практично такий ж як і slice(6, 11) тільки відмінність в тому що можна перший(6) аругемент задавати більшим ніж другий(11), але числа тут не можуть починатись з -, тільки додатні числа

// console.log(logg.substr(6, 5));// даний метод відрізняється тим що тут немає початку і кінця за яким метод має оієнтуватись щоб вирізати символи, тут є початок з якого символу очати і через кому є другий аргумент який означає- скільки символів потрібно вирізати

// const num = 12.2;
// console.log(Math.round(num));//метод який округлює не цілі числа 

// const test = "12.2px";
// console.log(parseInt(test));//parseInt(test) метод який переводить число в іншу систему числення наприклад з строки в числовий тип даних
// console.log(parseFloat(test));//parseFloat(test) метод який повертає нам числа не в цілі а так як вни є, в нашому випадку 12.2 а не 12, не круглює їх

/////////////////////////////////////////
///////lesson 18 практичне заняття 3

// let numberOfFilms; 

// function start() {
//     numberOfFilms = +prompt('Скільки фільмів ви бачили?', '');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Скільки фільмів ви бачили?', '');
//     }

// }

// start();//викликаэмо функцію

// const personalMovieDB = {//стфорюємо зміннну-базуданих
//     count: numberOfFilms,// в цю змінну попадає наша відповідь на питання "скільки фільмів ви бачили?"
//     movies: {},//в цю змінну будемо виводити
//     actors: {},
//     genres: [],
//     privat: false
// };




// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один із останіх переглянутих філмів', ''),
//               b = prompt('Дайте його цінку', '');
    
//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;//оПератор декрименту, щоб якщо у нас if не виконається щоб цикл повернувся ще раз до початку і користувач був змушений вписати відповідь а не залишати пусту сторінку, пуста сторіна це у нас null
//         }
    
//     }

// }

// // rememberMyFilms();


// function detectetPersonalLevel()  {
    
//     if (personalMovieDB.count < 10){
//         console.log('переглянуто дуже мало фільмів');
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count > 10) {
//         console.log(' ви класний кіноглядач');
//     } else if (personalMovieDB.count >= 30) {
//         console.log('ви кіноман');
//     } else {
//         console.log('виникла помилка');
//     }

// }

// // detectetPersonalLevel();

// function showMyDB (hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);

//     }



// }
// showMyDB(personalMovieDB.privat);
// // console.log(personalMovieDB);//виводимо

// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++){
//         const genre = prompt(`Ваш улюблений жанр під номером: ${i}`);//!!!щоб працювало ${i} потрібно поставити не " а `  там де Ё !!!!!
//         personalMovieDB.genres[i - 1] = genre;
//     }
// }

// writeYourGenres();



////////////////////////////////////////////
//////lesson 19 Callback - funktions


// do something
function first() {
    setTimeout(function () {
        console.log(1);
    }, 500);// вказуємо затримку в 500 мл.с. тобто що результат(1) видасть з затримкою 
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, Callback) {// створюємо аргументи функції lang, Callback щоб потім до них звернутись
    console.log(`я вчу: ${lang}`);
    Callback();//позволяє зробити так щоб перше вивело ${lang} в нашому випадку виведе я вчу: JavaScript тому що аргумент lang це є JavaScript і ми його нижче позначаємо
}

learnJS('JavaScript', function(){//тут ми викликаємо функцію але і в викликанні функції створюємо функцію щоб вивести Я пройшов цей урок!, це можна зробити іншим способом створишвши функцію перед тим і потім просто викликати її  
    console.log('Я пройшов цей урок!');
});