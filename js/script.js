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


// // do something
// function first() {
//     setTimeout(function () {
//         console.log(1);
//     }, 500);// вказуємо затримку в 500 мл.с. тобто що результат(1) видасть з затримкою 
// }

// function second() {
//     console.log(2);
// }

// first();
// second();

// function learnJS(lang, Callback) {// створюємо аргументи функції lang, Callback щоб потім до них звернутись
//     console.log(`я вчу: ${lang}`);
//     Callback();//позволяє зробити так щоб перше вивело ${lang} в нашому випадку виведе я вчу: JavaScript тому що аргумент lang це є JavaScript і ми його нижче позначаємо
// }

// learnJS('JavaScript', function(){//тут ми викликаємо функцію але і в викликанні функції створюємо функцію щоб вивести Я пройшов цей урок!, це можна зробити іншим способом створишвши функцію перед тим і потім просто викликати її  
//     console.log('Я пройшов цей урок!');
// });


////////////////////////////////////////////
///////////lesson 20


// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border:'black',
//         bg:'red'
//     },
//     makeTest: function(){//створили метод який покищо нычого не робить
//         console.log('test');
//     }
// };

// options.makeTest();

// const { border, bg} = options.colors;//деструкторизація
// console.log(border);

// //console.log(Object.keys(options).length);//object.keys())-ключі нашого обєктf, цей метод бере наш обєкт і на його основі створює масив в якому всі елементи це ключі, які знаходяться на першій частині пари ключів значиння в обєктів, .length рахує і ивводить в числі скільки обєктів нам вивів Object.keys в нашому випадку це 4, тому що в options є 4 обєкти

// // // console.log(options.name);// виводимо з "ключа" - 'name' "значення" - 'test'

// // // delete options.name;//  видаляємо з консолы значення test щоб воно не виводлось

// // // console.log(options);.// перевыряэмо чи видалилосьзначення test
// // let counter = 0;//лічильник який рахуватиме скільки в options є обєктів
// // for (let key in options) {//(let key in options) створюємо змінну key і за допопмогою команди in кажемо що будемо перебирати значенн в options
// //     if (typeof(options[key]) === 'object'){//перевіряємо тип даних в options[key] і він повинен строго дорівнювати object
// //         for (let i in options[key]){//створюємо змінну "і" і перебираємо обєкти в ключі options[key] 
// //             console.log(`Свойство ${i}, имеет значение ${options[key][i]}`);
// //             counter++;//лічильник який рахуватиме скільки в options є обєктів
// //         }
// //     }else {
// //         console.log(`Свойство ${key}, имеет значение ${options[key]}`);
// //         counter++;//лічильник який рахуватиме скільки в options є обєктів
// //     } 
// // }
// // //дані матіпуляції проводились через те що при виведені в консоль якщо в нас в обєкті є обєкт то він праивльно виводитись не буде, і нам потрібно було преребрати не тільки обєкт а й обєкт в обєкті
// // console.log(counter);

///////////////////////////////////////
/////////lesson 21 масиви, псевдомасиви

// const arr = [1, 2, 3, 6, 8];



//arr.pop();//.pop()метод який видяляє останній елемент з масиву
//arr.push(10);//.push(10)метод який добавляє в кінець масиву елемент який ми вказали в (10). 
//console.log(arr);

// for (let i = 0; i < arr.length; i++) {// -----!!! №1 спосіб !!!---в нас є цикл і на початку в нас і=0 це означає що на початку індекс наш =0, то ми звернемось до першого елемента (arr[i]), потім наш індекс збільшиться на 1 (і++) і ми звернемось до другого елементу (arr[i]), ітак перебор йде по всіх елементах масиву і виведить їх в консоль 
//     console.log(arr[i]);
// }

// for (let value of arr) {//-------!!! спосбі №2 !!------ конструкця перебору for...of.. і вона працює так само як і спосіб №1, ось тільки це йде конструкція перебору а в способі №1 був цикл перебору, але така конструкція працює з масивоподобними даними, не з обєктами!!!
//     console.log(value);
// }

// arr.forEach(function(item, i, arr) {//----!!! Спосіб №3 !!!--- ще один метод перебору масиву який похожий до перших двох але якого можна більш детально налаштувати, item - назва першого аргументу і це той елемент який ми зараз перебираємо тобто це 1, 2, 3, ... і так далі, i- це другий аргумент, це номер попорядку, тобто індекс, arr- це третій аргумент тобто силка до масиву який ми перебираємо
//     console.log(`${i}: ${item} в середині масиву ${arr}`);
// });

// const str = prompt("", "");
// const products = str.split(",");// метод .split(" ") дає змогу розділити всі слова з строки і добивити їх в масив, тобто коли ми пишемо кавун ожина клубніка, метод .split("") розріззняє що псля кожного слова йде пробіл і коне слово ставить в масив, працює тоді коли ми слова записуємо через ", " 
// products.sort();// сортує елементи масиву по алфавіті, в такому вигляді працює тільки з словами! працює тоді коли ми слова записуємо через ", "
// console.log(products.join("; "));//.join("; ")- метод кий переводить з масиву в строку, працює тоді коли ми слова записуємо через ", "


// const arr = [10, 2, 13, 6, 18];
// arr.sort(compareNum);//метод сортування масиву та функція колбеку для того щоб сортування було не по строковому методі а по цілих числах
// console.log(arr);

// function compareNum(a, b) {
//     return a - b;
// }

//////////////////////////////////////////

/////////lesson22

// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a:5,
//     b:1
// };//передачча даних по силці

// // const copy = obj;

// // copy.a = 10;

// // console.log(copy);
// // console.log(obj);

// function copy(mainObj) {//функція займається тим що за допопмогою циклу створить новий обєкт  перебираючи старі  властивості стараго обєкту, в сиредину вона приймає один аргумент copy(mainObj)
//     let objCopy = {};//створення копії(новго обєкту)

//     let key;//змінну кей можна створювати і в сиредині перебираючої функції
//     for (key in mainObj){//в нас є ключі в сиредині обєкту mainObj який передає функцію і в сиредину поміщаємо копіювання наших властивостей 
//         objCopy[key] = mainObj[key];//беремо коли він пустий, в сиредині створюємо нову властивість через [key], ця властивість буде мати всобі такеж значення яке в головному обєкі mainObj і потім ми просто робимо копію з нашого головного обєкту = mainObj[key], попростоу ми пройдемось по всьому старому нашому обєкті, скопіюємо всі властивості які там  є і помістимо це все в нашу нову копію objCopy[key] яка на початку була пустим обєктом 

//     }
//     return objCopy;// і щоб кось працювати з нашим новим обєктом ми за допомогою  return objCopy на зовні щоб потім з нею взаємодіяти
// }

// const numbers = {//створюємо обєкти і до них числа
//     a:2,
//     b:5,
//     c: {
//         x:7,
//         y:4
//     }
// };

// const newNumbers = copy(numbers);//створюємо змінну яка буде приймати ті ж самі значення що і copy(numbers) п простому клонуємо copy(numbers)

// newNumbers.a = 10;//міняємо в обєкті .а значення 7 на 10, внутрішняп копія яка накиається на обєкти
// newNumbers.c.x = 10;//міняємо обєкт в обєкті .с.х на 10, оверхнева копія яка накидається на обєкти в обєкті, і працює не правильно, тому що програма зараз не розрізняє і не бачить що це обєкт в обєкті а бачить в обєкті силку і міняє його як і в базовому обєкті newNumbers  так і початковгому обєкті numbers

// console.log(newNumbers);//виводимо обєкт в якому заміняи .а
// console.log(numbers);//виводимо базовий обєкт без змін


// const add = {
//     d:17,
//     e:20
// };

// //console.log(Object.assign(numbers, add));// метод .assign(numbers, add) добавляє до попереднього обєкту новий обєкт, тобто обєднює два обєкти разом

// const clone = (Object.assign({}, add));// тут теж використовуємо цей метод але щоб йго використовувати нам потрібно два обєкти і щоб обєднати їх ми використовуємо {} і  add таким чином програма розрізняє {} як наивй обєкт

// clone.d = 20;

// // console.log(add);
// // console.log(clone);

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();//за  допомогою методу .slice()копіюємо старий масив в новий, а = ми тільки  присвоюємо значення старого масиву новому і відповідно якщо ми будемо змінювати старий масив буде змінюватись і новий 

// newArray[1] = 'chage element №2';//змінюємо значення другого елементу в новому масиві 
// console.log(newArray);
// console.log(oldArray);


// const video = ['YouTube', 'vimeo', 'rutube'],
//       blogs = ['wordpress', 'livejournal', 'blogger'],
//       internet = [...video, ...blogs, 'vk', 'facebook'];//оператор "..." перед масивом даних ...video допопмагає витягнути всі дані і вписати в інший масив, тобто розібрати масив в нашому випадку ми витягуємо дані з масивів video, blogs і закидаєо в масив internet

// console.log(internet);

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);//ще один приклад як можна передавати і ровертати обєкт з даними, в цьому випадку ми в функцію log розвертаємо значення з num


// const array = ['a', 'b'];
// const newnewArray = [...array];

// console.log(newnewArray);//4 спосіб як можна використати спретоператор"..." щоб розвернути дані з одного маису в інший

// const q = {
//     one: 1,
//     two: 2

// };

// const newObj = {...q};//5спосіб як можна розвертати дані з обєктів і масивів

// console.log(newObj);

//////////////////////////////////
///////////

//////////////lesson 23 ООП


// const soldier =  {
//     health: 400,
//     armour: 100

// };

// const john = Object.create(soldier);
 
// // const john ={
// //     health: 100,

// // };

// // john.__proto__ = soldier;// метод 1(старий) за допомогою методу john.__proto__ = soldier ми зазначаємо що джон буде мати властивості такіж як і в його прототипу в солдата(soldier),
// // //видає помилку через те що зараз таке не використовується в джс

// object.setPrototypoOf(john, soldier);//метод 2(новий) виконує теж саме що і .__proto__ = soldier; але метод 2 новий 
//і його використовують, це вважається правильне написання 

// console.log(john.armour);

/////////////////////////



/////lesson24 practic №4

// /* Задание на урок:

// 1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
// перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
// Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

// 2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
// переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

// 3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
// Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
// при помощи метода forEach вывести в консоль сообщения в таком виде:
// "Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/





// //1) всі фонкції перемістили в метод

// const personalMovieDB = {//стфорюємо зміннну-базуданих
//     count: 0,
//     movies: {},//в цю змінну будемо виводити
//     actors: {},
//     genres: [],
//     privat: false,
//     start: function() {
//        personalMovieDB.count = +prompt('Скільки фільмів ви бачили?', '');
    
//         while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
//             personalMovieDB.count = +prompt('Скільки фільмів ви бачили?', '');
//         }
//     },
//     rememberMyFilms: function() {
//         for (let i = 0; i < 2; i++) {
//             const a = prompt('Один із останіх переглянутих філмів', ''),
//                   b = prompt('Дайте його цінку', '');
        
//             if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//                 personalMovieDB.movies[a] = b;
//                 console.log('done');
//             } else {
//                 console.log('error');
//                 i--;//оПератор декрименту, щоб якщо у нас if 
//                 //не виконається щоб цикл повернувся ще раз до початку і користувач 
//                 //був змушений вписати відповідь а не залишати пусту сторінку, пуста сторіна це у нас null
//             }
        
//         }
    
//     },
//     detectetPersonalLevel: function()  {
    
//         if (personalMovieDB.count < 10){
//             console.log('переглянуто дуже мало фільмів');
//         } else if (personalMovieDB.count >= 10 && personalMovieDB.count > 10) {
//             console.log(' ви класний кіноглядач');
//         } else if (personalMovieDB.count >= 30) {
//             console.log('ви кіноман');
//         } else {
//             console.log('виникла помилка');
//         }
    
//     },
//     showMyDB: function (hidden) {
//         if (!hidden) {
//             console.log(personalMovieDB);
    
//         }
    
//     },

//     ///завдання 2 де функція переключає приватність БД якщо приватна то відключає це а якщо відкрита то дає їй приватність
//     toogLeVasibleMyBD: function() {
//         if (personalMovieDB.privat) {
//             personalMovieDB.privat = false;
//         } else {
//             personalMovieDB.privat = true;
//         }
//     },

// //3)забороняємо користувачу залишити пусте місціе і якщо таке є повертаємо його назад поки він не дасть віповідь
//  //використовуємо метод forEach і даємо питання корисутвачу по жанрах фільму і це все виводимо 
// writeYourGenres: function() {
//         for (let i = 1; i < 2; i++){

//   //метод 1
//             // let  genre = prompt(`Ваш улюблений жанр під номером: ${i}`);//!!!щоб працювало ${i} потрібно поставити 
//             // //не " а `  там де Ё !!!!!
             
//             // if (genre === ''  || genre == null) {
//             //     console.log('ви ввели некоректні дані або не ввели її взагалі');
//             //     i--;
                
//             // } else { 
//             // personalMovieDB.genres[i - 1] = genre;
//             // }
// // метод 2
//         let  genres = prompt('ведіть Ваш улюблений жанр через кому:');

//             if (genres === ''  || genres == null) {
//                 console.log('ви ввели некоректні дані або не ввели її взагалі').toLowerCase();
//                 i--;
                
//             } else { 
//             personalMovieDB.genres = genres.split(', ');//split() розбиває строку на масив через ,
//             personalMovieDB.genres.sort();
//         }

//         }

//         personalMovieDB.genres.forEach((item, i)=> {// => -це ствоерння функції таке ж як  function() тільки скорочено
//             console.log(`Любимый жанр ${i + 1} - это ${item}`)

//         });
//     }

// };


////////////////////////////////////////////////

// ////////lesson 26  типізація

// // to stricg (перетворюємо що небуть в строку)

// // 1) спосіб 1 і команда String(null/4)за допопмогою якого перетворюємо типип даних нуль і число в строковий тип даних
// console.log(typeof(String(null)));
// console.log(typeof(String(4)));

// //2) конкретинація - це накладання строк або строків з чимось, в нашому випадку нижче це з числом 5 в нас в результаті вийде строка, тому що при наложенні строки на щось виходить строка в кінцевому результаті
// console.log(typeof(5 + ''));

// const num = 5;

// console.log("https://vk.com/catalog/" + num);

// const fontSize = 26 + 'px';


// // to number (перетворюємо що небуть в число)

// // 1)спосіб 1 який дає змогу перетворити з строчногго типу даних в числовий за дпопмогою команди number
// console.log(typeof(number('4')));

// // 2)спосіб 2 який дає змогу зробити теж саме що і спосіб 1 але набагато швидше і правельніше це унарний плюч "+'..'" це плюс який ставиться перед іншим типом даних
// console.log(typeof(+'5'));

// // 3) спосіб 3 пеетворення з строкового в числовий тип даних за допомогою методу parseInt  
// console.log(typeof(parseInt("15px", 10)));


// let answ = +prompt("Hello", "");


// //to boolean (в булінове значення)


// // 0, '', undefined, null,NaN; - це все що в буліновому значенні завжди буде = false

// ///1) спосіб 1
// let switcher = null;//на даному етапі в нас switcher = 0 тобто false, віповідно до цього команда виводу в консоль не буде спрацьовувати тому що в нас там нічого немає 

// if (switcher) {
//     console.log('Working...');
// }
// switcher = 1;//на даному етапі switcher = 1 тому він = true і комманда виводу в консоль буде спрацьовувати так як в нас вже є якісь дані в нашому випадку це 1

// if (switcher) {
//     console.log('Working...');
// }

// ///2)спосіб 2
// console.log(typeof(boolean('4')));//перетворює ичсловий тип даних в буліновий, тобто це може бути true or false

// //2)спосіб 23
// console.log(typeof(!!'44444'));// таке ж як і спосіб 2 тільки замість команди (boolean('4')) ми використовуємо скорочену форму це "!! і строка "..." " 




///////////////////////////////////////////
/////////////////leson 27

// ///let x = 5; alert(x++) яке значення буде виводитись?(5)
// let x = 5; alert(++x);//(x++) це постфікстна форма яка збільшує на 1 після того як повертає попереднє значення тому виводить(5), а якщоб було б записано (++x)(префіксна форма) то б перше збільшувалось на 1 а тоді вже повертало значенння(6)
  
// //////[ ] + false - null + true чому дорівнює даний вираз?(NaN)
// [ ] + false - null + true
// console.log([ ] + false - null + true);//коли ми працюємо з пустим масифо

// ////let y = 1; let x = y = 2; alert(x); що виведе даний код?(2)
// let y = 1; 
// let x = y = 2;  
// alert(x);

// ///// [ ] + 1 + 2; чому дорівнює сума виразу? (12)
// console.log([ ] + 1 + 2);

// ////// alert("1"[0]); що виведе цей код? (1)
// alert("1"[0]); 

// //////////2 && 1 && null && 0 && undefined чому дорівнює вираз? (null)
// console.log(2 && 1 && null && 0 && undefined);

// //////// !!(a && b) , (a && b) чи є різниця між цими двома виразами? (false)
// console.log(!!(1 && 2) === (1 && 2));

// /////// alert(null || 2 && 3 || 4); що виведе цей код? (3)
// alert(null || 2 && 3 || 4);

// //////// a = [1, 2, 3]; b = [1, 2, 3]  провда що a == b? (false)
// const a = [1, 2, 3], 
//       b = [1, 2, 3];

// /////// alert(+"Infinity"); що виведе цей код?(infinity)
// alert(+"Infinity");

// ////"Їжак" > "яблуко" чи правильне зрывнюванння? (false)

// /// 0 || "" || 2 || indefined || true || false який буде результатт?  (2)
// console.log(0 || "" || 2 || indefined || true || false);


/////////////////////////////////////////////////////
//////leson 28 методи селектори класи ІД

// const box = document.getElementById('box');//за допопмогою getElementById( можемо получити або звертатись до певних елементів по ід які є в індеккс.хтмл

// console.log(box);

// ///дальше підуть методи які прцюють з псевдомасивами..

// const btns = document.getElementsByTagName('button');//getElementsByTagName('button'); за допомогою цієї команди можна получити колекцію тегів які є на сторінці, щоб звернутись до лиш одного тегу можна вписати двома способами getElementsByTagName('button')[1];- нам виведе конпку під номером 2(тому що номерація починається з 0.1.2...)
// console.log(btns);//.log(btns[1]) це другий спосіб як можна звернутись до певного тегу,до кнопки під номером 2

// const circles = document.getElementsByClassName('circle');//метод який працює зкласами, не ставиться крапка тому що сам метод вже створений для роботи з класами
// console.log(circles);

// const hearts = document.querySelectorAll('.heart');//метод querySelectorAll позволяє нам получити всі елементи зі сторінки
// hearts.forEach(item =>{
//     console.log(item);
// });//за допомогою колбек функції вивели кожне сердечко в констоль по окремо

// const oneHeart = document.querySelector('.heart');//метод querySelector позволяє нам получити один  елемент зі сторінки який бере селектор тобто клас і бере перший леемент і виводить
// console.log(oneHeart);

//////////////////////////////////

//////////LESONS 29  діі і елементи на сторінці

const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const hearts = document.querySelectorAll('.heart');
const oneHeart = document.querySelector('.heart');

box.style.backgroundColor = 'blue';
box.style.width = '500px';
btns[1].style.borderRadius = '100%';
circles[1].style.backgroundColor = 'red';
