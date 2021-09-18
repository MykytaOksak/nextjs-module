import AppProps from "next/app"
import Router from 'next/router'
import React from "react"

export default function withPrivateRoute(WrappedComponent: any) {
  return function Func(props: AppProps) {
    // checks whether we are on client / browser or server.
    if (typeof window !== "undefined") {
      const accessToken: string|null = localStorage.getItem("user");

      // If there is no access token we redirect to "/" page.
      if (!accessToken) {
        Router.push("/login");
        return null;
      }

      // If this is an accessToken we just render the component that was passed with all its props
      return <WrappedComponent {...props} />;
    }

    // If we are on server, return null
    return null;
  };
};
