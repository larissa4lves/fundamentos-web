/*
Case Sensitive = reconhece letras minusculas e maiusuculas 

por Tag: getElementByTagName()
por id: getElementById()
por Nome: getElementsByName()
por Classe: getElementsByClassName()
por Seletor: querySelector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '34%'
email.style.width = '34%'

function validaNome() {

    let txt = document.querySelector('#txtNome')
    if (nome.value.length < 3) { 
       txt.innerHTML= 'Nome Inválido'
       txt.style.color= 'red'
    } else {
        txt.innerHTML = 'Nome Válido'
        txt.style.color = 'green'
        nomeOk = true
    }

}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
    }else {
        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtassunto')

    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'Teste é muito grande, digite no máximo 100 caracteres'
        textAssunto.style.color = 'red'
        textAssunto.style.display = 'block'
    } else {
        txtAssunto.style.display = 'none'
        assuntoOk = true
     }
  }
  
  function enviar() {
     if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert ('Formulário enviado com sucesso!')
     } else {
        alert ('Preencha o formulário corretamente antes de enviar...')
     }
  }
  
  function mapaZoom() {
     mapa.style.width = '800px'
     mapa.style.height = '600px'
  }
  
  function mapaNormal() {
     mapa.style.width = '400px'
     mapa.style.height = '250px'
  }