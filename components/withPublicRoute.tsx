import { AppProps } from "next/app";
import Router from 'next/router'
import React from "react";

const withPublicRoute = (WrappedComponent: any) => {
  return function Func(props: AppProps) {
    // checks whether we are on client / browser or server.
    if (typeof window !== "undefined") {
      const accessToken: string|null = localStorage.getItem("user");
      
      // If there is access token we redirect to "/" page.
      if (accessToken) {
        Router.push("/");
        return null;
      }

      // If there is no accessToken we just render the component that was passed with all its props
      return <WrappedComponent {...props} />;
    }

    // If we are on server, return null
    return null;
  };
};

export default withPublicRoute