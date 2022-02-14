import { supabase } from "../supabase";

const enforceAuth = (inner) => {
  return async (context) => {
    const { req } = context;
    const { user } = await supabase.auth.api.getUserByCookie(req);

    if (!user) {
      return { props: {}, redirect: { destination: "/login" } };
    }

    let innerProps = {};
    if (inner) {
      innerProps = { ...(inner(context)?.props || {}) };
    }

    return { props: { ...innerProps, user } };
  };
};

export default enforceAuth;
