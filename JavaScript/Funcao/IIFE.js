/* 
FUNÇÃO AUTO INVOCADA --> IIFE --> Immediately Invoked Function Expression
Usada para fugir do escopo global, 
tudo que for manipulado dentro dessa função estará em seu próprio escopo.
*/


(function() {
    console.log('Será executad na hora!')
    console.log('Foge do escopo mais abrangente!')
})()