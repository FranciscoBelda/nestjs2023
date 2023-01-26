import {Imdb} from "../../interfaces/movie/Imdb";

export class MovieDto {

    imdb: Imdb;
    _id: string;
    title: string;
    year: number;
    director: string;
    plot: string;
    poster: string;
    genres: string[];
}
