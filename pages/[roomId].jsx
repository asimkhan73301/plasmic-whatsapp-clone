import * as React from "react";

import { PlasmicRoomChat } from "../components/plasmic/plasmic_whats_app_clone/PlasmicRoomChat";
import enforceAuth from "../lib/auth/enforceAuth";
import {useRouter} from "next/router"

function RoomChat({user, ...props}) {
  const router = useRouter()
  const {roomId} = router.query

  return (
    <PlasmicRoomChat
      sidebar={{
        user,
        roomId
      }}
      chat={{
        roomId
      }}
    />
  );
}

export const getServerSideProps = enforceAuth()

export default RoomChat;
