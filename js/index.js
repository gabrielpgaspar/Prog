var tbody = document.querySelector("table>tbody");

var form = {
    nome: document.getElementById("nome"),
    id: document.getElementById("id"),
    quantidade: document.getElementById("quantidade"),
    valor: document.getElementById("valor"),
    data: document.getElementById("data-de-admissao"),
    btnSalvar: document.getElementById("btn-salvar"), 
}


form.btnSalvar.addEventListener('click', () => {

    var produto = {
        nome: form.nome.value,
        id: form.id.value,
        quantidade: form.quantidade.value,
        valor: form.valor.value,
        data: form.data.value,
    
    };


    // Aqui preciso verificar se os campos foram preenchidos.
    if(!produto.nome || !produto.id || !produto.quantidade || !valor || !produto.data){
    // Caso não seja preenchido mandar mensagem para usuário preencher.
        alert("Todos os campos devem ser preenchidos!");
        return;
    }

    tbody.innerHTML = tbody.innerHTML + `<tr>
    <td>${produto.nome}</td>
    <td>${produto.id}</td>
    <td>${produto.quantidade}</td>
    <td>${produto.valor}</td>
    <td>${produto.data}</td>
    <td class="botoes-acao">
        <button id="btn-editar">Editar</button>
        <button id="btn-excluir">Excluir</button>
    </td> 
  </tr>`
    
    // Se precisar enviar os dados para salvar no backend.
    obterProfessoresDaAPI(professores);
    limparCampos();
});

function cadastrarProfessoresNaAPI(professores){
    fetch("http://localhost:3000/cadastro",{
        Headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(professores)
        
     } )
    .then(Response => response.json()) 
    .then(response => {
        obterProfessoresDaAPI();

        limparCampos();
    })
    .catch(erro => console.log(erro))


}
   

function obterProfessoresDaAPI(){
    fetch("http://localhost:3000/cadastro")
    .then(Response => response.json()) // Se funcionar
    .then(response => {
        preencherTabela(response);
    })
    .catch(erro => {
        console.log(erro);
        alert("Deu errado")
})
}

function preencherTabela(professores){

    tbody.textContent = "";

    professores.map(professores => {

        // Estou criando as TDs

        var tr = document.createElement("tr");
        var thNome = document.createElement("td");
        var thEmail = document.createElement("td");
        var thSalario = document.createElement("td");
        var thDataDeAdmissao = document.createElement("td");

        tdNome.textContent = professores.id;
        tdEmail.textContent = professores.id;
        tdSalario.textContent = professores.id;
        tdDataDeAdmissao.textContent = professores.id;

        tr.appendChild(tdNome);
        tr.appendChild(tdEmail);
        tr.appendChild(tdSalario);
        tr.appendChild(tdDataDeAdmissao);

        tbody.appendChild(tr);

    })

   
}

function limparCampos(){
    form.nome.value = "";
    form.email.value = "";
    form.salario.value = "";
    form.data.value = "";
}

obterProfessoresDaAPI();