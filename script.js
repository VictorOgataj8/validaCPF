function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g,"");
    if(cpf.lenght !== 11 || /^(\d)\1+$/.test(cpf)){
        return false;
    }
    let soma = 0;
    let resto;
    
    for(let i=1; i < 9; i++){
        soma+= parseInt(cpf.substring(i-1,i)) * (11 - i);
    }
    resto = (soma * 10) % 11;
    if(resto ===10 || resto ===11)
    {
        resto=0;                       
    }
    if(resto !== parseInt(cpf.substring(9,10))){
        return false;
    }
    soma = 0;
    for(let i=1; i < 10; i++){
        soma+= parseInt(cpf.substring(i-1,i)) * (12 - i);
    }
    resto = (soma *10 ) % 11;

    if(resto === 10||resto ===11)
    {
        resto = 0
    }
    if(resto !== parseInt(cpf.substring(10,11))){
        return false;
    }
    return true;
}   

document.getElementById("cpf").addEventListener("submit", function(e){
    e.preventDefault();
    const cpfInput = document.getElementById("cpf").value;
    const messageDiv = document.getElementById("message");
    if(validarCPF(cpfInput)){
        messageDiv.textContent = "cpf valido";
        messageDiv.className = "message sucess";
    } else{
        messageDiv.textContent = "cpf invalido";
        messageDiv.className = "message error";
    }
    messageDiv.style.display = "block"
})
