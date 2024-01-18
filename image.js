const myApiKey = "s69U3jz9uvFnPhthPRZ1s1vQb2OHJ1IpfgHqSMZXoTc8g8Pv1CCwxhZJ";
const addressBarContent = new URLSearchParams(location.search);
const imageId = addressBarContent.get("imageId");
const row = document.getElementsByClassName("row")[0];
console.log(imageId);

fetch(`https://api.pexels.com/v1/search?query=[dragons]/${imageId}`, {
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
    const newCol = document.createElement("div");
    newCol.classList.add("col-12");
    newCol.classList.add("col-md-8");
  })
  .catch((err) => {
    console.log(err);
  });
