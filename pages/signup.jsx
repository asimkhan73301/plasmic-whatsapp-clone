import * as React from "react";

import { PlasmicSignup } from "../components/plasmic/plasmic_whats_app_clone/PlasmicSignup";
import enforceUnAuth from "../lib/auth/enforceUnAuth";

function Signup() {
  return (
    <PlasmicSignup/>
  );
}

export const getServerSideProps = enforceUnAuth()

export default Signup;
