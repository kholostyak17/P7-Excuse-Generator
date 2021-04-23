const who = ["El gato", "Mi hermana", "Mi amigo Ramón", "Mi novia"];
const what = ["me ha tirado", "me ha quemado", "me ha robado", "me ha perdido"];
const when = ["ayer por la noche", "hace un mes", "justo cuando desperté", "mientras estaba en la ducha", "mientras alimentaba al pájaro"];

window.onload = () => {
    console.log("hola!!! (funciona script JS)");
    document.querySelector('#excuse').innerHTML = Generate();
    document.querySelector('#generateExcuse').addEventListener("click", () => {
        document.querySelector('#excuse').innerHTML = Generate();
    });
}

function randomNumber(myArray) {
    return myArray[Math.floor(Math.random() * myArray.length)];
}

function Generate() {
    let excuse = ("".concat(randomNumber(who), " ", randomNumber(what), " mis ejercicios ", randomNumber(when), "... :("));
    return excuse;
}


