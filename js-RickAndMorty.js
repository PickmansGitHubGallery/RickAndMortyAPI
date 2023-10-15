let number = 0;

async function populate(int) {
  const requestURL =
    `https://rickandmortyapi.com/api/character?page=${int}`;
  const request = new Request(requestURL);

  const response = await fetch(request);
  const rickOgMortyPersoner = await response.json();

  udfyldPersonInfo(rickOgMortyPersoner,20);
}

function udfyldPersonInfo(obj,int){

  for (let i = 0; i < int; i++){ 

  const header = document.querySelector("header");
  const container = document.createElement("div");

  const navn = document.createElement("h1");
  const gender = document.createElement("p");
  const status = document.createElement("p");
  const origin = document.createElement("p");

  navn.textContent = obj.results[i].name;
  gender.textContent = `Gender : ${obj.results[i].gender}`;
  status.textContent = `Status : ${obj.results[i].status}`;
  origin.textContent = `Origin : ${obj.results[i].origin.name}`;

  //her tilføjes CSS
  container.classList.add("box-style");

  container.appendChild(navn);
  container.appendChild(gender);
  container.appendChild(status);
  container.appendChild(origin);

  header.appendChild(container);
  }
}
const nextPageButton = document.getElementById("next-button");
nextPageButton.addEventListener("click",nextPage);

const previousPageButton = document.getElementById("previous-button");
previousPageButton.addEventListener("click",previousPage);

function nextPage(){
  if(number < 42){
    number++;
  }else{
    number = 42;
  }
    const header = document.querySelector("header");
    header.innerHTML = "";
    populate(number);
  }
function previousPage(){
  if(number > 1){
    number--;
  }else{
    number = 1;
  }
  const header = document.querySelector("header");
    header.innerHTML = "";
    populate(number);
}
nextPage();
