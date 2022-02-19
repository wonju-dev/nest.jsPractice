import { Injectable } from '@nestjs/common';
import { ImovieRepository } from './interfaces';
import { Tmovie } from './types';

@Injectable()
export class MovieRepository implements ImovieRepository {
  searchAllMovies = (): Promise<Tmovie[]> => {
    return new Promise((res) => {
      setTimeout(() => {
        const searchResult: Tmovie[] = Object.values(DB_MOVIE);
        res(searchResult);
      }, 3000);
    });
  };

  searchMovieByTitle = (title: string): Promise<Tmovie[]> => {
    return new Promise((res) => {
      setTimeout(() => {
        const movies: Tmovie[] = Object.values(DB_MOVIE);
        const searchResult: Tmovie[] = movies.filter((movie: Tmovie) => {
          if (movie.title.includes(title)) return movie;
        });
        res(searchResult);
      }, 3000);
    });
  };

  searchMovieById = (id: string): Promise<Tmovie> => {
    return new Promise((res) => {
      setTimeout(() => {
        const movie: Tmovie = DB_MOVIE[id];
        res(movie);
      }, 3000);
    });
  };
}

const DB_MOVIE = {
  1: {
    title: 'title1',
    pusblishedDate: new Date(),
    director: {
      name: 'director1',
      birth: new Date(),
      description: 'desc1',
    },
  },
  2: {
    title: 'title2',
    pusblishedDate: new Date(),
    director: {
      name: 'director2',
      birth: new Date(),
      description: 'desc2',
    },
  },
  3: {
    title: 'title3',
    pusblishedDate: new Date(),
    director: {
      name: 'director3',
      birth: new Date(),
      description: 'desc3',
    },
  },
  4: {
    title: 'title11',
    pusblishedDate: new Date(),
    director: {
      name: 'director11',
      birth: new Date(),
      description: 'desc11',
    },
  },
};
