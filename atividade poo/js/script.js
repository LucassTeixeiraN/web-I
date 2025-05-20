
let clientes = []


function addCliente() {
    let nome = window.prompt("Qual o nome do cliente?")
    let endereco = window.prompt("Qual o endereço do cliente?")


    const cliente = new Cliente(nome, endereco)
    return cliente
}

function temCliente() {
    
    if(clientes.length > 0) {
        return true
    } else{
        return false
    }
}

function mostrarClientes() {
    for(cliente of clientes) {
        console.log("Nome: " + cliente.getNome());
        console.log("Endereço: " + cliente.getEndereco());
        console.log("------------------------------");
    }
}

function menu() {

    let i = true
    while(i == true) {
        opcao = window.prompt("Escolha uma opção:\n1.Adicionar clientes\n2.Mostrar Clientes\n3.Criar nova conta\n4.Mostrar contas\n5.Calcular taxa\n6.Sair")
        
        if (opcao == 1) {
            clientes.push(addCliente())
        } else if(opcao == 2) {
            if(temCliente()) {
                mostrarClientes()
            } else {
                console.log("Não há clientes")
            }
            

        } else if(opcao == 3) {
            if(temCliente()) {
                cli = window.prompt("Escolha o cliente:")
                if(cli <= clientes.length) {
                    let tipo = window.prompt("Escolha o tipo de conta:\n1.Poupança\n2.Corrente")
                    let conta

                    let numero = window.prompt("numero da conta")
                    let agencia = window.prompt("agencia da conta")
                    if(tipo == 1) {
                        conta = new Poupanca(numero, agencia)
                    } else {
                        conta = new Corrente(numero, agencia)
                    }

                    clientes[cli-1].adicionarConta(conta)
                    console.log(clientes[cli-1].getConta())
                } else {
                    console.log("nao foi");
                    
                }
            }

        } else if(opcao == 6) {
            i = false
        }
    }
}

menu()