import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {MovieService} from "./services/movie/movie.service";
import {MovieDto} from "./dto/movie.dto/movie.dto";

@Controller('api/movies')
export class MoviesController {
    constructor(private readonly movieService: MovieService) {
    }

    @Post('')
    async create(@Body() movieDto: MovieDto){
        return this.movieService.create(movieDto);
    }

    @Get('')
    async getMovies() {
        return await this.movieService.getMovies();
    }

    @Get('movie/:id')
    async getMovie(@Param('id')id: string){
        return this.movieService.getMovie(id);
    }

    @Put('/:id')
    async updateMovie(
        @Param('id')id: string,
        @Body() movieDto: MovieDto){
        return this.movieService.updateMovie(id, movieDto);
    }

    @Delete('/:id')
    async deleteMovie(@Param('id')id: string){
        return this.movieService.deleteMovie(id);
    }
}
