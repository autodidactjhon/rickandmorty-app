import axios from 'axios';

const BASE_URL = 'https://rickandmortyapi.com/api';

export function fetchCharacters(page = 1) {
  return axios.get(`${BASE_URL}/character`, { params: { page } }).then(res => res.data);
}

export function fetchCharacter(id) {
  return axios.get(`${BASE_URL}/character/${id}`).then(res => res.data);
}

export function fetchFilterCharacters(name, species, status) {
  return axios.get(`${BASE_URL}/character`, { params: { name, species, status } }).then(res => res.data);
}
