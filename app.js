const rojo = document.getElementById("rojo");
const amarillo = document.getElementById("amarillo");
const verde = document.getElementById("verde");
let temporizador = 15;

function cambioVerde() {
  amarillo.style.backgroundColor = "rgba(252, 243, 0, 0.2)";
  verde.style.backgroundColor = "rgba(138, 201, 38, 1)";
}

function cambioAmarillo() {
  rojo.style.backgroundColor = "rgba(217, 4, 41, 0.2)";
  amarillo.style.backgroundColor = "rgba(252, 243, 0, 1)";
  setTimeout(cambioVerde, 3000);
}

function cambioRojo() {
  verde.style.backgroundColor = "rgba(138, 201, 38, 0.2)";
  rojo.style.backgroundColor = "rgba(217, 4, 41, 1)";
  setTimeout(cambioAmarillo, 5000);
}



let semaforo = setInterval(() => {
    if (temporizador === 0) {
        clearInterval(semaforo);
    }
    temporizador--;
    cambioRojo();

}, 15000);
