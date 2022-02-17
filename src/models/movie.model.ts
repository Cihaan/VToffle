export default class Movie {
    id!: number;
    title!: string;
    poster_path!: string;
    release_date!: string;
    runtime!: number;
    overview!: string;
    added_date!: string;
    backdrop_path?: string; //TODO: mettre l'attribut en ! au lieu de ?
    vote_average!: number;
    person_vote?: number;
  }
  