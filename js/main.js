function randomNumber (min, max) {
  if (min < 0 || max < 0) {
    return 'Минимальное и максимальное число должно быть положительным, включая ноль';
  } else if (min > max){
    min = (min * max)/(max = min);
  }
  return Math.floor(min + Math.random() * (max + 1 - min));
}


randomNumber (0, 80);

//1
//Функция, возвращающая случайное целое число из переданного диапазона включительно. Пример использования функции: имя_функции(от, до); // Результат: целое число из диапазона "от...до" Учтите, что диапазон может быть только положительный, включая ноль. А также придумайте, как функция должна вести себя, если передать значение «до» меньшее, //чем значение «от», или равное ему....
// Функция взята из интернета и доработана
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random

//function getRandomPositiveInteger (a, b) {
// Чтобы не заставлять пользователя нашей функции помнить порядок аргументов,
// реализуем поддержку передачи минимального и максимального значения в любом порядке,
// а какое из них большее и меньшее вычислим с помощью Math.min и Math.max.

// После нам нужно убедиться, что пользователь не передал дробные значения,
// для этого на всякий пожарный случай нижнюю границу диапазона
// мы округляем к ближайшему большему целому с помощью Math.ceil,
// а верхнюю границу - к ближайшему меньшему целому с помощью Math.floor
//const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
//const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
// Обратите внимание, чтобы учесть условие, что диапазон может быть [0, ∞),
// мы не ругаем пользователя за переданное отрицательное число,
// а просто берём его по модулю с помощью Math.abs

// Дальше используем Math.random() для получения случайного дробного числа в диапазоне [0, 1),
// которое домножаем на разницу между переданными числами плюс единица - это будет наша случайная дельта.
// После нужно сложить дельту с минимальным значением, чтобы получить итоговое случайное число.
//const result = Math.random() * (upper - lower + 1) + lower;
// "Плюс единица", чтобы включить верхнюю границу диапазона в случайные числа

// И в конце с помощью метода Math.floor мы округляем полученный результат,
// потому что Math.random() генерирует только дробные числа и ноль.
// return Math.floor(result);
//}


function floatRandomNumber (min1, max1, floatnum) {
  if (min1 < 0 || max1 < 0 || floatnum < 0) {
    return 'Минимальное, максимальное число и количество знаков после запятой должны быть положительным, включая ноль';
  } else if (min1 > max1){
    min1 = (min1 * max1)/(max1 = min1);
  }
  return (Math.random() * (max1 - min1) + min1).toFixed(floatnum);
}


floatRandomNumber (-1, -5, 4);

//2
//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно. Будет использоваться для генерации временных географических координат в следующем задании. Пример использования функции: имя_функции(от, до, количество_знаков_после_запятой); // Результат: число с плавающей точкой из диапазона "от...до" с указанным "количеством знаков после запятой" Учтите, что диапазон может быть только положительный, включая ноль. А также придумайте, как функция должна вести себя, если передать значение «до» меньшее, чем значение «от», или равное ему. Не забудьте, что в случае с дробными числами диапазон может быть в десятых, сотых, тысячных и т. д. долях. Например, 1.1, 1.2 — корректный диапазон.
// Функция взята из интернета и доработана
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random

//function getRandomPositiveFloat (a, b, digits = 1) {
// Чтобы не заставлять пользователя нашей функции помнить порядок аргументов,
// реализуем поддержку передачи минимального и максимального значения в любом порядке,
// а какое из них большее и меньшее вычислим с помощью Math.min и Math.max
//const lower = Math.min(Math.abs(a), Math.abs(b));
//const upper = Math.max(Math.abs(a), Math.abs(b));
// Обратите внимание, чтобы учесть условие, что диапазон может быть [0, ∞),
// мы не ругаем пользователя за переданное отрицательное число,
// а просто берём его по модулю с помощью Math.abs

// Дальше используем Math.random() для получения случайного дробного числа в диапазоне [0, 1),
// которое домножаем на разницу между переданными числами - это будет наша случайная дельта.
// После нужно сложить дельту с минимальным значением, чтобы получить итоговое случайное число.
//const result = Math.random() * (upper - lower) + lower;

// И в конце с помощью метода toFixed любого числа в JavaScript
// указать требуемое количество знаков после точки.
// Метод возвращает строку, поэтому с помощью унарного плюса превращаем её в число
//return +result.toFixed(digits);
//}

function stringLength (str1, maxLength) {
  if (str1.length <= maxLength) {
    return true;
  } else {
    return false;
  }
}

stringLength('testtesttesttest',566);
//3
//Функция для проверки максимальной длины строки. Будет использоваться для проверки длины введённого комментария, но должна быть универсальна. Пример использования функции: имя_функции(проверяемая_строка, максимальная_длина); // Результат: true, если строка проходит по длине, и false — если не проходит
//Чтобы ESLint не ругался на неиспользуемые функции, временно вызовите их по одному разу после объявления.
// function checkStringLength (string, length) {
//  return string.length <= length;
//}
const TITLE = ['welcome to our palace', 'welcome to our flat', 'welcome to our house', 'welcome to our bungalow', 'welcome to our hotel'];
const TYPE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECKINANDOUT = ['12:00', '13:00', '14:00'];
const DESCRIPTION = ['such a nice palace', 'such a nice flat', 'such a nice house', 'such a nice bungalow', 'such a nice hotel'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];


const createAutorNumber  = (len) => {
  const arrAutorNumber = [];
  for(let i = 1;  i <= len; i++) {
    if (String(i).length === 1) {
      const num = `0${i}`;
      arrAutorNumber.push(num);
    }  else {
      const num = `${i}`;
      arrAutorNumber.push(num);
    }
  }
  return arrAutorNumber;
};

const NUMAVATAR = createAutorNumber(10);
const RANDOMNUMARRAY =  randomNumber (1, 5);

const createArrStringNoRepeat = ([...source], maxLength) => Array.from(
  { length: Math.min(source.length, 1 + Math.random() * maxLength | 0) },
  () => source.splice(Math.random() * source.length | 0, 1)[0]
);

const createArrString = (source, maxLength) =>
  [...Array(1 + Math.random() * maxLength | 0)].map(() => source[Math.random() * source.length | 0]);


const createAdvert = () => ({
  author: {
    avatar:  `img/avatars/user${NUMAVATAR[randomNumber (0, 9)]}.png`
  },
  offer: {
    title: TITLE[randomNumber (0, 4)],
    address: `${floatRandomNumber (35.65000, 35.70000, 5)},${floatRandomNumber (139.70000, 39.80000, 5)}`,
    price: randomNumber (1, 400000),
    type: TYPE[randomNumber (0, 4)],
    rooms: randomNumber (1, 40),
    guests: randomNumber (1, 100),
    checkin: CHECKINANDOUT[randomNumber (0, 2)],
    checkout: CHECKINANDOUT[randomNumber (0, 2)],
    features: createArrStringNoRepeat(FEATURES, RANDOMNUMARRAY),
    description: DESCRIPTION[randomNumber (0, 4)],
    photos: createArrString(PHOTOS, RANDOMNUMARRAY),
    location: {
      lat: floatRandomNumber (35.65000, 35.70000, 5),
      lng: floatRandomNumber (139.70000, 39.80000, 5)
    }
  }
});


const createContactsArray = (len) => {
  const arrAdvert = [];
  for(let i = 1;  i <= len; i++) {
    arrAdvert.push(createAdvert(len));
  }
  return arrAdvert;
};

const contacts = createContactsArray(10);

console.log(contacts);
/*создания массива из 10 сгенерированных JS-объектов. Каждый объект массива — описание похожего объявления неподалёку.

Структура каждого объекта должна быть следующей:

author, объект — описывает автора. Содержит одно поле:

avatar, строка — адрес изображения вида img/avatars/user{{xx}}.png, где {{xx}} — это число от 1 до 10. Перед однозначными числами ставится 0. Например, 01, 02...10. Адреса изображений не повторяются.
offer, объект — содержит информацию об объявлении. Состоит из полей:

title, строка — заголовок предложения. Придумайте самостоятельно.

address, строка — адрес предложения. Для простоты пусть пока составляется из географических координат по маске {{location.lat}}, {{location.lng}}.

price, число — стоимость. Случайное целое положительное число.

type, строка — одно из пяти фиксированных значений: palace, flat, house, bungalow или hotel.

rooms, число — количество комнат. Случайное целое положительное число.

guests, число — количество гостей, которое можно разместить. Случайное целое положительное число.

checkin, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.

checkout, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.

features, массив строк — массив случайной длины из значений: wifi, dishwasher, parking, washer, elevator, conditioner. Значения не должны повторяться.

description, строка — описание помещения. Придумайте самостоятельно.

photos, массив строк — массив случайной длины из значений: https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg, https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg, https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg.

location, объект — местоположение в виде географических координат. Состоит из двух полей:

lat, число с плавающей точкой — широта, случайное значение от 35.65000 до 35.70000.

lng, число с плавающей точкой — долгота, случайное значение от 139.70000 до 139.80000.*/

