import { useMutation, useQuery, useQueryClient } from "react-query"

import { supabase } from "."

export const useGetMessagesByRoom = ({roomId}) => {
    return useQuery(
        `room-${roomId}-messages-list`,
        async () => {
            const {data, error} = await supabase
            .rpc("get_messages", {room_id_input: parseInt(roomId, 10)})
            .order("created_at")

            if(error) throw error
            
            return data
        },
        {
            enabled: !!roomId,
        }
    )
}

async function createChatMessage({content, sender, room_id}) {
    const {error, data} = await supabase
    .from("messages")
    .insert([
        {content, sender, room_id}
    ])

    if(error) throw error

    return data
}

export const useCreateChatMessage = ({roomId}) => {
    return useMutation((payload) => createChatMessage({...payload, room_id: roomId}))
}