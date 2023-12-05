document.body.children[1].children[0].href = "https://www.google.com";

const elLink = document.getElementById("link");

elLink.href = "https://microsoft.com";
elLink.target = "_blank";

// Criando novos elementos
// 1 - Criar o novo elemento na memória com create element.
// 2 - Editar as propriedades do elemento.
// 3 - Selecionar o elemento que irá conter o novo elemento.
// 4 - Inserir o elemento com append ou prepend.

const newLink = document.createElement("a");
newLink.href = "https://google.com.br";
newLink.textContent = "google.com";
const elParagrafo = document.querySelector("p");

elParagrafo.append(newLink);

// Criando novos elementos do jeito "fácil" com template literals
// 1 - Criar a string completa do elemento, como se fosse editar HTML.
// 2 - Selecionar elemento que irá conter o novo elemento.
// 3 - Inserir o novo element com insertAdjacentHTML na posição desejada.

const newLink2 = `<br>  <a class="novo--link" href="https://reddit.com">Link para o Reddit!</a>`;

elParagrafo.insertAdjacentHTML("beforeend", newLink2);

// Remover elementos

// 1 - Diretamente selecionando o elemento e aplicando o método remove()
// const h1 = document.querySelector("h1");
// h1.remove()

const tweet = document.querySelector("textarea");
let numCaracteres = document.querySelector("#cur--size");
const maxCaracteres = document.querySelector("#max--size");
const tamanhoMax = tweet.maxLength;
maxCaracteres.textContent = tamanhoMax;

tweet.addEventListener("input", limitarTweet);

function limitarTweet(e) {
  let texto = e.target.value;
  let tamanhoTexto = texto.length;
  numCaracteres.textContent = tamanhoTexto;
  numCaracteres.style.color = "black";
  if (tamanhoTexto > tamanhoMax * 0.7) {
    numCaracteres.style.color = "darkorange";
  }
  if (tamanhoTexto > tamanhoMax * 0.9) {
    numCaracteres.style.color = "red";
  }
  if (tamanhoTexto >= tamanhoMax) {
    tweet.style.borderColor = "red";
  } else {
    tweet.style.borderColor = "#1c92d2";
  }
}
