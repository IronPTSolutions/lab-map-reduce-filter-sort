

/**
 * Dado un array de números representados como string, transformarlo a un array de enteros.
 * Los elementos no números deben transformarse por -1
 * @param ["1", "2", "3", "a"] numbersAsString
 * @returns [1, 2, 3, -1]
 */
function parseNumbers(numbersAsString) {
  return numbersAsString.map((value) => {
    const number = parseInt(value);
    return Number.isNaN(number) ? -1 : number
  });
}

/**
 * Dado un array de números sumar uno a los pares y restar uno a los impares
 * @param [1, 2, 3, 4] numbers
 * @returns [0, 3, 2, 5]
 */
function sumEvenSubOdd(numbers) {
  return numbers.map(number => number % 2 === 0 ? ++number : --number)
}

/**
 * Dado un array de estudiantes devolver un array de estudiantes añadiendo un atributo 'avg' con la media de sus notas
 * @param
 * [
      {
        name: 'Juanito',
        marks: [
          { subject: 'Maths', grade: 3 },
          { subject: 'History', grade: 3 },
          { subject: 'Literature', grade: 9 },
        ]
      },
      {
        name: 'Menganito',
        marks: [
          { subject: 'Maths', grade: 10 },
          { subject: 'History', grade: 10 },
          { subject: 'Literature', grade: 1 },
        ]
      },
      {
        name: 'Futanito',
        marks: [
          { subject: 'Maths', grade: 8 },
          { subject: 'History', grade: 8 },
          { subject: 'Literature', grade: 8 },
        ]
      }
    ] students 
 * @returns 
    [
      {
          name: 'Juanito',
          marks: [
            { subject: 'Maths', grade: 3 },
            { subject: 'History', grade: 3 },
            { subject: 'Literature', grade: 9 },
          ],
          avg: 5
        },
        {
          name: 'Menganito',
          marks: [
            { subject: 'Maths', grade: 10 },
            { subject: 'History', grade: 10 },
            { subject: 'Literature', grade: 1 },
          ],
           avg: 7
        },
        {
          name: 'Futanito',
          marks: [
            { subject: 'Maths', grade: 8 },
            { subject: 'History', grade: 8 },
            { subject: 'Literature', grade: 8 },
          ],
          avg: 8
        }
    ]
 */
function buildStudentsAvg(students) {
  return students.map(student => {
    student = JSON.parse(JSON.stringify(student))
    student.avg = 0;
    for (let mark of student.marks) {
      student.avg = student.avg + (mark.grade / student.marks.length)
    }
    return student;
  })
}


module.exports = {
  parseNumbers,
  sumEvenSubOdd,
  buildStudentsAvg
}