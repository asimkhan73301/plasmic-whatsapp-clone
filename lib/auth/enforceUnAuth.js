import { supabase } from "../supabase";

const enforceUnAuth = (inner) => {
  return async (context) => {
    const { req } = context;
    const { user } = await supabase.auth.api.getUserByCookie(req);

    if (user) {
      return { props: {}, redirect: { destination: "/" } };
    }

    let innerProps = {};
    if (inner) {
      innerProps = { ...(inner(context)?.props || {}) };
    }

    return { props: { ...innerProps } };
  };
};

export default enforceUnAuth;
