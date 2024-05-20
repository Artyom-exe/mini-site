import { nav } from "/components/nav.js";
import { footer } from "/components/footer.js";
import "/styles.css";


document.querySelector("#app").innerHTML += `${nav()}`;

function createAndSubmitForm() {

  const formHtml = `
    <form id="contactForm">
      <input type="text" name="name" placeholder="Votre nom"/>
      <div id=error-name class=errorColor></div>
      <input type="text" name="email" placeholder="Votre email"/>
      <div id=error-email class=errorColor></div>
      <textarea name="message" placeholder="Votre message" ></textarea>
      <div id=error-message class=errorColor></div>
      <button type="submit">Envoyer</button>
    </form>
  `;
  document.querySelector("#app").innerHTML += formHtml

  document.querySelector("#contactForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    let url = new URL(import.meta.env.VITE_API_URL);
    url.pathname = "mini-site/api/submitContact.php";

    const reponse = await fetch(url, {
      method: "POST",
      body: formData
    });


    deleteErrors();

    if (reponse.status === 422) {
      const errors = await reponse.json();
      for (const key in errors) {
          const errorMessage = errors[key];
          const errorDiv = document.querySelector(`#error-${key}`)
          errorDiv.innerHTML = errorMessage
        }
      console.log(errors);
    }else {
      alert('Message envoyé !');
      e.target.reset();
    }

    
  });

}

function deleteErrors() {
  const errorNames = ['name', 'email', 'message']
  for (let i = 0; i < errorNames.length; i++) {
    const key = errorNames[i]
    const errorDiv = document.querySelector(`#error-${key}`)
    errorDiv.innerHTML = "";
  }
}

createAndSubmitForm();


document.querySelector("#app").innerHTML += `${footer()}`

