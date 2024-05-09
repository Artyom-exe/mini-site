import { nav } from "/components/nav.js";
import "/styles.css";

async function fetchPosts() {
  let url = new URL(import.meta.env.VITE_API_URL);
  url.pathname = "mini-site/api/peoples.php";
  const response = await fetch(url);
  const peoples = await response.json();

  document.querySelector("#app").innerHTML = `
    ${nav()}
    <div class="container">
      ${peoples
        .map(
          (people) => `<div class="card">
        <h2>${people.name}</h2>
        <figure> <img src="${people.image}"> </figure>
        </div>`
        )
        .join("")}
    </div>
  `;
}

fetchPosts();
