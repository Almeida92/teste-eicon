import Filme from './filme.model';

export default class ResponseFilmes {
  page: number;
  total_results: number;
  total_pages: number;
  results: Array<Filme>;
}