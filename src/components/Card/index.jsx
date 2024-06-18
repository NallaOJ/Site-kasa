import './card.css';
import { useNavigate } from 'react-router-dom';

function Card({ id, title, cover }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/logement/${id}`);
  };

  return (
    <div className="card-cover" data-id={id} onClick={handleClick}>
      <img src={cover} alt={`${title} cover`} />
      <div className="card-name">
        {title}
      </div>
    </div>
  );
}

export default Card;
