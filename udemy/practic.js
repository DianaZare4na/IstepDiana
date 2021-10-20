let numberOfFilm;

function start() {
	numberOfFilm = +promt("Сколько фильмов вы уже посмотрели?", "");
	while (numberOfFilm == '' || numberOfFilm == null || isNaN(numberOfFilm)) {
		numberOfFilm = +promt("Сколько фильмов вы уже посмотрели?", "");
	}
}
start();

const personaLMovieDB = {
	count: numberOfFilm,
	movies:{},
	actors:{},
	genres:[],
	privat: false
};





	function remembermyFilms() {
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
	}
	remembermyFilms();

	
	function detectpersonalLevel() {
		if(personaLMovieDB.count < 10){
			console.log('Просмотрено довольно мало фильмов');
		} else if(personaLMovieDB.count >= 10 && personaLMovieDB.count < 30){
			console.log('Вы классный зритель');
		} else if(personaLMovieDB.count >= 30){
			console.log('Вы киноман');
		}else{
			console.log('Произошла ошибка');
		}
	}
	detectpersonalLevel();

	function showMyDB(hidden) {
		if(!hidden){
			console.log(personaLMovieDB);
		}
	}
	showMyDB(personaLMovieDB.privat)
	function writeYourGenres() {
		
	}
	

console.log(personaLMovieDB);