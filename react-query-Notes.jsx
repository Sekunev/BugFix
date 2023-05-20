///***React-Query***///

https://react-query-v3.tanstack.com/overview

1- yarn add react-query  --> // react-query Kur.
2- import { QueryClient, QueryClientProvider } from 'react-query'  // --> app.js veya index.js'e ekle.
3- const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      suspense: true,
    },
  },
});  // --> index.js'e ekle.
// Başka bir sayfaya gidildiğinde gereksiz render önüne geçmek için refetchOnMount: false refetchOnWindowFocus: false, parametrelerini ekledik.

4-   
<QueryClientProvider client={client}>
    <React.Suspense>
      <App />
    </React.Suspense>
  </QueryClientProvider> --> // index.js'e sarmalama işlemini yap.
5- // Sonrasında veri kaynagına gidip veri çakmek yeterli.
6- import { useInfiniteQuery } from "react-query";
// İmport işlemi sonrası veri durumuna göre aşağıdaki verileri düzenle.

const getData = async (page = 1) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?&page=${page}`
  );

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

      if (!fetching && scrollHeight - scrollTop <= clientHeight * 2) {
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

7- yarn add moment --> Tarih saat formatlamak için. 

8- istenirse axios için ayrı bir dosya açılarak ve import gerçekleştirilerek getData 2. parametre olarak verilerek 6. md'den aşağıdaki hale getirilebilir.
  const { isLoading, error, data } = useQuery("news", getData);

9- loading="lazy" sayfanın hızlı yüklenmesini sağlıyor.
