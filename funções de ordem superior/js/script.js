const addBtn = document.getElementById("adicionar-btn")
const tarefaContainer = document.getElementById("tarefa-container")
let ids = 0

let tarefas = []

addBtn.addEventListener("click", function() {

    criarTarefa()
    limparTarefas()
    InserirTarefa()
})


let criarTarefa = function() {
    let titulo = window.prompt("Insira o título da tarefa")
    let tarefa = window.prompt("Insira a tarefa")
    let data = window.prompt("Insira a data de conclusão da tarefa")

    tarefas.push({
        titulo: titulo,
        tarefa: tarefa,
        data: data,
        id: ids
    })
}

let limparTarefas = function() {
    while(tarefaContainer.firstChild) {
        tarefaContainer.removeChild(tarefaContainer.firstChild)
    }
}


let InserirTarefa = () => tarefas.map((tarefa) => {


    let novaTarefa = document.createElement("div")
    novaTarefa.id = `tarefa-${ids}`

    let tituloTarefa = document.createElement("h1")
    let tituloTarefaTexto = document.createTextNode(tarefa.titulo)
    tituloTarefa.appendChild(tituloTarefaTexto)
    
    let conteudoTarefa = document.createElement("p")
    let conteudoTarefaTexto = document.createTextNode(tarefa.tarefa)
    conteudoTarefa.appendChild(conteudoTarefaTexto)
    
    let dataTarefa = document.createElement("p")
    let dataTarefaTexto = document.createTextNode(tarefa.data)
    dataTarefa.appendChild(dataTarefaTexto)

    let botaoExcluir = document.createElement("button")
    let botaoExcluirTexto = document.createTextNode("X")
    botaoExcluir.appendChild(botaoExcluirTexto)
    botaoExcluir.id = `${ids}`

    let botaoEditar = document.createElement("button")
    let botaoEditarTexto = document.createTextNode("editar")
    botaoEditar.appendChild(botaoEditarTexto)
    botaoEditar.id = `edit-${ids}`
    

    botaoEditar.addEventListener("click", function(el, ids) {
        let idx = el.target.id.split("-")[1];

        let titulo = window.prompt("Insira o título da tarefa")
        let tarefa = window.prompt("Insira a tarefa")
        let data = window.prompt("Insira a data de conclusão da tarefa")

        tarefas[idx] = {
            titulo: titulo,
            tarefa: tarefa,
            data: data,
            id: ids
        }
        InserirTarefa()
    })

    botaoExcluir.addEventListener("click", function(el) {
        btnId = el.target.id
        
        let i = 0
        while(i < tarefas.length) {
            console.log(tarefas[i]);
            if (tarefas[i].id == btnId) {
                tarefas.splice(i, 1)
                break
            }
            i++
        }
        
        console.log(tarefas);
        document.getElementById(`tarefa-${btnId}`).remove()
        
    })


    novaTarefa.appendChild(tituloTarefa)
    novaTarefa.appendChild(conteudoTarefa)
    novaTarefa.appendChild(dataTarefa)
    novaTarefa.appendChild(botaoExcluir)
    novaTarefa.appendChild(botaoEditar)

    tarefaContainer.appendChild(novaTarefa)

    ids++
})
