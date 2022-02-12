import * as React from "react";

import { PlasmicUploadAvatar } from "./plasmic/plasmic_whats_app_clone/PlasmicUploadAvatar";
import { supabase } from "../lib/supabase";

function UploadAvatar_({url, onUpload, loading, ...props}, ref) {
  const [uploading, setUploading] = React.useState(false)
  const [uploadError, setUploadError] = React.useState("")
  const [avatarUrl, setAvatarUrl] = React.useState(null)

  React.useEffect(() => {
    setAvatarUrl(url)
  }, [url])

  React.useEffect(() => {
    setUploading(loading)
  }, [loading])

  const uploadAvatar = async (event) => {
    try {
      setUploading(true)
      setUploadError("")

      if (!event.target.files || event.target.files.length === 0) {
        setUploadError('You must select an image to upload.')
        return;
      }
      

      const file = event.target.files[0]
      const fileExt = file.name.split('.').pop()
      const fileName = `${Math.random()}.${fileExt}`
      const filePath = `${fileName}`

      let { error } = await supabase.storage
        .from('avatars')
        .upload(filePath, file)

      if (error) {
        setUploadError(error?.message)
        return;
      }
      
      
      let {publicURL, error: publicUrlError} = await supabase.storage.from('avatars').getPublicUrl(filePath)
      if (publicUrlError) {
        setUploadError(publicUrlError?.message)
        return;
      }

      setAvatarUrl(publicURL)
      onUpload(publicURL)
    } catch (error) {
      setUploadError(error.message)
    } finally {
      setUploading(false)
    }
  }

  return (
    <PlasmicUploadAvatar
      root={{
        wrapChildren: (children) => {
          return (
            <label htmlFor="userProfileAvatar">
              {children}
              <input
                id="userProfileAvatar"
                type="file"
                accept="image/*"
                onChange={uploadAvatar}
                disabled={uploading}
                style={{display: "none"}}
              />
            </label>
          )
        }
      }}
      {...props}
      isError={!!uploadError}
      errorMessage={uploadError}
      uploading={uploading}
      avatar={{
        url: avatarUrl
      }}
    />
  );
}

const UploadAvatar = React.forwardRef(UploadAvatar_);

export default UploadAvatar;
