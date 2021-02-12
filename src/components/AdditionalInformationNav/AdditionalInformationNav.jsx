import { Link, withRouter } from "react-router-dom";
import s from './AdditionalInformationNav.module.css';

const AdditionalInformationNav = ({match, location}) => {
  const { url } = match;
  
  return (
    <div className={s.container}>
      <p>Additional information</p>
      <ul className={s.list}>
        <li>
          <Link className={s.link}
            to={{
              pathname: `${url}/cast`,
              state: (location)
            }}>
            Cast
          </Link>
        </li>
        <li>
          <Link className={s.link} to={`${url}/reviews`}>Reviews</Link>
        </li>
      </ul>
    </div>
  );
}

export default withRouter(AdditionalInformationNav);