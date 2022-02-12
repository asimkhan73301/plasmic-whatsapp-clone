import '../styles/globals.css'

import { Auth } from '@supabase/ui';
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import { supabase } from '../lib/supabase';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        updateSupabaseCookie(event, session);
      }
    );

    return () => {
      authListener?.unsubscribe();
    };
  });

  async function updateSupabaseCookie(event, session) {
    let apiUrl = "/api/auth/set/";
    if (event === "SIGNED_OUT") {
      apiUrl = "/api/auth/remove/";
    }

    await fetch(apiUrl, {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      credentials: "same-origin",
      body: JSON.stringify({ event, session }),
    });
  }

  return (
    <PlasmicRootProvider>
      <Auth.UserContextProvider supabaseClient={supabase}>
       <Component {...pageProps} />
      </Auth.UserContextProvider>
    </PlasmicRootProvider>
  );
}

export default MyApp
  