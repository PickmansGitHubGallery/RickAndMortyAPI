let number = 1;
let imageNumber = 1;

async function populate(int) {
  const requestURL =
    `https://rickandmortyapi.com/api/character?page=${int}`;
  const request = new Request(requestURL);

  const response = await fetch(request);
  const rickOgMortyPersoner = await response.json();
  
  
  udfyldPersonInfo(rickOgMortyPersoner,20);//Jeg kalder funktionen og indsætter 20 fordi hvor side af
  //character?page indeholder 20 personer.



}

function udfyldPersonInfo(obj,int){

  for (let i = 0; i < int; i++){ 
  
  const header = document.querySelector("header");//Jeg finder html elementet header
  const container = document.createElement("div");// jeg opretter en div container til at samle oplysninger om karakterne i.

  const navn = document.createElement("h1");
  const gender = document.createElement("p");
  const status = document.createElement("p");
  const origin = document.createElement("p");
  const image = document.createElement("img");

  //Jeg trækker navn,køn,status og origin ud af objeketet.
  navn.textContent = obj.results[i].name;
  gender.textContent = `Gender : ${obj.results[i].gender}`;
  status.textContent = `Status : ${obj.results[i].status}`;
  origin.textContent = `Origin : ${obj.results[i].origin.name}`;
    
  image.src = `https://rickandmortyapi.com/api/character/avatar/${obj.results[i].id}.jpeg`; // obj.result[i].id indeholder https://rickandmortyapi.com/api/character/avatar/1.jpeg
  //image.src = 	`https://rickandmortyapi.com/api/character/avatar/${i+ imageNumber}.jpeg`; //Denne løsning har engang virket. Men det gør den ikke længere og jeg ved ikke hvorfor.

  //her tilføjes CSS linket til rickAndMortysStyle
  container.classList.add("box-style");
  image.classList.add("character-image");

  //Her indsætter jeg navn,køn,status, origin og billede i containeren.
  container.appendChild(navn);
  container.appendChild(image);
  container.appendChild(gender);
  container.appendChild(status);
  container.appendChild(origin);
  header.appendChild(container);
  }
}
//Her henter jeg nextButton og previousButton knapperne og tilføjer eventListener.
const nextPageButton = document.getElementById("next-button");
nextPageButton.addEventListener("click",nextPage);

const previousPageButton = document.getElementById("previous-button");
previousPageButton.addEventListener("click",previousPage);


//Disse funktioner sørger for man kan skifte siderne

function nextPage(){
  
  if(number < 42){
    number++;
    imageNumber += 20;
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
    imageNumber -= 20;
  }else{
    number = 1;
  }
  const header = document.querySelector("header");
    header.innerHTML = "";
    populate(number);
}
populate(number);//Her kalder jeg populate funktionen så siden starter.
