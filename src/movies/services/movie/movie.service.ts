import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import { Model } from 'mongoose';
import {Movie} from "../../interfaces/movie/movie.interface";
import {MovieDto} from "../../dto/movie.dto/movie.dto";

@Injectable()
export class MovieService {
    constructor(@InjectModel('Movie') private movieModel: Model<Movie>) {
    }
    async create(movieDto: MovieDto): Promise<Movie>{
        const movie = new this.movieModel(movieDto);
        return movie.save();
    }

    async getMovies(): Promise<Movie[]> {
        return this.movieModel.find();
    }

    async getMovie(idMovie: string): Promise<Movie> {
        return this.movieModel.findById(idMovie);
        // return this.movieModel.finOne({_id: idMovie});
    }

    async updateMovie(idMovie: string, movieDto: MovieDto): Promise<Movie>{
        return this.movieModel.findByIdAndUpdate(
            idMovie,
            {$set: movieDto},
            {new: true});
    }

    async deleteMovie(idMovie: string): Promise<any>{
        return this.movieModel.findByIdAndDelete(idMovie);
    }
}
