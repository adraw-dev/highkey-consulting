import "../styles/globals.css";
import Layout from "./components/layout/layout";

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;