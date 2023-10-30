let API_KEY;

function processForm() {
  APIForm = document.querySelector("#API-key-form");
  mainPage = document.querySelector("#main-group");
  API_KEY = document.querySelector("#API-key-input").value;
  console.log(API_KEY);
  APIForm.classList.toggle("invisible");
  mainPage.classList.toggle("invisible");
  return false; //we return false at the end of the function to prevent the form from actually being submitted, which would refresh the page by default.
}

async function getImage(query) {
  const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&${query}&limit=25&offset=0&rating=g&lang=en`;
  const responce = await fetch(endpoint);
  const data = await responce.json();
  const dataLength = data.data.length;
  const randomNum = Math.floor(Math.random() * dataLength);
  const dogGif = data.data[randomNum].images.original.url;
  console.log(data);
  console.log(dogGif);
  return dogGif;
}

let button;
let gif;
let dogPhrase;
let count = 0;

button = document.querySelector("#btn");
gif = document.querySelector("#myGif");
dogPhrase = document.querySelector("#amount-of-dogs");

button.addEventListener("click", async function () {
  count++;
  let word;
  let word2;
  const myImage = await getImage("q=dogs");
  if (count == 1) {
    word = "time";
    word2 = "GIF";
  } else {
    word = "times";
    word2 = "GIFs";
  }
  button.innerHTML = `Clicked ${count} ${word}`;
  dogPhrase.innerHTML = `You've viewed ${count} dog ${word2}!`;
  gif.src = myImage;
});
console.log("hello");
