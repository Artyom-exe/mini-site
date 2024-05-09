// Importe le composant de navigation
import { nav } from "/components/nav.js";

import { footer } from "/components/footer.js";

// Importe les styles CSS
import "/styles.css";

// Fonction asynchrone pour récupérer et afficher les données du produit
async function fetchPosts() {
  // Crée une nouvelle URL à partir de l'URL de l'API
  let url = new URL(import.meta.env.VITE_API_URL);

  // Extrait l'ID du produit de la query string de l'URL actuelle
  const id = new URL(window.location).searchParams.get('id');

  // Modifie le chemin de l'URL pour pointer vers l'API de récupération des produits
  url.pathname = "mini-site/api/product.php";

  // Ajoute l'ID du produit à la query string de l'URL
  url.searchParams.append("id", id);

  // Envoie une requête fetch à l'URL construite pour récupérer les données du produit
  const response = await fetch(url);

  // Extrait les données du produit au format JSON à partir de la réponse de la requête
  const product = await response.json();

  // Met à jour le contenu de l'élément avec l'ID "app" pour afficher les données du produit récupérées
  document.querySelector("#app").innerHTML = `
    ${nav()} <!-- Injection du composant de navigation -->
    <div>
      <h1>Posts</h1> <!-- Titre principal de la section -->
      <h2>${product.title}</h2> <!-- Titre du produit récupéré -->
      <p>${product.content}</p> <!-- Contenu du produit récupéré -->
    </div>
    ${footer()}
  `;
}

// Appel de la fonction fetchPosts pour récupérer et afficher les données du produit
fetchPosts();
