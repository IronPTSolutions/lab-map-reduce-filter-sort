
/**
 * Suma todos los números de un array
 * @param [1, 2, 3, 4] numbers
 * @returns [2, 4]
 */
function sum(numbers) {
  return numbers.reduce((acc, n) => acc + n, 0)
}


/**
 * Dado un array de estudiantes, devuelve el mejor
 * @param [
    { name: 'Futanito', grade: 6 },
    { name: 'Menganito', grade: 5 },
    { name: 'Juanito', grade: 9 }
 * ] students
 * @returns [{ name: 'Juanito', grade: 9 }]
 */
function bestStudent(students) {
  return students.reduce((best, student) => !best || student.grade > best.grade ? student : best, undefined)
}


/**
 * Dado un array de palabras, devuelve un diccionario con el número de apariciones.
 * @param [
    "dog", "cat", "dog", "cat", "fish", "man", "woman", "woman"
 * ] users
 * @param "JS" skill
 * @returns {
    dog: 2,
    cat: 2,
    fish: 1,
    man: 1,
    woman: 2,
  }
 */
function countWords(words) {
   return words.reduce((dict, word) => {
      if (!dict[word]) {
         dict[word] = 0;
      }
      dict[word]++
      return dict;
   }, {});
}

/**
 * Suma los precios de todos los productos en el array.
 * @param {Array<{name: string, price: number}>} products - Lista de productos con su precio.
 * @returns {number} Total de precios sumados.
 * @example
 * // Input:
 * // [{name: "Apple", price: 2}, {name: "Bread", price: 1}, {name: "Milk", price: 3}]
 * // Output:
 * // 6
 */
function getTotalPrice(products) {

}

/**
 * Cuenta cuántos productos hay por categoría.
 * @param {Array<{name: string, category: string}>} products - Lista de productos con categoría.
 * @returns {Object} Objeto con el conteo por categoría.
 * @example
 * // Input:
 * // [{name: "Apple", category: "Fruit"}, {name: "Banana", category: "Fruit"}, {name: "Lettuce", category: "Vegetable"}]
 * // Output:
 * // { Fruit: 2, Vegetable: 1 }
 */
function countByCategory(products) {
   
}

/**
 * Concatena los nombres en una sola cadena separada por comas.
 * @param {Array<{name: string}>} users - Lista de usuarios.
 * @returns {string} Cadena con todos los nombres.
 * @example
 * // Input:
 * // [{name: "Anna"}, {name: "Carlos"}, {name: "Bea"}]
 * // Output:
 * // "Anna, Carlos, Bea"
 */
function joinNames(users) {

}

module.exports = {
  sum,
  bestStudent,
  countWords,
  getTotalPrice,
  countByCategory,
  joinNames,
}