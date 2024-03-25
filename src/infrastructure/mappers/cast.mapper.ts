import type {MovieDBCast} from '../interfaces/movie-db.responses.ts';
import type {Cast} from '../../core/entities/cast.entity.ts';

export class CastMapper {
  static fromMovieDBCastToEntity(actor: MovieDBCast): Cast {
    return {
      id: actor.id,
      name: actor.name,
      character: actor.character ?? 'No Character',
      avatar: actor.profile_path
        ? `https:image.tmdb.org/t/p/w500${actor.profile_path}`
        : 'https:i.stack.imgur.com/l60Hf.png',
    };
  }
}
