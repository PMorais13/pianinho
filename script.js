let cor = "rgb(255, 169, 169)"

let audios = {
    notaC: 'notas/noteC.wav',
    notaCSus: 'notas/noteCSus.wav',
    notaD: 'notas/noteD.wav',
    notaDSus: 'notas/noteDSus.wav',
    notaE: 'notas/noteE.wav',
    notaF: 'notas/noteF.wav',
    notaFSus: 'notas/noteFSus.wav',
    notaG: 'notas/noteG.wav',
    notaGSus: 'notas/noteGSus.wav',
    notaA: 'notas/noteA.wav',
    notaASus: 'notas/noteASus.wav',
    notaB: 'notas/noteB.wav',
    notaCOitava: '',
    
}

function playAudio(audioName) {

    if (audios[audioName]) {
        const audio = new Audio(audios[audioName]);
        audio.play();
    }
}

function clickDo() {
    document.getElementById("do").style.backgroundColor = cor
    playAudio('notaC')
}

function desclickDo(){
    document.getElementById("do").style.backgroundColor = " rgb(223, 223, 223)"
}

function clickDoSus() {
    document.getElementById("doSus").style.backgroundColor = cor
    playAudio('notaCSus')
}

function desclickDoSus(){
    document.getElementById("doSus").style.backgroundColor = " rgb(223, 223, 223)"
}

function clickRe() {
    document.getElementById("re").style.backgroundColor = cor
    playAudio('notaD')
}

function desclickRe(){
    document.getElementById("re").style.backgroundColor = " rgb(223, 223, 223)"
}

function clickReSus() {
    document.getElementById("reSus").style.backgroundColor = cor
    playAudio('notaDSus')
}

function desclickReSus(){
    document.getElementById("reSus").style.backgroundColor = " rgb(223, 223, 223)"
}

function clickMi() {
    document.getElementById("mi").style.backgroundColor = cor
    playAudio('notaE')
}

function desclickMi(){
    document.getElementById("mi").style.backgroundColor = " rgb(223, 223, 223)"
}

function clickFa() {
    document.getElementById("fa").style.backgroundColor = cor
    playAudio('notaF')
}

function desclickFa(){
    document.getElementById("fa").style.backgroundColor = " rgb(223, 223, 223)"
}

function clickFaSus() {
    document.getElementById("faSus").style.backgroundColor = cor
    playAudio('notaFSus')
}

function desclickFaSus(){
    document.getElementById("faSus").style.backgroundColor = " rgb(223, 223, 223)"
}

function clickSol() {
    document.getElementById("sol").style.backgroundColor = cor
    playAudio('notaG')
}

function desclickSol(){
    document.getElementById("sol").style.backgroundColor = " rgb(223, 223, 223)"
}

function clickSolSus() {
    document.getElementById("solSus").style.backgroundColor = cor
    playAudio('notaGSus')
}

function desclickSolSus(){
    document.getElementById("solSus").style.backgroundColor = " rgb(223, 223, 223)"
}

function clickLa() {
    document.getElementById("la").style.backgroundColor = cor
    playAudio('notaA')
}

function desclickLa(){
    document.getElementById("la").style.backgroundColor = " rgb(223, 223, 223)"
}

function clickLaSus() {
    document.getElementById("laSus").style.backgroundColor = cor
    playAudio('notaASus')
}

function desclickLaSus(){
    document.getElementById("laSus").style.backgroundColor = " rgb(223, 223, 223)"
}

function clickSi() {
    document.getElementById("si").style.backgroundColor = cor
    playAudio('notaB')
}

function desclickSi(){
    document.getElementById("si").style.backgroundColor = " rgb(223, 223, 223)"
}

function handleKeyDown(event) {

    if (event.keyCode === 68) {
        clickDo();
    } else if (event.keyCode === 82) {
        clickDoSus();
    } else if (event.keyCode === 70) {
        clickRe();
    } else if (event.keyCode === 84) {
        clickReSus();
    } else if (event.keyCode === 71) {
        clickMi();
    } else if (event.keyCode === 72) {
        clickFa();
    } else if (event.keyCode === 85) {
        clickFaSus();
    } else if (event.keyCode === 74) {
        clickSol();
    } else if (event.keyCode === 81) {
        clickSolSus();
    } else if (event.keyCode === 65) {
        clickLa();
    } else if (event.keyCode === 87) {
        clickLaSus();
    } else if (event.keyCode === 83) {
        clickSi();
    }
}
document.addEventListener('keydown', handleKeyDown)

function handleKeyUp(event) {

    if (event.keyCode === 68) {
        desclickDo();
    } else if (event.keyCode === 82) {
        desclickDoSus();
    } else if (event.keyCode === 70) {
        desclickRe();
    } else if (event.keyCode === 84) {
        desclickReSus();
    } else if (event.keyCode === 71) {
        desclickMi();
    } else if (event.keyCode === 72) {
        desclickFa();
    } else if (event.keyCode === 85) {
        desclickFaSus();
    } else if (event.keyCode === 74) {
        desclickSol();
    } else if (event.keyCode === 81) {
        desclickSolSus();
    } else if (event.keyCode === 65) {
        desclickLa();
    } else if (event.keyCode === 87) {
        desclickLaSus();
    } else if (event.keyCode === 83) {
        desclickSi();
    }
}
document.addEventListener('keyup', handleKeyUp)