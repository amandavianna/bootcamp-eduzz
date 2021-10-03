//in - isso aqui está aqui?
something in somethingItems

// Arrays
var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple']
0 in trees        // retorna true
3 in trees        // retorna true
6 in trees        // retorna false
'bay' in trees    // retorna false (você precisa especificar o
                  // número do índice, não o valor naquele índice)
'length' in trees // retorna true (length é uma propridade do Array)

// Objetos predefinidos
'PI' in Math          // retorna true

var color1 = new String('green')
'length' in color1 // retorna true

var color2 = 'coral'
// gera um erro (color2 não é um objeto String)
'length' in color2

// Objetos personalizados
var mycar = {make: 'Honda', model: 'Accord', year: 1998}
'make' in mycar  // retorna true
'model' in mycar // retorna true

//instanceof
//Verifica se o objeto é uma instãncia de alguma cois
objeto instanceof construtor

var myDate = new Date()
myDate instanceof Date     // returns true
