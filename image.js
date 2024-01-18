const myApiKey = "s69U3jz9uvFnPhthPRZ1s1vQb2OHJ1IpfgHqSMZXoTc8g8Pv1CCwxhZJ";
const addressBarContent = new URLSearchParams(location.search);
const imageId = parseInt(addressBarContent.get("imageId").split(".")[1]);
const imageAdd = addressBarContent.get("imageId").split(".")[0];
const row = document.getElementsByClassName("row")[1];
const main = document.getElementsByTagName("main")[0];
console.log(imageAdd);

const createImg = function () {
  fetch(`https://api.pexels.com/v1/search?query=${imageAdd}`, {
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
    .then((image) => {
      console.log(image);
      const newCol = document.createElement("div");
      newCol.classList.add("col-12");
      newCol.classList.add("col-md-10");
      newCol.innerHTML = `            <div class="card my-4 shadow-sm">
    <img
      src="${image.photos[imageId].src.original}"
      class="bd-placeholder-img card-img-top"
      style = "height: 480px !important;"
    />
    <div class="card-body">
      <h5 class="card-title">${image.photos[imageId].photographer}</h5>
      <a class="text-decoration-none" href="${image.photos[imageId].photographer_url}" target="_blank"
        ><p class="card-text">
        Photograper link
        </p></a
      >
      <a href="./pexels-start.html" class="text-decoration-none"><p class="mt-3 mb-0">Go back Home</p></a>
    </div>
    </div>`;
      row.appendChild(newCol);
      main.style.backgroundColor = image.photos[imageId].avg_color;
    })
    .catch((err) => {
      console.log(err);
    });
};

createImg();
