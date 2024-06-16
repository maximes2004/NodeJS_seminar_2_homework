// index.js

// Функция для переворачивания строки
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Функция для изменения регистра строки на верхний
function toUpperCase(str) {
  return str.toUpperCase();
}

// Экспортируем функции для использования в других проектах
module.exports = {
  reverseString,
  toUpperCase,
};
