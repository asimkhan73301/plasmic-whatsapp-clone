import React, { useState } from "react"

import { supabase } from "."

export const useGetUserProfile = () => {
  const [loading, setLoading] = useState(false)
  const [userProfile, setUserProfile] = React.useState(null)
  const user = supabase.auth.user()

  React.useEffect(() => {
    async function fetchUserProfile() {
        setLoading(true)
        const {data, error} = await (
            supabase
            .from("profiles")
            .select("*")
            .eq("id", user.id)
            .single()
        )
        if(!error){
            setUserProfile(data)
        }
        setLoading(false)
    }
    fetchUserProfile()
  }, [user?.id])

  return {userProfile, loading}
}

export const useUpdateUserProfile = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const user = supabase.auth.user()

  const mutate = async ({first_name,last_name, avatar_url}) => {
    try{
      setLoading(true)
      setError(null)

      const updates = {
        id: user.id,
        first_name,
        last_name,
        avatar_url,
        updated_at: new Date()
      }

      let {error} = await supabase.from("profiles").upsert(updates, {"returning": "minimal"})
      if(error) {
        setError(error)
      }

    }catch(err){
      setError(err)
    }finally{
      setLoading(false)
    }
  }

  return {
    loading,
    error,
    mutate
  }
}