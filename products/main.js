import { nav } from "/components/nav.js";
import "/styles.css";


async function fetchPosts() {
  let url = new URL(import.meta.env.VITE_API_URL);
  url.pathname = "mini-site/api/products.php";
  console.log(url);
  const response = await fetch(url);
  const products = await response.json();

  document.querySelector("#app").innerHTML = `
    ${nav()}
    <div>
      <h1>Les produits</h1>
      ${products
        .map(
          (product) => `
          <li>
            <a href="/product/?id=${product.id}">
            ${product.title}
            </a>
          </li>`
        )
        .join("")}
    </div>
  `;
}

fetchPosts();
