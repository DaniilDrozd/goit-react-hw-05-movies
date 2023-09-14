import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import css from './Layout.module.css';

export const Layout = () => {
  return (
    <div>
      <ul className={css.Name}>
        {' '}
        <li>
          <Link to="/" className={css.Link}>
            {' '}
            Home{' '}
          </Link>
        </li>
        <li>
          <Link to="/Movies" className={css.Link}>
            Movies
          </Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
