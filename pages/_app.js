import Header from "../Components/Header";
import "../styles/globals.css";
import buildClient from "./api/build-client";

function MyApp({ Component, pageProps, currentUser }) {
  return (
    <div>
      <Header currentUser={currentUser} />
      <Component {...pageProps} currentUser={currentUser} />
    </div>
  );
}
MyApp.getInitialProps = async (context) => {
  const { data } = await buildClient(context.ctx).get("/api/users/currentuser");
  let pageProps = {};
  if (context.Component.getInitialProps) {
    pageProps = context.Component.getInitialProps(context.ctx);
  }
  return {
    pageProps,
    currentUser: data.currentUser,
  };
};

export default MyApp;
