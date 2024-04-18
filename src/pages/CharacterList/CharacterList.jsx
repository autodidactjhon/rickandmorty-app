import { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import Pagination from '../../components/Pagination/Pagination';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import { useCharacters, useFilterCharacter } from '../../hooks/useCharacters';
import './CharacterList.css';

const CharacterList = () => {
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({ name: '', species: '', status: '' });
  const [initLoad, setInitLoad] = useState(true);

  const {
    data: charactersData,
    error: charactersError,
    isLoading: charactersLoading
  } = useCharacters(page);

  const {
    data: filteredData,
    error: filteredError,
    isLoading: filteredLoading
  } = useFilterCharacter(filters.name, filters.species, filters.status);

  const handleSearch = ({ name, species, status, isInitLoad }) => {
    setFilters({ name, species, status });
    setInitLoad(isInitLoad);
  };

  const data = initLoad ? charactersData : filteredData;
  const isLoading = initLoad ? charactersLoading : filteredLoading;
  const error = initLoad ? charactersError : filteredError;

  return (
    <div>
      <Navbar onSearch={handleSearch} />
      {isLoading ? (
        <Loading />
      ) : (
        <>
        <div className='characters-list'>
          {data?.results?.map(character => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
        
        {initLoad && (
          <Pagination
            currentPage={page}
            onPageChange={setPage}
            hasNextPage={data.info.next !== null}
          />
        )}
      </>
      )}
      {error && <Error error={error}/>}
    </div>
  );
};

export default CharacterList;
