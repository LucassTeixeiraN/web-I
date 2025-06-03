const BtnBuscar = document.querySelector("#btnBuscar")
const bairro = document.querySelector("#bairro")
const estado = document.querySelector("#estado")
const uf = document.querySelector("#uf")
const localidade = document.querySelector("#localidade")
const logradouro = document.querySelector("#logradouro")

BtnBuscar.addEventListener("click", () => {
    let inpCep = document.querySelector("#inpCEP").value
    consomeApi(inpCep)
})


const consomeApi = async (cep) => {
    try {

        let resultado = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        
        bairro.innerHTML = resultado.data.bairro
        estado.innerHTML = resultado.data.estado
        uf.innerHTML = resultado.data.uf
        localidade.innerHTML = resultado.data.localidade
        logradouro.innerHTML = resultado.data.logradouro
        document.querySelector("#erro").innerHTML = ""
        
    }
    catch(error) {
        document.querySelector("#erro").innerHTML = "CEP inválido"
        console.log(error);
        
    }

    
    
};