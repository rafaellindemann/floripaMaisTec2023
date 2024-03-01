function login(e){
    e.preventDefault()
    const email = document.getElementById('inpEmail').value
    const password = document.getElementById('inpPassword').value

    const data = [
        {
            id: 1,
            email: 'mano@juca.com.br',
            senha: '1234'
        }
    ]

    const result = data.find(item => item.email === email && item.senha === password)

    if(!result){
        alert("Email e/ou senha incorretos.")
    }else{
        alert("Bem vindo à sua conta")

    }

}