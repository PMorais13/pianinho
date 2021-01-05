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
    notaCOitava: 'notas/noteCOitava.wav',
    notaCSusOitava: 'notas/noteCSusOitava.wav',
    notaDOitava: 'notas/noteDOitava.wav',
    notaDSusOitava: 'notas/noteDSusOitava.wav',
    notaEOitava: 'notas/noteEOitava.wav',
    notaFOitava: 'notas/noteFOitava.wav',
    notaFSusOitava: 'notas/noteFSusOitava.wav',
    notaGOitava: 'notas/noteGOitava.wav',
    notaGSusOitava: 'notas/noteGSusOitava.wav',
    notaAOitava: 'notas/noteAOitava.wav',
    notaASusOitava: 'notas/noteASusOitava.wav',
    notaBOitava: 'notas/noteBOitava.wav',
    notaCSegOitava: 'notas/noteCSegOitava.wav',
}

// function aumentar_volume(){
//     audios.volume(this) += 0.1;
// }

// function diminuir_volume(){
//     audios.volume(this) -= 0.1;
// }

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
    document.getElementById("do").style.backgroundColor = "rgb(45, 4, 53)"
}

function clickDoSus() {
    document.getElementById("doSus").style.backgroundColor = cor
    playAudio('notaCSus')
}

function desclickDoSus(){
    document.getElementById("doSus").style.backgroundColor = "rgb(45, 4, 53)"
}

function clickRe() {
    document.getElementById("re").style.backgroundColor = cor
    playAudio('notaD')
}

function desclickRe(){
    document.getElementById("re").style.backgroundColor = "rgb(45, 4, 53)"
}

function clickReSus() {
    document.getElementById("reSus").style.backgroundColor = cor
    playAudio('notaDSus')
}

function desclickReSus(){
    document.getElementById("reSus").style.backgroundColor = "rgb(45, 4, 53)"
}

function clickMi() {
    document.getElementById("mi").style.backgroundColor = cor
    playAudio('notaE')
}

function desclickMi(){
    document.getElementById("mi").style.backgroundColor = "rgb(45, 4, 53)"
}

function clickFa() {
    document.getElementById("fa").style.backgroundColor = cor
    playAudio('notaF')
}

function desclickFa(){
    document.getElementById("fa").style.backgroundColor = "rgb(45, 4, 53)"
}

function clickFaSus() {
    document.getElementById("faSus").style.backgroundColor = cor
    playAudio('notaFSus')
}

function desclickFaSus(){
    document.getElementById("faSus").style.backgroundColor = "rgb(45, 4, 53)"
}

function clickSol() {
    document.getElementById("sol").style.backgroundColor = cor
    playAudio('notaG')
}

function desclickSol(){
    document.getElementById("sol").style.backgroundColor = "rgb(45, 4, 53)"
}

function clickSolSus() {
    document.getElementById("solSus").style.backgroundColor = cor
    playAudio('notaGSus')
}

function desclickSolSus(){
    document.getElementById("solSus").style.backgroundColor = "rgb(45, 4, 53)"
}

function clickLa() {
    document.getElementById("la").style.backgroundColor = cor
    playAudio('notaA')
}

function desclickLa(){
    document.getElementById("la").style.backgroundColor = "rgb(45, 4, 53)"
}

function clickLaSus() {
    document.getElementById("laSus").style.backgroundColor = cor
    playAudio('notaASus')
}

function desclickLaSus(){
    document.getElementById("laSus").style.backgroundColor = "rgb(45, 4, 53)"
}

function clickSi() {
    document.getElementById("si").style.backgroundColor = cor
    playAudio('notaB')
}

function desclickSi(){
    document.getElementById("si").style.backgroundColor = "rgb(45, 4, 53)"
}

function clickDoOitava() {
    document.getElementById("doOitava").style.backgroundColor = cor
    playAudio('notaCOitava')
}

function desclickDoOitava(){
    document.getElementById("doOitava").style.backgroundColor = "rgb(45, 4, 53)"
}

function clickDoSusOitava() {
    document.getElementById("doSusOitava").style.backgroundColor = cor
    playAudio('notaCSusOitava')
}

function desclickDoSusOitava(){
    document.getElementById("doSusOitava").style.backgroundColor = "rgb(45, 4, 53)"
}

function clickReOitava() {
    document.getElementById("reOitava").style.backgroundColor = cor
    playAudio('notaDOitava')
}

function desclickReOitava(){
    document.getElementById("reOitava").style.backgroundColor = "rgb(45, 4, 53)"
}

function clickReSusOitava() {
    document.getElementById("reSusOitava").style.backgroundColor = cor
    playAudio('notaDSusOitava')
}

function desclickReSusOitava(){
    document.getElementById("reSusOitava").style.backgroundColor = "rgb(45, 4, 53)"
}

function clickMiOitava() {
    document.getElementById("miOitava").style.backgroundColor = cor
    playAudio('notaEOitava')
}

function desclickMiOitava(){
    document.getElementById("miOitava").style.backgroundColor = "rgb(45, 4, 53)"
}

function clickFaOitava() {
    document.getElementById("faOitava").style.backgroundColor = cor
    playAudio('notaFOitava')
}

function desclickFaOitava(){
    document.getElementById("faOitava").style.backgroundColor = "rgb(45, 4, 53)"
}

function clickFaSusOitava() {
    document.getElementById("faSusOitava").style.backgroundColor = cor
    playAudio('notaFSusOitava')
}

function desclickFaSusOitava(){
    document.getElementById("faSusOitava").style.backgroundColor = "rgb(45, 4, 53)"
}

function clickSolOitava() {
    document.getElementById("solOitava").style.backgroundColor = cor
    playAudio('notaGOitava')
}

function desclickSolOitava(){
    document.getElementById("solOitava").style.backgroundColor = "rgb(45, 4, 53)"
}

function clickSolSusOitava() {
    document.getElementById("solSusOitava").style.backgroundColor = cor
    playAudio('notaGSusOitava')
}

function desclickSolSusOitava(){
    document.getElementById("solSusOitava").style.backgroundColor = "rgb(45, 4, 53)"
}

function clickLaOitava() {
    document.getElementById("laOitava").style.backgroundColor = cor
    playAudio('notaAOitava')
}

function desclickLaOitava(){
    document.getElementById("laOitava").style.backgroundColor = "rgb(45, 4, 53)"
}

function clickLaSusOitava() {
    document.getElementById("laSusOitava").style.backgroundColor = cor
    playAudio('notaASusOitava')
}

function desclickLaSusOitava(){
    document.getElementById("laSusOitava").style.backgroundColor = "rgb(45, 4, 53)"
}

function clickSiOitava() {
    document.getElementById("siOitava").style.backgroundColor = cor
    playAudio('notaBOitava')
}

function desclickSiOitava(){
    document.getElementById("siOitava").style.backgroundColor = "rgb(45, 4, 53)"
}






function handleKeyDown(event) {

    if (event.keyCode === 65) {
        clickDo();
    } else if (event.keyCode === 87) {
        clickDoSus();
    } else if (event.keyCode === 83) {
        clickRe();
    } else if (event.keyCode === 69) {
        clickReSus();
    } else if (event.keyCode === 68) {
        clickMi();
    } else if (event.keyCode === 70) {
        clickFa();
    } else if (event.keyCode === 84) {
        clickFaSus();
    } else if (event.keyCode === 71) {
        clickSol();
    } else if (event.keyCode === 89) {
        clickSolSus();
    } else if (event.keyCode === 72) {
        clickLa();
    } else if (event.keyCode === 85) {
        clickLaSus();
    } else if (event.keyCode === 74) {
        clickSi();
    } else if (event.keyCode === 75) {
        clickDoOitava();
    } else if (event.keyCode === 79) {
        clickDoSusOitava();
    } else if (event.keyCode === 76) {
        clickReOitava();
    } else if (event.keyCode === 80) {
        clickReSusOitava();
    } else if (event.keyCode === 186) {
        clickMiOitava();
    } else if (event.keyCode === 222) {
        clickFaOitava();
    } else if (event.keyCode === 221) {
        clickFaSusOitava();
    } else if (event.keyCode === 220) {
        clickSolOitava();
    } else if (event.keyCode === 13) {
        clickSolSusOitava();
    } 
    // else if (event.keyCode === ) {
    //     clickLaOitava();
    // } else if (event.keyCode === ) {
    //     clickLasusOitava();
    // } else if (event.keyCode === ) {
    //     clickSiOitava();
    // }
}
document.addEventListener('keydown', handleKeyDown)

function handleKeyUp(event) {

    if (event.keyCode === 65) {
        desclickDo();
    } else if (event.keyCode === 87) {
        desclickDoSus();
    } else if (event.keyCode === 83) {
        desclickRe();
    } else if (event.keyCode === 69) {
        desclickReSus();
    } else if (event.keyCode === 68) {
        desclickMi();
    } else if (event.keyCode === 70) {
        desclickFa();
    } else if (event.keyCode === 84) {
        desclickFaSus();
    } else if (event.keyCode === 71) {
        desclickSol();
    } else if (event.keyCode === 89) {
        desclickSolSus();
    } else if (event.keyCode === 72) {
        desclickLa();
    } else if (event.keyCode === 85) {
        desclickLaSus();
    } else if (event.keyCode === 74) {
        desclickSi();
    } else if (event.keyCode === 75) {
        desclickDoOitava();
    } else if (event.keyCode === 79) {
        desclickDoSusOitava();
    } else if (event.keyCode === 76) {
        desclickReOitava();
    } else if (event.keyCode === 80) {
        desclickReSusOitava();
    } else if (event.keyCode === 186) {
        desclickMiOitava();
    } else if (event.keyCode === 222) {
        desclickFaOitava();
    } else if (event.keyCode === 221) {
        desclickFaSusOitava();
    } else if (event.keyCode === 220) {
        desclickSolOitava();
    } else if (event.keyCode === 13) {
        desclickSolSusOitava();
    } 
}
document.addEventListener('keyup', handleKeyUp)