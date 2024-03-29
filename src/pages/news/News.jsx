import React, { useEffect } from "react";
import Characters from "./Characters";
import { Content, NewsContent, NavTitle, NewsUpper, Title } from "./News.style";
import { useInfiniteQuery } from "react-query";
import { getData } from "../../companents/fetchData";

const News = () => {
  const { data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } =
    useInfiniteQuery("news", ({ pageParam = 1 }) => getData(pageParam), {
      getNextPageParam: (lastPage, allPages) => {
        const maxPages = lastPage.info.count;
        const nextPage = allPages.length + 1;
        return nextPage <= maxPages ? nextPage : undefined;
      },
    });

  useEffect(() => {
    let fetching = false;
    const onScroll = async (event) => {
      const { scrollHeight, scrollTop, clientHeight } =
        event.target.scrollingElement;

      if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.5) {
        fetching = true;
        if (hasNextPage) await fetchNextPage();
        fetching = false;
      }
    };

    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
    // eslint-disable-next-line
  }, []);

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
        {data.pages?.map((group, i) => (
          <React.Fragment key={i}>
            {group.results?.map((character) => (
              <Characters key={character.id} character={character} />
            ))}
          </React.Fragment>
        ))}
      </NewsUpper>
      <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
    </NewsContent>
  );
};

export default News;
