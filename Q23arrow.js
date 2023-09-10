var endereco = {
    rua: "Av do CPA",
    numero: 1293,
    bairro: "Jardim Cuiabá",
    cidade: "Cuiabá",
    uf: "MT"
}

let funcao = (obj) => window.alert(`O usuário mora em ${obj.cidade} / ${obj.uf}, no bairro ${obj.bairro}, na ${obj.rua}, n° ${obj.numero}`);