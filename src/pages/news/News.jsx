import React, { useEffect } from "react";
import Characters from "./Characters";
import { Content, NewsContent, NavTitle, NewsUpper, Title } from "./News.style";
import { useInfiniteQuery } from "react-query";
import { getData } from "../../companents/fetchData";

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

  const { data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } =
    useInfiniteQuery("news", getData, {
      getNextPageParam: (_lastPage, allPages) => {
        if (allPages.length < 3) {
          return allPages.length + 1;
        } else {
          return undefined;
        }
      },
    });

  console.log("data :>> ", data);
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
        {data?.pages.length > 0 &&
          data.pages?.map((group, i) => (
            <React.Fragment key={i}>
              {group.results.length > 0 &&
                group.results?.map((character) => (
                  <Characters key={character.id} character={character} />
                ))}
            </React.Fragment>
          ))}
      </NewsUpper>
      <div>
        <button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? "Loading more..."
            : hasNextPage
            ? "Daha Fazla"
            : "Nothing more to load"}
        </button>
      </div>
      <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
    </NewsContent>
  );
};

export default News;
