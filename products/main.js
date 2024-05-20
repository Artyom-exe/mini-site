import { nav } from "/components/nav.js";
import { footer } from "/components/footer.js";
import "/styles.css";


async function fetchPosts() {
  let url = new URL(import.meta.env.VITE_API_URL);
  url.pathname = "mini-site/api/products.php";
  const response = await fetch(url);
  const products = await response.json();

  document.querySelector("#app").innerHTML = `
    ${nav()}
      <h1>Les produits</h1>
      <div class="products">
      ${products
        .map(
          (product) => `
          <li>
            <a href="/product/?id=${product.id}"><img src="${product.img}">${product.title}<br>${product.price}</a>
          </li>`
        )
        .join("")}
    </div>
    ${footer()}
  `;
}

fetchPosts();
