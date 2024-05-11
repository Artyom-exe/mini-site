import { nav } from "/components/nav.js";
import { footer } from "/components/footer.js";
import "/styles.css";

async function fetchPosts() {
  let url = new URL(import.meta.env.VITE_API_URL);
  url.pathname = "mini-site/api/peoples.php";
  const response = await fetch(url);
  const peoples = await response.json();

  document.querySelector("#app").innerHTML = `
    ${nav()}
    <h1>Notre équipe</h1>
    <div class="container">
      ${peoples
        .map(
          (people) => `
        <div class="card">
          <figure> 
            <img src="${people.image}"> 
          </figure>
          <h2>${people.name}</h2>
        </div>`
        )
        .join("")}
    </div>
    ${footer()}
  `;
}

fetchPosts();
