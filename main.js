import { nav } from "/components/nav.js";
import { footer } from "/components/footer.js";
import "/styles.css";


  document.querySelector("#app").innerHTML = `
    ${nav()}
    ${footer()}
  `;
