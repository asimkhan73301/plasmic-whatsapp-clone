import * as React from "react";

import { Auth } from "@supabase/ui";
import { PlasmicSidebar } from "./plasmic/plasmic_whats_app_clone/PlasmicSidebar";
import { supabase } from "../lib/supabase";
import { useRouter } from "next/router";

function Sidebar_({user, ...props}, ref) {
  const router = useRouter()
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
      username={user?.email}
      userAvatar={{
        prefixText: user?.email[0]?.toUpperCase()
      }}
    />
  );
}

const Sidebar = React.forwardRef(Sidebar_);

export default Sidebar;
