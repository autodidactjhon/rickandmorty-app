import { useQuery } from 'react-query';
import { fetchCharacters, fetchCharacter, fetchFilterCharacters } from '../api/rickandmortyApi'

export const useCharacters = (page) => {
  const query = useQuery(
    ['characters', page],
    () => fetchCharacters(page)
  );

  return query;
}

export const useCharacter = (id) => {
  const query = useQuery(
    ['characters', id],
    () => fetchCharacter(id)
  );

  return query;
}

export const useFilterCharacter = (name, specie, status) => {
  const query = useQuery(
    ['characters', name, specie, status],
    () => fetchFilterCharacters(name, specie, status)
  );

  return query;
}
