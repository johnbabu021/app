import axios from "axios";
import { useEffect } from "react";
import buildClient from "./api/build-client";

export default function Home({ currentUser }) {
  console.log(currentUser);
  return <div>{currentUser ? <h1>singed in</h1> : <h1>singed out</h1>}</div>;
}

Home.getInitialProps = async ({ req, res }) => {
  const { data } = await buildClient({ req }).get("/api/users/currentuser");
  
  return data;
};
