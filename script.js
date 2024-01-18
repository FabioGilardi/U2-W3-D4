// REFERENCES
const myApiKey = "s69U3jz9uvFnPhthPRZ1s1vQb2OHJ1IpfgHqSMZXoTc8g8Pv1CCwxhZJ";
const loadPButton = document.getElementById("load");
const loadSButton = document.getElementById("load-2");
const cardsImageArray = Array.from(document.querySelectorAll(".card img"));
const cardsHideButton = Array.from(
  document.querySelectorAll(".card button:nth-of-type(2)")
);
const smallText = Array.from(document.getElementsByTagName("small"));
const myForm = document.getElementById("my-form");
const imgFinder = document.getElementById("img-finder");
const cardTitlesArray = Array.from(
  document.getElementsByClassName("card-title")
);

const imgLinks = Array.from(document.getElementsByClassName("img-link"));
const titleLinks = Array.from(document.getElementsByClassName("title-link"));

console.log(imgLinks);

// FUNCTIONS

const loadPrimaryImages = function () {
  fetch("https://api.pexels.com/v1/search?query=[dragons]", {
    method: "GET",
    headers: {
      Authorization: myApiKey,
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Something went wrong...");
      }
    })
    .then((images) => {
      console.log(images);
      // CARICO LE FOTO NELLE CARDS
      for (let i = 0; i < cardsImageArray.length; i++) {
        cardsImageArray[i].setAttribute(
          "src",
          `${images.photos[i].src.original}`
        );

        imgLinks[i].setAttribute(
          "href",
          `./image.html?imageId=${images.photos[i].id}`
        );
        titleLinks[i].setAttribute(
          "href",
          `./image.html?imageId=${images.photos[i].id}`
        );
        cardTitlesArray[i].innerText = images.photos[i].alt;
        smallText[i].innerText = images.photos[i].id;
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

const loadSecondaryImages = function () {
  fetch("https://api.pexels.com/v1/search?query=[supercar]", {
    method: "GET",
    headers: {
      Authorization: myApiKey,
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Something went wrong...");
      }
    })
    .then((images) => {
      console.log(images);
      // CARICO LE FOTO NELLE CARDS
      for (let i = 0; i < cardsImageArray.length; i++) {
        cardsImageArray[i].setAttribute(
          "src",
          `${images.photos[i].src.original}`
        );
        cardTitlesArray[i].innerText = images.photos[i].alt;
        smallText[i].innerText = images.photos[i].id;
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

const hideCard = function (e) {
  e.target.closest(".col-md-4").remove();
};

const changeButtonsText = function () {
  cardsHideButton.forEach((button) => {
    button.innerText = "Hide";
    button.addEventListener("click", hideCard);
  });
};

const loadCustomImages = function (e) {
  e.preventDefault();

  fetch(`https://api.pexels.com/v1/search?query=[${imgFinder.value}]`, {
    method: "GET",
    headers: {
      Authorization: myApiKey,
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Something went wrong...");
      }
    })
    .then((images) => {
      console.log(images);
      // CARICO LE FOTO NELLE CARDS
      for (let i = 0; i < cardsImageArray.length; i++) {
        cardsImageArray[i].setAttribute(
          "src",
          `${images.photos[i].src.original}`
        );
        cardTitlesArray[i].innerText = images.photos[i].alt;
        smallText[i].innerText = images.photos[i].id;
      }
    })
    .catch((err) => {
      console.log(err);
    });

  imgFinder.value = "";
};

// ON-GOING

window.onload = changeButtonsText();

loadPButton.addEventListener("click", loadPrimaryImages);

loadSButton.addEventListener("click", loadSecondaryImages);

myForm.addEventListener("submit", loadCustomImages);
