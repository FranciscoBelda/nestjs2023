import {Imdb} from "./Imdb";


export interface Movie {
    imdb: Imdb;
    _id: string;
    title: string;
    year: number;
    director: string;
    plot: string;
    poster: string;
    genres: string[];
}


