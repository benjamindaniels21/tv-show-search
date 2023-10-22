const form = document.querySelector("#searchForm");
form.addEventListener("submit", async (e) => {
  e.preventDefault(); //prevents page from reloading when button is clicked
  const searchTerm = form.elements.query.value; //value of the form input
  const config = {
    params: { q: searchTerm },
  };
  const response = await axios.get(
    `https://api.tvmaze.com/search/shows?`,
    config
  );
  createImages(response.data);
  form.elements.query.value = "";
  const movieDiv = document.createElement("div");
});

const createImages = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement("IMG");
      img.classList.add("movieImage");
      img.src = result.show.image.medium;
      movieDiv.appendChild(img);
      document.body.append(movieDiv);
    }
  }
};

//remove all previous images

// const removeImages = () => {
//   const images = document.getElementsByTagName("img");

//   console.log(images);
//   for (let i = images.length; i > 0; i--) {}
// };

// const btn = document.getElementById("clearList");

// btn.addEventListener("click", () => {
//   removeImages();
// });
