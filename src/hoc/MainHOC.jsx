import React from "react";
import SecretComponent from "./SecretComponent";
import withAuth from "./withAuth";
//wrap a component the withAuth HOC to add a secret state
const AuthenticatedComponent1 = withAuth(SecretComponent, true);
const AuthenticatedComponent2 = withAuth(SecretComponent, false);
export default function MainHOC() {
  return (
    <>
      <AuthenticatedComponent1 />
      <hr />
      <AuthenticatedComponent2 />
    </>
  );
}
