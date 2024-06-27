import './card.scss';

function Card({ title, pictures }) {

  return (
    <div className="card-cover">
      <img src={pictures} alt='' />
      <div className="card-name">
        {title}
      </div>
    </div>
  );
}

export default Card;
