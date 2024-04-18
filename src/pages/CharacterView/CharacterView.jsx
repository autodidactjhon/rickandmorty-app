import { useParams, Link } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import { useCharacter } from '../../hooks/useCharacters';
import './CharacterView.css';

const CharacterView = () => {
  const { id } = useParams();
  const { data, isError, isLoading } = useCharacter(id);

  if (isLoading) return <Loading />;
  if (isError) return <p>Error loading character.</p>;
  const { name, image, status, species, gender, origin, location } = data;

  return (
    <div className='character-view'>
      <h1 className='character-name' >{name}</h1>
      <div className='character-view-img'>
        <img src={image} alt={name} />
      </div>
      <div className='character-info'>
        <p>Status: {status}</p>
        <p>Species: {species}</p>
        <p>Gender: {gender}</p>
        <p>Origin: {origin.name}</p>
        <p>Last known location: {location.name}</p>
      </div>
      <Link to='/characters'>Go Back</Link>
    </div>
  );
}

export default CharacterView;
