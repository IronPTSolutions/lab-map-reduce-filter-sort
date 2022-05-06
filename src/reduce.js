
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
  }, {})
} 


module.exports = {
  sum,
  bestStudent,
  countWords
}