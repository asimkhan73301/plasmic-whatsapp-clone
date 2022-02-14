import * as React from "react";
import * as moment from "moment"

import { useCreateChatMessage, useGetMessagesByRoom } from "../lib/supabase/messages";

import ChatMessage from "./ChatMessage";
import { PlasmicChat } from "./plasmic/plasmic_whats_app_clone/PlasmicChat";
import { getUserProfile } from "../lib/supabase/profiles";
import { supabase } from "../lib/supabase";
import { useGetChatRoomDetails } from "../lib/supabase/room";

const UserProfileCache = {}

function Chat_({roomId, ...props}, ref) {
  const scrollRef = React.useRef()
  const [newMessage, setNewMessage] = React.useState("")
  const {data: roomDetails} = useGetChatRoomDetails({roomId})
  const {data: messages, refetch: fetchMessages} = useGetMessagesByRoom({roomId})
  const createChatMessageMutation = useCreateChatMessage({roomId})
  const user = supabase.auth.user()

  React.useEffect(() => {
    if(!scrollRef.current) return
  
    setTimeout(() => {
      scrollRef.current.scrollIntoView({behavior: "smooth"})
    }, 300)
  }, [messages?.length])

  React.useEffect(() => {
    const subscription = supabase.from("messages").on("INSERT", (payload) => {
      fetchMessages()
    }).subscribe()

    console.log("Subscribed to Messages Changes")

    return () => supabase.removeSubscription(subscription)
  }, [])

  const createNewMessage = () => {
    try{
      createChatMessageMutation.mutate({
        content: newMessage,
        sender: user.id,
      })
    }catch(err){
      console.log({err})
    }finally{
      setNewMessage("")
    }
  }

  if(!roomDetails) return null

  return (
    <PlasmicChat
      root={{ ref }}
      {...props}
      roomName={roomDetails?.room_name}
      roomAvatar={{
        prefixText: roomDetails.room_name[0].toUpperCase()
      }}
      body={{
        wrapChildren: (children) => {
          if(!messages?.length) return null

          return (
            <React.Fragment>
            {
              messages.map(message => (
                <ChatMessage
                  key={message.id}
                  avatar={{
                    url: message.avatar_url,
                    isEmpty: !message.avatar_url,
                    prefixText: (
                      message.first_name && message.first_name[0].toUpperCase() ||
                      message.last_name && message.last_name[0].toUpperCase()
                    )
                  }}
                  isSend={message.sender_id === user.id}
                  username={`${message.first_name} ${message.last_name}`}
                  message={message.content}
                  createdAt={moment(message.created_at).fromNow()}
                />
              ))
            }
            <span ref={scrollRef}></span>
            </React.Fragment>
          )
        }
      }}
      messageInput={{
        value: newMessage,
        onChange: (e) => setNewMessage(e.target.value),
        onKeyDown: (e) => {
          if(e.keyCode === 13) {
            createNewMessage()
          }
        }
      }}
      sendButton={{
        onClick: () => {
          createNewMessage()
        }
      }}
    />
  );
}

const Chat = React.forwardRef(Chat_);

export default Chat;
