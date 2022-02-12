import * as React from "react";

import { PlasmicLogin } from "../components/plasmic/plasmic_whats_app_clone/PlasmicLogin";
import enforceUnAuth from "../lib/auth/enforceUnAuth";

function Login() {
  return (
    <PlasmicLogin/>
  );
}

export const getServerSideProps = enforceUnAuth()

export default Login;
