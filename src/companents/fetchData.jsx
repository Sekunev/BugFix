import axios from "axios";

export const getData = async ({ pageParam = 0 }) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${pageParam}`
  );

  return response.json();

  // try {
  //   const { data } = await axios.get(
  //     `https://rickandmortyapi.com/api/character/?page=${pageParam}`
  //   );

  //   return data;
  // } catch (error) {
  //   console.log(error);
  // }
};
