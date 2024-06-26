import { Link } from 'react-router-dom';
import "./error.scss";

function Error() {

  return (
    <div className="main-error">
      <h1 className='h1-about'>404</h1>
      <p className="error-message">Oops! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="error-redirect">Retourner sur la page d'acceuil</Link>
    </div>
  );
}

export default  Error;