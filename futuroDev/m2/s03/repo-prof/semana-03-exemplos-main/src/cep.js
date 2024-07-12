function buscarInformacoesCep(cep) {
    return fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((response) => response.json())
        .then((dados) => {
            if (dados.erro === true) return null
            return dados
        })
        .catch(() => {
            console.log("Houve um erro ao retornar o cep")
            return null
        })
}

async function buscarInformacoesCepAuxiliar(cep) {
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const dados = await response.json()
        if (dados.erro === true) return null
        return dados
    } catch (error) {
        return null
    }
}

module.exports = buscarInformacoesCep