import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       refetchOnMount: false,
//       refetchOnWindowFocus: false,
//     },
//   },
// });

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      suspense: true,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={client}>
    <React.Suspense>
      <App />
    </React.Suspense>
  </QueryClientProvider>
);
