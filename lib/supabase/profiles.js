import { useMutation, useQuery } from "react-query"

import { supabase } from "."

export async function getUserProfile(userId) {
  const {data, error} = await (
    supabase
    .from("profiles")
    .select("*")
    .eq("id", userId)
    .single()
  )
  if(error){
    throw error
  }
  return data
}

export const useGetUserProfile = (userId, options={}) => {
  return useQuery(
    `user-profile-${userId}`,
    () => getUserProfile(userId),
    {
      ...options,
      enabled: Boolean(userId),
    }
  )
}

const updateUserProfile = async ({first_name, last_name, avatar_url}) => {
  const user = supabase.auth.user()
  const updates = {
    id: user.id,
    first_name,
    last_name,
    avatar_url,
    updated_at: new Date()
  }

  let {error} = await supabase.from("profiles").upsert(updates, {"returning": "minimal"})
  if(error) {
    throw error
  }
}

export const useUpdateUserProfile = () => {
  return useMutation(
    (payload) => updateUserProfile(payload)
  )
}