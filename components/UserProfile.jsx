import * as React from "react";

import { useGetUserProfile, useUpdateUserProfile } from "../lib/supabase/profiles";

import { PlasmicUserProfile } from "./plasmic/plasmic_whats_app_clone/PlasmicUserProfile";
import { useRouter } from "next/router";

function UserProfile_({...props}, ref) {
  const router = useRouter()
  const [loading, setLoading] = React.useState(false)
  const [firstName, setFirstName] = React.useState("")
  const [lastName, setLastName] = React.useState("")
  const {userProfile, loading: userProfileLoading} = useGetUserProfile()
  const {mutate: updateUserProfile} = useUpdateUserProfile()

  React.useEffect(() => {
    setFirstName(userProfile?.first_name)
    setLastName(userProfile?.last_name)
  }, [userProfile])

  React.useEffect(() => {
    setLoading(userProfileLoading)
  }, [userProfileLoading])

  return (
    <PlasmicUserProfile
      root={{ ref }}
      {...props}
      
      uploadAvatar={{
        url: userProfile?.avatar_url,
        onUpload: async (url) => {
          await updateUserProfile({avatar_url: url})
        },
        loading
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
          await updateUserProfile({first_name: firstName, last_name: lastName})
          router.replace("/")
        }
      }}
    />
  );
}

const UserProfile = React.forwardRef(UserProfile_);

export default UserProfile;
