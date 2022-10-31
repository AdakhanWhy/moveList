let API = 'https://www.omdbapi.com/?apikey=b6003d8a&s=All';
let moveList = document.querySelector('.moveList');
console.log(moveList);
fetch(API).then(unpacked => unpacked.json()).then(data =>{
    data.Search.forEach(element => {
        let div = document.createElement('div');
        console.log(element);
        div.innerHTML = `
        <img src="${element.Poster}" alt="">
        <h2>${element.Title}</h2>
        <p>${element.Year}</p>
        `;
        moveList.append(div);
    });
})