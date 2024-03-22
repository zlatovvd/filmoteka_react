import css from './NotFound.module.css';
import { Link } from 'react-router-dom';
import image from '../../images/404.jpg';

const NotFound = () => {
  return (
    <div className={css.card}>
      <div className={css.notFoundMessage}>
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>Sorry, we couldn’t find the page you ‘re looking for </p>
        <Link to="/" className={css.notFoundLink}>
          Back to home{' '}
        </Link>
      </div>
      <div className={css.notFoundImage}>
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default NotFound;
