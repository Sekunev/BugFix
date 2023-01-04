import axios from "axios";
import React, { useEffect, useState } from "react";
import Characters from "./Characters";
import { Content, NewsContent, NavTitle, NewsUpper, Title } from "./News.style";
import { useQuery } from "react-query";

const News = () => {
  // const [characters, setCharacters] = useState([]);
  // const base_url = "https://rickandmortyapi.com/api/character";

  // const getData = async () => {
  //   try {
  //     const { data } = await axios(base_url);
  //     setCharacters(data.results);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // console.log(characters);

  // useEffect(() => {
  //   getData();
  // }, []);

  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch("https://rickandmortyapi.com/api/character").then((res) => res.json())
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  console.log("data :>> ", data.results);

  return (
    <NewsContent>
      <NavTitle>
        <Title>News</Title>
        <Content>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
          incidunt.
        </Content>
      </NavTitle>
      <NewsUpper>
        {data.results.length > 0 &&
          data.results?.map((character) => {
            return <Characters key={character.id} character={character} />;
          })}
      </NewsUpper>
    </NewsContent>
  );
};

export default News;
