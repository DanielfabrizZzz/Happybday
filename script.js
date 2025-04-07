document.addEventListener("DOMContentLoaded", function () {
  const mainButton = document.querySelector(".mainButton");
  let clickCount = 0;

  // Posiciones predefinidas para los textos (5 posiciones diferentes)
  const textPositions = [
    { class: "text-position-1", bottom: "20%", right: "25%" },
    { class: "text-position-2", bottom: "20%", right: "75%" },
    { class: "text-position-3", bottom: "60%", right: "30%" },
    { class: "text-position-4", bottom: "60%", right: "70%" },
    { class: "text-position-5", bottom: "40%", right: "50%" },
  ];

  mainButton.addEventListener("click", function () {
    clickCount++;

    // Primer clic: Cambio de fondo
    if (clickCount === 1) {
      document.body.classList.add("bg-pink");
      mainButton.textContent = "¡Siguiente sorpresa!";
    }

    // Segundo clic: Imagen + Textos
    else if (clickCount === 2) {
      // Crear imagen que cae
      const image = document.createElement("img");
      image.className = "cumple-image";
      image.src = "/benjamin.png"; // Cambia por tu imagen
      image.alt = "¡Feliz cumpleaños!";
      document.body.appendChild(image);

      // Crear 5 textos en posiciones diferentes
      textPositions.forEach((pos, index) => {
        const textElement = document.createElement("div");
        textElement.className = `cumple-text ${pos.class}`;
        textElement.textContent = "FELIZ CUMPLE DOMIMI, TE QUIERO";
        textElement.style.left = `${pos.left}`;
        textElement.style.bottom = `${pos.bottom}`;
        document.body.appendChild(textElement);

        // Animación escalonada para cada texto
        setTimeout(() => {
          textElement.classList.add("show-text");
        }, index * 200);
      });

      // Activar animación de la imagen
      setTimeout(() => {
        image.classList.add("show-image");
      }, 100);

      mainButton.textContent = "Última sorpresa...";
    }

    // Tercer clic: Advertencia + Botón de declaración
    else if (clickCount === 3) {
      // Crear advertencia
      const warning = document.createElement("div");
      warning.className = "warning-message";
      warning.textContent = "⛔ No des otro clic";
      document.body.appendChild(warning);

      // Crear botón de declaración
      const declarationBtn = document.createElement("button");
      declarationBtn.className = "declaration-button";
      declarationBtn.textContent = "babababbabababababosa";
      document.body.appendChild(declarationBtn);

      // Mostrar con animación
      setTimeout(() => {
        warning.classList.add("show-warning");
        declarationBtn.classList.add("show-declaration-button");
      }, 100);

      // Deshabilitar botón principal
      mainButton.disabled = true;
      mainButton.style.opacity = "0.5";

      // Configurar modal de declaración
      declarationBtn.addEventListener("click", function () {
        const modal = document.createElement("div");
        modal.className = "modal";
        modal.innerHTML = `
          <div class="modal-content">
            <h2>Para Domimi 💌</h2>
            <p>"Feliz cumpleaños, Domimi.
Antes que nada, espero de corazón que hayas tenido un día muy bonito, rodeada del cariño de tu mamá y, si fue posible, también de tus amistades más cercanas. Que cada momento de hoy haya estado lleno de sonrisas sinceras, abrazos significativos y detalles que te recuerden lo especial que eres.

Quiero aprovechar esta ocasión para desearte lo mejor en todos los aspectos de tu vida. Eres una gran amistad, una de esas personas que, aunque no esté físicamente, me hace disfrutar de una buena charla. Sabes bien que te valoro un montón y aprecio mucho la conexión que tenemos.

Por eso mismo, deseo que este nuevo año que empiezas esté lleno de logros, aprendizajes, experiencias lindas y, sobre todo, de personas que te sumen, que te impulsen y te acompañen en el camino hacia todo lo que anhelas. Ojalá encuentres en tu ruta no solo lo que buscas, sino también lo que ni siquiera sabías que necesitabas, y que todo lo bueno te abrace con fuerza.

Siempre me he considerado bueno escribiendo y comunicando lo que siento, pero debo admitir que cuando se trata de fechas importantes como los cumpleaños, nunca he sido el mejor orador. Aun así, quiero que sepas que este mensaje —y especialmente este presente— han sido preparados con mucho cariño, dedicación y pensando en ti."</p>
            <button class="close-modal">Cerrar</button>
          </div>
        `;
        document.body.appendChild(modal);
        modal.style.display = "flex";

        // Cerrar modal
        document
          .querySelector(".close-modal")
          .addEventListener("click", function () {
            modal.style.animation = "fadeIn 0.3s reverse forwards";
            setTimeout(() => {
              modal.remove();
            }, 300);
          });
      });
    }
  });
});
