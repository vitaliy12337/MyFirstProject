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
//lesson 12

const numberOfFilms = +prompt('Скільки фільмів ви бачили?', '');//заитуєм в спливаючому вікні скільки фільмів ви вже бачили, "+" біля prompt це означає що користувач який буде давати відповідь має змогу дати відповідь в чилах, не тільки в словах

const personalMovieDB = {//стфорюємо зміннну-базуданих
    count: numberOfFilms,// в цю змінну попадає наша відповідь на питання "скільки фільмів ви бачили?"
    movies: {},//в цю змінну будемо виводити
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один із останіх переглянутих філмів', ''),
      b = prompt('Дайте його цінку', ''),
      c = prompt('Один із останіх переглянутих філмів', ''),
      d = prompt('Дайте його цінку', '');
      
personalMovieDB.movies[a] = b;//присвоюєм щоб з [a] питання давало відповідь по відношені до  b; і щоб виводило в .movies в консолі
personalMovieDB.movies[c] = d;// те саме що вище тільки для [c] = d

console.log(personalMovieDB);//виводимо
      