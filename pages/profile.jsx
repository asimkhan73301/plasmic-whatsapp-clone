import * as React from "react";

import { PlasmicProfile } from "../components/plasmic/plasmic_whats_app_clone/PlasmicProfile";
import enforceAuth from "../lib/auth/enforceAuth";

function Profile({...props}) {
  return (
    <PlasmicProfile />
  );
}


export const getServerSideProps = enforceAuth()

export default Profile;
