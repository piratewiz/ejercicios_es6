/* Crea una función llamada swap que reciba un array y dos parametros que sean 
indices del array. La función deberá intercambiar la posición de los valores de 
los indices que hayamos enviado como parametro. Retorna el array resultante. */

const fantasticFour = [
  'La antorcha humana',
  'Mr. Fantástico',
  'La mujer invisible',
  'La cosa'
]

const swap = (array, index1, index2) => {
  ;[array[index1], array[index2]] = [array[index2], array[index1]]
  return array
}

const cambioDeArray = swap(fantasticFour, 1, 3)
console.log(cambioDeArray)
