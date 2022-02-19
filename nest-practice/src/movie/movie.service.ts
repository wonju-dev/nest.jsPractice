import { Injectable } from '@nestjs/common';
import { ImovieService } from './interfaces';
import { MovieRepository } from './movie.repository';
import { Tmovie } from './types';

@Injectable()
export class MovieService implements ImovieService {
  constructor(private readonly MovieRepository: MovieRepository) {
    this.MovieRepository = MovieRepository;
  }

  async getAllMovies(): Promise<Tmovie[]> {
    const movies: Tmovie[] = await this.MovieRepository.searchAllMovies();
    return movies;
  }

  async getMovieByTitle(title: string): Promise<Tmovie[]> {
    const searchResult: Tmovie[] =
      await this.MovieRepository.searchMovieByTitle(title);
    return searchResult;
  }

  async getMovieById(id: string): Promise<Tmovie> {
    const searchResult: Tmovie = await this.MovieRepository.searchMovieById(id);
    return searchResult;
  }
}
