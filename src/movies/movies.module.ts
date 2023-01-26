import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MovieService } from './services/movie/movie.service';
import {MongooseModule} from "@nestjs/mongoose";
import {MovieSchema} from "./schema/movie.schema/movie.schema";

@Module({
  imports: [
      MongooseModule.forFeature(
          [
              {
                name: 'Movie',
                schema: MovieSchema,
                collection: 'movies2023'}])
  ],
  controllers: [MoviesController],
  providers: [MovieService]
})
export class MoviesModule {}
