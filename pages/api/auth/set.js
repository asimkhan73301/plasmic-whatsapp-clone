/**
 * NOTE: this file is only needed if you're doing SSR (getServerSideProps)!
 */

import { supabase } from "../../../lib/supabase";

const handler = (req, res) => {
    supabase.auth.api.setAuthCookie(req, res);
  };
  
export default handler;
  
  