// Considere a quantidade de alunos presentes na sala, percorra de zero até o número total de alunos e retornar os seguintes resultados:
// -se o número for par, escreva ´par´ e o número correspondente.
// -se o número for ímpar, escreva ´ímpar´ e o número correspondente.
// -se o número for zero, escreva ´zero´ e o número correspondente.


let numeroDeAluno = ["Marcos", "Aline", "Vania", "Andre", "Lucia"];

for (let i = 0; i < numeroDeAluno.length; i++) {

    if (i == 0) {
        console.log(`${i}: ZERO`);
    } else if (i % 2 == 1) {
        console.log(`${i}: IMPAR`);
    } else {
        console.log(`${i}: PAR`);
    }

}