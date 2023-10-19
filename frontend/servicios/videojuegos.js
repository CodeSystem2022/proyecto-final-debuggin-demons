const getVideojuegos = async () => {

    let page = Math.floor(Math.random() * 20) + 1; 
    console.log(page);
    const videojuegos = await fetch(`https://api.rawg.io/api/games?key=4c8396ebdb16407383b027c49039f3f8&page=${page}`,
      {
        method: "GET",
      }
    )
    .then(res => res.json())
    .then((data) => data.results)
    return videojuegos;
}

const  getNuevos = async () => {

}

const getGeneros = async () => {

};

const getCoincidenciaNombre = async () => {

};


const getOferats = async () => {

}

