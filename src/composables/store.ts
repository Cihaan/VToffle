import { reactive, readonly } from "vue";
import Movie from "../models/movie.model";
import Show from "../models/show.model";

const store = reactive({
  movies: [],
  shows: [],
  to_watch: [],
  watched: [],
  fmovies: [],
  fshows: [],
});

const getShows = function () {
  // store.movies = FETCH SHOWS DE LA BDD
};

const getMovies = function () {
  // store.shows = FETCH MOVIES DE LA BDD
};

const getFShows = function () {
  return store.fshows
};

const getFMovies = function () {
  return store.fmovies
};

const getToWatch = function () {
  // store.fmovies
};

const getWatched = function () {};

const search = function (filter: string) {
  if (filter.length === 0) {
    store.fmovies.splice(0,store.fmovies.length)
    store.fshows.splice(0,store.fshows.length)
  }

  let param = filter.replace(" ", "-");
  let request: string = `https://api.themoviedb.org/3/search/multi?api_key=2fde65142f762839db727f5e793ae40a&language=en-US&query=${param}&page=1&include_adult=false`;
  fetch(request)
    .then((response) => response.json())
    .then((res) => {
      store.fmovies = res["results"].filter((el: { [x: string]: string }) => {
        return el["media_type"] == "movie";
      });
      store.fshows = res["results"].filter((el: { [x: string]: string }) => {
        return el["media_type"] == "tv";
      });
    });
};

export default { store, search, getWatched, getToWatch, getShows, getMovies, getFMovies, getFShows };
