import { Link, withRouter } from "react-router-dom";
import s from './AdditionalInformationNav.module.css';

const AdditionalInformationNav = ({match, location}) => {
  const { url } = match;

  const previousLocation = location.state.from;
  
  return (
    <div className={s.container}>
      <p>Additional information</p>
      <ul className={s.list}>
        <li>
          <Link className={s.link}
            to={{
              pathname: `${url}/cast`,
              state: { from: previousLocation}
            }}>
            Cast
          </Link>
        </li>
        <li>
          <Link className={s.link}
            to={{
              pathname: `${url}/reviews`,
              state: { from: previousLocation}
            }}>Reviews</Link>
        </li>
      </ul>
    </div>
  );
}

export default withRouter(AdditionalInformationNav);