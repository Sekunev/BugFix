export const getData = async (page = 1) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?&page=${page}`
  );

  return response.json();
};
