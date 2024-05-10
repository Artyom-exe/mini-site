import { nav } from "/components/nav.js";
import { footer } from "/components/footer.js";
import "/styles.css";


  document.querySelector("#app").innerHTML = `
    ${nav()}
    <div class="mosaic">
      <img src="https://placehold.co/1000x400" alt="">
      <img src="https://placehold.co/584x250" alt="">
      <img src="https://placehold.co/383x250" alt="">
      <img src="https://placehold.co/1000x400" alt="">
    </div>
    ${footer()}
  `;
