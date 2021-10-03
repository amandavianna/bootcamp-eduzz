//AND lógico (&&)
exp1 && exp2

var a1 = true && true // t && t retorna true
var a2 = true && false // t && t retorna false
var a3 = false && true // t && t retorna false
var a4 = false && false // t && t retorna false

var a5 = "Gato" && "Cão" // retorna Cão, que é o últomo valor
var a6 = false && "Gato" // retorna sempre o Booleano se tiver esse tipo

//OR lógico (||)
exp1 || exp2

var o1 = true || true // t || t retorna true
var o2 = true || false // t || t retorna true
var o3 = false || true // t || t retorna true
var o4 = false || false // t || t retorna false

var o5 = "Gato" || "Cão" // retorna Gato, retorna o valor do primeiro se tiver conteúdo
var o6 = false || "Gato" // retorna Gato, retorna o valor da segunda se o primeiro for falso


//NOT lógico (!)
!exp1

var n1 = !true // !t retorna false
var n2 = !false // !t retorna true

var n3 = !"Gato" // retorna false

//True
" "
1
['teste']
!!true

//False
""
0
![]
!!false
