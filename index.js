const contentContainer = document.querySelector(".content-container");

const fetchData = () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "854c4ff541msheb75876113b7b0cp10dd56jsn2596df1cde05",
      "X-RapidAPI-Host": "bb-finance.p.rapidapi.com",
    },
  };

  fetch(
    "https://bb-finance.p.rapidapi.com/market/auto-complete?query=apple",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      const news = response.news
        .map((item) => {
          const { title, thumbnailImage, longURL } = item;

          return `
         <div class="card">
            <h1>${title}</h1>
            <img src="${thumbnailImage}" alt="" />
            <a href="${longURL}">go to website</a>
        </div>
        `;
        })
        .join("");

      contentContainer.innerHTML = news;
    })
    .catch((err) => console.error(err));
};

fetchData();
