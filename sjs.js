function carregar(){
const msg = document.getElementById('msg') 
const img = document.getElementById('manha')
let data = new Date()
//let hora = data.getHours()
let dia = document.getElementById('dia')
let hora = 9
msg.innerHTML = `Agora são ${hora} horas. `
if (hora >= 0 && hora < 12 ){
dia.innerText = 'BOM DIA!'
img.src = 'imagens/manha11.jpg'
document.body.style.background = '#e2cd9f'
} else if (hora >=12 && hora < 18){
   dia.innerText = 'BOA TARDE!'
    img.src = 'imagens/tarde.jpg'
    document.body.style.background = '#b9846f'
} else {
    dia.innerText = 'BOA NOITE!'
     img.src = 'imagens/noite.jpg'
     document.body.style.background = '#515154'
    }
}


