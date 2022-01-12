//html ichidagi elementlarni tanlab olish buyruqlari
let elReselt = document.querySelector(".pokemons-array-result");
let elCards = document.querySelector(".card-list");

//array ichidagi elementlar soni
elReselt.textContent = pokemons.length;

for (let pokemon of pokemons) {
  //create html elements(HTML elementlrini yaratish uchun)
  let cardItems = document.createElement("li");
  let cardTextContent = document.createElement("div");
  let cardImg = document.createElement("img");
  let cardTextWrapper = document.createElement("div");
  let cardTopTextContent = document.createElement("div");
  let cardTopTextContentBox = document.createElement("div");
  let cardTopTitle = document.createElement("h5");
  let btnIconClick = document.createElement("button");
  let cardIcon = document.createElement("img");
  let cardTopDesc = document.createElement("p");
  let cardBottomTextContent = document.createElement("div");
  let cardBottomText = document.createElement("p");
  let cardBottomDescText = document.createElement("p");
  let newDesc = document.createElement("p");

  //   //html teglari ichiga atributlarni qo'shish
  cardItems.setAttribute("class", "card-items");
  cardTextContent.setAttribute("class", "card-text-content");
  cardImg.setAttribute("class", "cards-img");
  cardImg.setAttribute("src", pokemon.img);
  cardTextWrapper.setAttribute("class", "text-wrapper");
  cardTopTextContent.setAttribute("class", "top-text-content");
  cardTopTextContentBox.setAttribute("class", "top-text-content-box");
  cardTopTitle.setAttribute("class", "card-top-title");
  btnIconClick.setAttribute("class", "btn-click bg-transparent");
  cardTopDesc.setAttribute("class", "card-top-desc");
  cardBottomTextContent.setAttribute("class", "card-bottom-text-content");
  cardBottomText.setAttribute("class", "card-bottom-text");
  cardBottomDescText.setAttribute("class", "card-bottom-text");
  newDesc.setAttribute("class", "subtitle-desc");

  //   //html teglatriga pokemons.js faylidagi arraydagi mos  qiymatlarini(contentlarni) qo`shish
  cardTopTitle.textContent = pokemon.name;
  cardTopDesc.textContent = pokemon.type;
  cardBottomText.textContent = pokemon.height;
  cardBottomDescText.textContent = pokemon.weight;
  newDesc.textContent = pokemon.candy;

  //   //yaratilgan tegalarni htmldagi o`z o`rniga qo`yish
  elCards.appendChild(cardItems);
  cardItems.appendChild(cardTextContent);
  cardTextContent.appendChild(cardImg);
  cardTextContent.appendChild(cardTextWrapper);
  cardTextWrapper.appendChild(cardTopTextContent);
  cardTopTextContent.appendChild(cardTopTextContentBox);
  cardTopTextContentBox.appendChild(cardTopTitle);
  cardTopTextContentBox.appendChild(btnIconClick);
  btnIconClick.appendChild(cardIcon);
  cardTopTextContent.appendChild(cardTopDesc);
  cardTextWrapper.appendChild(cardBottomTextContent);
  cardBottomTextContent.appendChild(cardBottomText);
  cardBottomTextContent.appendChild(cardBottomDescText);
  cardTextWrapper.appendChild(newDesc);

  // hearts bosilganda uni active holatga o`tkazuchi funksiya
  btnIconClick.onclick = function () {
    btnIconClick.classList.toggle("active-icon-hearts");
  };
}
