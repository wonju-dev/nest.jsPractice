import { Controller, Get, Param, Query } from '@nestjs/common';
import { MovieService } from './movie.service';
import { Tmovie } from './types';

import { ImovieController } from './interfaces';

@Controller('movies')
export class MovieController implements ImovieController {
  constructor(private readonly MovieService: MovieService) {
    this.MovieService = MovieService;
  }

  @Get()
  async getAllMovies(): Promise<Tmovie[]> {
    const movies = await this.MovieService.getAllMovies();
    return movies;
  }

  @Get('search')
  async searchByTitle(@Query('title') title: string): Promise<Tmovie[]> {
    const movies = await this.MovieService.getMovieByTitle(title);
    return movies;
  }

  @Get(':id')
  async searchById(@Param('id') id: any): Promise<Tmovie> {
    console.log(id instanceof Number);
    const movie = await this.MovieService.getMovieById(id);
    return movie;
  }
}
