import { Tmovie } from './types';

interface ImovieController {
  getAllMovies: () => Promise<Tmovie[]>;
  searchByTitle: (title: string) => Promise<Tmovie[]>;
  searchById: (id: string) => Promise<Tmovie>;
}
interface ImovieRepository {
  searchAllMovies: () => Promise<Tmovie[]>;
  searchMovieByTitle: (title: string) => Promise<Tmovie[]>;
  searchMovieById: (id: string) => Promise<Tmovie>;
}
interface ImovieService {
  getAllMovies: () => Promise<Tmovie[]>;
  getMovieByTitle: (title: string) => Promise<Tmovie[]>;
  getMovieById: (id: string) => Promise<Tmovie>;
}

export { ImovieController, ImovieService, ImovieRepository };
