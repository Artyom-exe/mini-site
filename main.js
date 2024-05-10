import { nav } from "/components/nav.js";
import { footer } from "/components/footer.js";
import "/styles.css";


  document.querySelector("#app").innerHTML = `
    ${nav()}
    <div class="background">
      <h2>“La calvitie n’est pas une fin, c’est le début d’une toile vierge pour l’expression de soi.”</h2>
      <h2>“Chaque tête chauve est une lune brillante, illuminant la nuit de l’individualité.”</h2>
    </div>
    ${footer()}
  `;
