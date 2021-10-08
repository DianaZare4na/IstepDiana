const numberOfFilm = promt("Сколько фильмов вы уже посмотрели?", "");
const personaLMovieDB = {
	count: numberOfFilm,
	movies:{},
	actors:{},
	genres:[],
	privat: false
};



for(let i = 0; i = 2; i++){
const a = prompt("Один из последних просмотренных фильмрв?", ""),
		b = prompt("На сколько оцените его?", "");
	if(a != null && b != null && a != '' && b != '' && a.length < 50){
		personaLMovieDB.movies[a] = b;
		console.log('done');
		}else{
			console.log('error');
			i--;
		}
	}

	if(personaLMovieDB.count < 10){
		console.log('Просмотрено довольно мало фильмов');
	} else if(personaLMovieDB.count >= 10 && personaLMovieDB.count < 30){
		console.log('Вы классный зритель');
	} else if(personaLMovieDB.count >= 30){
		console.log('Вы киноман');
	}else{
		console.log('Произошла ошибка');
	}
	

console.log(personaLMovieDB);