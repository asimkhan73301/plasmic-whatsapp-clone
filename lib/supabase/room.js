import { useMutation, useQuery, useQueryClient } from "react-query"

import { supabase } from "."

const createChatRoom = async ({roomName}) => {
    const {error} = await supabase
    .from("chat_rooms")
    .insert([
        {room_name: roomName}
    ])

    if(error) throw error
}

export const useCreateChatRoom = () => {
    const queryClient = useQueryClient()
    return useMutation(
        ({roomName}) => createChatRoom({roomName}),
        {
            onSuccess: () => {
                queryClient.refetchQueries("chat-rooms-list")
            }
        }
    )
}

export const useGetChatRooms = ({searchQuery}) => {
    return useQuery(
        `chat-rooms-list-${searchQuery}`,
        async () => {
            const {data, error} = await supabase
            .from("chat_rooms")
            .select("*")
            .ilike("room_name", `%${searchQuery}%`)

            if(error)
             throw error
            
            return data
        },
    )
}

export const useGetChatRoomDetails = ({roomId}) => {
    return useQuery(
        `chat-rooms-${roomId}`,
        async () => {
            const {data, error} = await supabase
            .from("chat_rooms")
            .select("*")
            .eq("id", roomId)
            .single()

            if(error)
             throw error
            
            return data
        },
        {
            enabled: !!roomId
        }
    )
}