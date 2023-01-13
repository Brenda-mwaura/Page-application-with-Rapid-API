const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "9e790d57fbmsh88aa75452dcb4f5p14b21ajsn56f797d7f807",
    "X-RapidAPI-Host": "Page-App.p.rapidapi.com",
  },
};

fetch("https://Page-App.p.rapidapi.com/PageApp?limit=10&page=0", options)
  .then((response) => response.json())
  .then(response)=> 
    const PageApp =response.Search;
    PageApp.map (PageApp=>{

      // console.log(PageApp.Title);  

   const name= PageApp.Title;
    const email =PageApp. email
    const year= PageApp.year 
  
   const Homepage= <li> <img src="$ {Title}" alt="${email}"> <h3>${year}</h3> <P> ${year}
</p></li>; 
document.querySelector(".Page App").innerHTML +=Homepage;

    })

  .catch(err => console.error(err));
