
function enviarWhats(event){
event.preventDefault()

const nome = document.getElementById ('nome').value;
const mensagem = document.getElementById ('mensagem').value;
const telefone = '5527992018686';

const texto = `Olá! Me chamo ${nome}, ${mensagem} `
const msgFormatada = encodeURIComponent(texto)

const url = `https://wa.me/${telefone}?text=${msgFormatada}`

window.open(url, '_blank')
}


console.log("Não adianta ser curioso, não tem nada aqui 👀")