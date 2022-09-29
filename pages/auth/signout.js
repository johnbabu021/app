import useRequest from "../../hooks/use-request";
import Router from "next/router";
import { useEffect } from "react";
export default function SingOut() {
  const { doRequest } = useRequest({
    url: "/api/users/signout",
    method: "post",
    body: {},
    onSucces: () => {
      Router.push("/");
    },
  });
  useEffect(() => {
    doRequest();
  }, []);
  return <div>Signing you out</div>;
}