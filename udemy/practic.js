const numberOfFilm = +promt("Сколько фильмов вы уже посмотрели?", "");
const personaLMovieDB = {
	count: numberOfFilm,
	movies:{},
	actors:{},
	genres:[],
	privat: false
};

const a = prompt("Один из последних просмотренных фильмрв?", ""),
		b = prompt("На сколько оцените его?", ""),
		c = prompt("Один из последних просмотренных фильмрв?", ""),
		d = prompt("На сколько оцените его?", "");

personaLMovieDB.movies[a] = b;
personaLMovieDB.movies[c] = d;

console.log(personaLMovieDB);