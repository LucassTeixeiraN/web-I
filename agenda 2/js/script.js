const addBtn = document.getElementById("adicionar-btn")
const editBtn = document.getElementById("editar-btn")
const deleteBtn = document.getElementById("delete-btn")
const tarefaContainer = document.getElementById("tarefa-container")


tarefas = []

addBtn.addEventListener("click", function() {
    
    criarTarefa()
    limparTarefas()
    getTarefas()
    carregarTarefas()
    
})

deleteBtn.addEventListener("click", function() {
    
    deletarTarefa()
    getTarefas()
    carregarTarefas()
    
})

editBtn.addEventListener("click", function() {
    
    editarTarefa()
    limparTarefas()
    getTarefas()
    carregarTarefas()
    
})


let editarTarefa = function() {
    
    let id = window.prompt("Insira o id da tarefa (começa no 0)")
    let titulo = window.prompt("Insira o título da tarefa")
    let local = window.prompt("Insira a tarefa")
    let data = window.prompt("Insira a data de conclusão da tarefa")

    let novaTarefa = {
        titulo: titulo,
        local: local,
        data: data,
        id: id
    }

    sessionStorage.setItem("tarefa"+id, JSON.stringify(novaTarefa))
}

let deletarTarefa = function() {
    
    let id = window.prompt("Insira o id da tarefa (começa no 0)")

    sessionStorage.removeItem("tarefa"+id)
}

let criarTarefa = function() {
    let titulo = window.prompt("Insira o título da tarefa")
    let local = window.prompt("Insira a tarefa")
    let data = window.prompt("Insira a data de conclusão da tarefa")

    let novaTarefa = {
        titulo: titulo,
        local: local,
        data: data,
        id: sessionStorage.length
    }

    sessionStorage["tarefa" + (sessionStorage.length)] = JSON.stringify(novaTarefa)
}

const criarContainerTarefa = (id) => {
    let div = document.createElement("div")
    div.classList.add("tarefa")
    div.id = id
    tarefaContainer.appendChild(div)
    return div
}

const criarTitulo = (div, titulo) => {
    let h1 = document.createElement("h1")
    h1.innerHTML = titulo
    div.appendChild(h1)
}

const criarLocal = (div, local) => {
    let h2 = document.createElement("h2")
    h2.innerHTML = local
    div.appendChild(h2)
}

const criarData = (div, data) => {
    let h3 = document.createElement("h3")
    h3.innerHTML = data
    div.appendChild(h3)
}

const carregarTarefas = () => {
    tarefas.map((tarefa) => {
        let div = criarContainerTarefa(tarefa.id)
        criarTitulo(div, tarefa.titulo)
        criarLocal(div, tarefa.local)
        criarData(div, tarefa.data)
    })
}

let limparTarefas = function() {
    while(tarefaContainer.firstChild) {
        tarefaContainer.removeChild(tarefaContainer.firstChild)
    }
}


const getTarefas = () => {
    tarefas = []
    for(var i = 0; i < sessionStorage.length; i++) {
        tarefas.push(JSON.parse(sessionStorage.getItem("tarefa"+i)))
    }
}

const a = () => {
    
}


getTarefas()
carregarTarefas()
