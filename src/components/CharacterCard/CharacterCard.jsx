import { Link } from 'react-router-dom';
import './CharacterCard.css';

function CharacterCard({ character }) {
  const { image, name, species, id } = character;

  return (
    <div className='character-card'>
      <div className='character-img'>
        <img src={image} alt={name} />
      </div>
      <div className='character-info'>
        <span>{name}</span>
        <span>{species}</span>
        <Link to={`/rickandmorty-app/character/${id}`}>More info</Link>
      </div>
    </div>
  );
}

export default CharacterCard;
