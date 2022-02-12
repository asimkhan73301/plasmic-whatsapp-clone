import * as React from "react";

import { PlasmicAuthComponent } from "./plasmic/plasmic_whats_app_clone/PlasmicAuthComponent";
import { supabase } from "../lib/supabase";
import { useRouter } from "next/router";

function AuthComponent_(props, ref) {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [formError, setFormError] = React.useState("");

  return (
    <PlasmicAuthComponent
      root={{ ref }}
      {...props}
      isLoading={loading}
      isError={!!formError}
      errorMessage={formError?.message}
      emailInput={{
        onChange: (e) => setEmail(e.target.value),
      }}
      passwordInput={{
        onChange: (e) => setPassword(e.target.value),
      }}
      submitButton={{
        onClick: async () => {
          setFormError("");
          setLoading(true);

          try {
            let authFunction = null;
            if(props.isSignUpFlow) {
              authFunction = supabase.auth.signUp({email, password})
            }
            else {
              authFunction = supabase.auth.signIn({email, password})
            }

            const { error } = await authFunction

            if (error) {
              setFormError(error);
              setLoading(false);
              return;
            }

            router.replace("/");
          } catch (err) {
            console.log(err);
          } finally {
            setLoading(false);
          }
        },
      }}
    />
  );
}

const AuthComponent = React.forwardRef(AuthComponent_);

export default AuthComponent;
