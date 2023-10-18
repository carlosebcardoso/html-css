var modal = document.getElementById('modal')
var modalContent = document.getElementById('modal-content')
var modalTitle = document.getElementById('modal-title')
var modalImage = document.getElementById('modal-image')
var closeButton = document.getElementById('close')

closeButton.onclick = function() {
    modal.style.display = 'none'
    modalContent.className = 'modal-content'
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none'
        modalContent.className = 'modal-content'
    }
}

let assuntos = [
    violencia_domestica = document.getElementById('violencia_domestica'),
    trafico_de_drogas = document.getElementById('trafico_de_drogas'),
    homicidio = document.getElementById('homicidio'),
    roubo = document.getElementById('roubo'),
    maus_tratos_animais = document.getElementById('maus_tratos_animais'),
    poluicao = document.getElementById('poluicao'),
    pessoas_desaparecidas = document.getElementById('pessoas_desaparecidas'),
    queimadas = document.getElementById('queimadas'),
    fuga_de_presidiarios = document.getElementById('fuga_de_presidiarios')
]

function modalSettings() {
    for (let i = 0; i < assuntos.length; i++) {
        let bgColor = assuntos[i].className
        bgColor = bgColor.split(' ')[1]

        let title = assuntos[i].parentNode.childNodes[3].textContent

        let image = assuntos[i].childNodes[1].src

        assuntos[i].onclick = function() {
            modal.style.display = "block"
            modalContent.className += ' ' +  bgColor
            modalImage.src = image
            modalTitle.textContent = title
        }
    }
}

modalSettings()


function openTab(tabName, button) {
    let tabs = document.getElementsByClassName('tab')
    for (let i=0; i<tabs.length; i++) {
        tabs[i].style.display = 'none'
    }
    document.getElementById(tabName).style.display = 'flex'
    let buttons = button.parentElement.children
    for (let i=0; i<buttons.length; i++) {
        buttons[i].style.backgroundColor = '#334155'
    }

    button.style.backgroundColor = '#475569'
    // console.log(button.style.backgroundColor)
}