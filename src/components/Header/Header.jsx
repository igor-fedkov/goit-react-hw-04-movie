import { NavLink } from 'react-router-dom';

import routes from '../../routes';

import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <nav>
        <NavLink className={s.link} activeClassName={s.activeLink} exact to={routes.home}>Home</NavLink>
        <NavLink className={s.link} activeClassName={s.activeLink} to={routes.movies}>Movies</NavLink>
      </nav>
    </header>
  )
}

export default Header;