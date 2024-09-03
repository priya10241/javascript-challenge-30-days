const url = 'https://movies-api14.p.rapidapi.com/shows';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'cf93807028msh27abcf84f2d7962p1e3a23jsne38a305806e5',
		'x-rapidapi-host': 'movies-api14.p.rapidapi.com'
	}
};

const funn = ()=>{
    return new Promise((resolve,reject)=>{
        fetch(url,options).then((msg)=>{
            msg.json().then((data)=>{
            resolve(data);
            })
        })
    })
}

funn().then((msg)=>{
    console.log(msg);
    let containMovies = document.querySelector("#containMovies");
    let btn = document.querySelector("#btn");
    btn.addEventListener('click',()=>{
        containMovies.innerText = "";
        let inputMovie = document.querySelector("#inputMovie");
        let searchedMovie = inputMovie.value;
        console.log(searchedMovie);
        console.log(msg['movies'][0]);
    for(let i of msg['movies']){
        if((i['original_title']).includes(searchedMovie)){
            let div = document.createElement('div');
            let movieName = document.createElement('div');
            let moviePictureDiv = document.createElement('div');
            let movieLink = document.createElement('img');
            movieName.innerText = i['original_title'];
            movieName.style.fontSize = "50px";
            movieLink.src = i['backdrop_path']
            movieLink.style.height = "800px";
            movieLink.style.width = "690px";
            moviePictureDiv.style.display = "flex";
            moviePictureDiv.style.height = "900px";
            moviePictureDiv.style.width = "700px";
            moviePictureDiv.style.flexDirection = "column";
            moviePictureDiv.style.justifyContent = "flex-start";
            div.style.display = "inline-block";
            movieLink.addEventListener('mouseover',()=>{
                movieLink.style.transition = "width 1s ease";
                movieLink.style.transition = "height 1s ease";
                movieLink.style.width = "680px";
                movieLink.style.height = "790px";
            })
            movieLink.addEventListener('mouseout',()=>{
                movieLink.style.transition = "width 1s ease";
                movieLink.style.transition = "height 1s ease";
                movieLink.style.width = "690px";
                movieLink.style.height = "800px";
            })
            div.style.height = "1100px";
            div.style.width = "700px";
            let btn1 = document.createElement('button');
            btn1.innerText = "More Info";
            let btn2 = document.createElement("button");
            btn2.innerText = "Reduce Info";
            btn2.disabled = true;
            let overView= document.createElement('p');
            let year = document.createElement('p');
            let genres = document.createElement('p');
            year.style.color = "pink";
            year.style.fontSize = "30px";
            year.style.display="inline-block";
            genres.style.color = "pink";
            genres.style.fontSize = "30px";
            genres.style.display="inline-block";
            btn1.addEventListener('click',()=>{
                overView.innerText = i['overview'];
                year.innerText = `Release Year : ${i['first_aired']}`;
                genres.innerText = i['genres'][0];
                btn1.disabled = true;
                btn2.disabled = false;
            })
            btn1.style.fontSize = "40px";
            div.appendChild(movieName);
            moviePictureDiv.appendChild(movieLink);
            div.appendChild(moviePictureDiv);
            div.appendChild(btn1);
            moviePictureDiv.appendChild(overView);
            moviePictureDiv.appendChild(year);
            moviePictureDiv.appendChild(genres);
            overView.innerText = "";
            year.innerText = "";
            genres.innerText = "";
            btn2.addEventListener('click',()=>{
                overView.innerText = "";
                year.innerText = "";
                genres.innerText = "";
                btn1.disabled = false;
                btn2.disabled = true;
            })
            btn2.style.fontSize = "40px";
            btn2.style.paddingLeft = "10px";
            btn2.style.marginLeft = "10px";
            div.appendChild(btn2);
            containMovies.appendChild(div);
        }
    }
    })
})
