import * as React from "react";

import { useGetUserProfile, useUpdateUserProfile } from "../lib/supabase/profiles";

import { PlasmicUserProfile } from "./plasmic/plasmic_whats_app_clone/PlasmicUserProfile";
import { supabase } from "../lib/supabase";
import { useRouter } from "next/router";

function UserProfile_({...props}, ref) {
  const router = useRouter()
  const [firstName, setFirstName] = React.useState("")
  const [lastName, setLastName] = React.useState("")

  const user = supabase.auth.user()
  const {data: userProfile, isLoading: userProfileLoading} = useGetUserProfile(user?.id)
  const updateUserProfileMutation = useUpdateUserProfile()

  React.useEffect(() => {
    setFirstName(userProfile?.first_name)
    setLastName(userProfile?.last_name)
  }, [userProfile])

  return (
    <PlasmicUserProfile
      root={{ ref }}
      {...props}
      
      uploadAvatar={{
        url: userProfile?.avatar_url,
        onUpload: async (url) => {
          await updateUserProfileMutation.mutateAsync({avatar_url: url})
        },
        loading: userProfileLoading || updateUserProfileMutation.isLoading
      }}
      firstNameInput={{
        value: firstName,
        onChange: (e) => setFirstName(e.target.value)
      }}
      lastNameInput={{
        value: lastName,
        onChange: (e) => setLastName(e.target.value)
      }}
      updateProfileButton={{
        onClick: async () => {
          await updateUserProfileMutation.mutateAsync({first_name: firstName, last_name: lastName})
          router.replace("/")
        }
      }}
    />
  );
}

const UserProfile = React.forwardRef(UserProfile_);

export default UserProfile;
