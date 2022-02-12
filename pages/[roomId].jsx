import * as React from "react";

import { PlasmicRoomChat } from "../components/plasmic/plasmic_whats_app_clone/PlasmicRoomChat";
import enforceAuth from "../lib/auth/enforceAuth";

function RoomChat({user, ...props}) {
  return (
    <PlasmicRoomChat
      sidebar={{
        user
      }}
    />
  );
}

export const getServerSideProps = enforceAuth()

export default RoomChat;
