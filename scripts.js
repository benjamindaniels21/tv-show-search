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
});

const createImages = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement("IMG");
      img.src = result.show.image.medium;
      document.body.append(img);
    }
  }
};
