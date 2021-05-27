
function criarAluno(nome, n1, n2){

    return {
        nome: nome,
        nota1: n1,
        nota2: n2,
        media: function () {
            return(this.nota1 + this.nota2) / 2;
        }
    }
}

var turma = [
    criarAluno("Igor", 9, 6),
    criarAluno("Joao", 7, 8),
    criarAluno("Maria", 5, 3),
]

var aluno = turma[0];

turma.forEach(function(elemento){

    console.log(elemento);
    
})
