import * as React from "react";

import { PlasmicHome } from "../components/plasmic/plasmic_whats_app_clone/PlasmicHome";
import enforceAuth from "../lib/auth/enforceAuth";

function Home({user, ...props}) {
  return (
    <PlasmicHome
      sidebar={{
        user
      }}
    />
  );
}

export const getServerSideProps = enforceAuth()

export default Home;
