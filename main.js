const form = document.getElementById("form-atividade");
const button = document.getElementById("Submit");

const imgAprovado = '<img src="./image/images/aprovado.png" alt="Emoji celebrando" />';
const imgReprovado = '<img src="./image/images/reprovado.png" alt="Emoji decepcionado" />';

const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">reprovado</span>'

const atividades = [];
const notas = [];

const notaMinimas = parseFloat(prompt("Digite a nota minima: "));

let linhas = "";

form.addEventListener("submit", function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
});

function adicionaLinha() {
    const inputNomeAtividade = document.getElementById("Nome-atividade");
    const inputNotaAtividade = document.getElementById("Nota-atividade");

    if (atividades.includes(inputNomeAtividade.value)) {
        alert(`A atividade: ${inputNomeAtividade.value} Já foi inserida`);
    } else {

    }
    atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));

    let linha = "<tr>";
    linha += `<td> ${inputNomeAtividade.value} </td>`;
    linha += `<td> ${inputNotaAtividade.value} </td>`;
    linha += `<td> ${inputNotaAtividade.value >= notaMinimas ? imgAprovado : imgReprovado} </td>`;
    linha += "</tr>";

    linhas += linha;

    inputNomeAtividade.value ="";
    inputNotaAtividade.value =""; 
}

function atualizaTabela() {
    const corpoTabela = document.querySelector("tbody");
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal () {
    const mediafinal = CalculaMediaFinal();
    document.getElementById("Media-Final-Valor").innerHTML = mediafinal.toFixed(2);
    document.getElementById("Media-Final-Resultado").innerHTML = mediafinal >= notaMinimas ? spanAprovado : spanReprovado ;
}

function CalculaMediaFinal() {
    let SomadasNotas= 0;

    for (let i= 0; i < notas.length; i++) (
        SomadasNotas += notas[i]
    )
    
    return SomadasNotas / notas.length;

}