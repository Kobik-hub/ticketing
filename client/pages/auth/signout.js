import Router from "next/router";
import { useEffect, userEffect } from "react";
import userRequest from "../../hooks/use-request";

const SignOut = () => {
  const { doRequest } = userRequest({
    url: "/api/users/signout",
    method: "post",
    body: {},
    onSuccess: () => Router.push("/"),
  });

  useEffect(() => {
    doRequest();
  }, []);
  return <div>Signing you out...</div>;
};

export default SignOut;
