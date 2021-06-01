const btnFlotante = document.querySelector(".btn-footer");
const footer = document.querySelector(".footer");
const imagenHero = document.querySelector(".hero");
const imagenes = ["arriba2.jpg", "arriba.jpg"];

document.addEventListener("DOMContentLoaded", () => {
  let i = 0;
  let tiempo = 0;
  setInterval(() => {
    imagenHero.style.backgroundPositionY = "-" + tiempo + "px";
    if (tiempo > 40) {
      tiempo = 0;
      imagenHero.style.backgroundImage = "url(../img/" + imagenes[i] + ")";

      if (i === imagenes.length - 1) {
        i = 0;
      } else {
        i++;
      }
    }

    tiempo += 1;
  }, 100);
});

btnFlotante.addEventListener("click", function () {
  if (footer.classList.contains("active")) {
    footer.classList.remove("active");
    this.classList.remove("active");
    this.innerText = "Idioma y Moneda";
  } else {
    footer.classList.add("active");
    this.classList.add("active");
    this.innerText = "X Cerrar";
  }
});
