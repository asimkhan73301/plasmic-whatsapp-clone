import * as React from "react";

import { useCreateChatRoom, useGetChatRooms } from "../lib/supabase/room";

import ChatListItem from "./ChatListItem";
import { PlasmicSidebar } from "./plasmic/plasmic_whats_app_clone/PlasmicSidebar";
import { supabase } from "../lib/supabase";
import { useDebounce } from "usehooks-ts";
import { useGetUserProfile } from "../lib/supabase/profiles";
import { useRouter } from "next/router";

function Sidebar_({user, roomId, ...props}, ref) {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = React.useState("")
  const searchQueryDebounced = useDebounce(searchQuery, 500)

  const {data: userProfile} = useGetUserProfile(user?.id)
  const {data: chatRoomsList, isLoading: chatRoomsListLoading} = useGetChatRooms({searchQuery: searchQueryDebounced})
  const createChatRoomMutation = useCreateChatRoom()

  let username = user?.email
  if(userProfile?.first_name || userProfile?.last_name){
    username = `${userProfile?.first_name} ${userProfile?.last_name}`
  }

  return (
    <PlasmicSidebar
      root={{ ref }}
      {...props}
      logoutIcon={{
        onClick: async () => {
          await supabase.auth.signOut()
          router.replace("/login")
        }
      }}
      username={username}
      userAvatar={{
        isEmpty: !userProfile?.avatar_url,
        url: userProfile?.avatar_url,
        prefixText: (
          userProfile?.first_name && userProfile?.first_name[0].toUpperCase() ||
          userProfile?.last_name && userProfile?.last_name[0].toUpperCase()
        )
      }}
      userProfileWrapper={{
        onClick: () => {
          router.push("/profile")
        }
      }}
      addNewChatWrapper={{
        onClick: () => {
          const roomName = prompt("Please enter the new chat room name")
          if(!roomName) return

          createChatRoomMutation.mutate({roomName})                    
        }
      }}
      chatList={{
        isLoading: chatRoomsListLoading,
        listWrapper: {
          wrapChildren: (children) => !chatRoomsList?.length ? null : (
            chatRoomsList.map(
              ({room_name, id}) => (
                <ChatListItem
                  key={id}
                  roomName={room_name}
                  lastMessageContent=""
                  avatar={{
                    prefixText: room_name[0]?.toUpperCase()
                  }}
                  isSelected={id === parseInt(roomId, 10)}
                  onClick={() => {
                    router.replace(`/${id}`)
                  }}
                />
              )
            )
          )
        }
      }}
      searchRoomInput={{
        value: searchQuery,
        onChange: e => setSearchQuery(e.target.value)
      }}
    />
  );
}

const Sidebar = React.forwardRef(Sidebar_);

export default Sidebar;
