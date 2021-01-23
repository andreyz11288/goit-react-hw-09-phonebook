import React from 'react';
import img from '../../img/error2-404.jpg';
import { NavLink, withRouter } from 'react-router-dom';
import s from './Render.module.css';

function Render({ movies, location }) {
  return (
    <>
      {movies.length > 0 && (
        <ul className={s.ul}>
          {movies.map(movie => (
            <li key={movie.id}>
              <NavLink
                className={s.link}
                to={{
                  pathname: `/movies/${movie.id}`,
                  state: {
                    from: {
                      pathname: `${location.pathname}${
                        location.search && location.search
                      }`,
                    },
                  },
                }}
              >
                {movie.backdrop_path ? (
                  <img
                    className={s.img}
                    alt="img"
                    height="150"
                    src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                  />
                ) : (
                  <img className={s.img} alt="img" height="150" src={img} />
                )}
                <p className={s.p}>{movie.original_title}</p>
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
export default withRouter(Render);
