import { useContext, useCallback, useState } from "react";

// Context
import ContextUser from "../context/userContext";

// Services
import { API_PUBLIC } from "../services/api.js";

// Utils
import { LOGIN_ENDPOINT } from "../utils/constants";

// Adapter
import { loginAdapter } from "../adapter";

export default function useAuth() {
  const { setJWT, setUser } = useContext(ContextUser);
  const [loadingAuth, setLoadingAuth] = useState(false);

  const login = useCallback(async ({ email, password }) => {
    try {
      setLoadingAuth(true);

      const resultLoginAdapter = loginAdapter({ email, password });

      const res = await API_PUBLIC({
        endpoint: LOGIN_ENDPOINT,
        method: "POST",
        body: resultLoginAdapter,
      });

      if (res?.statusCode && res?.statusCode !== 200)
        throw new Error(res.message);

      window.localStorage.setItem("jwt", res.access_token);
      window.localStorage.setItem("user", JSON.stringify(res.user));

      setUser(res.user);
      setJWT(res.access_token);
      return true;
    } catch (err) {
      return false;
    } finally {
      setLoadingAuth(false);
    }
  }, []);

  const logout = useCallback(async () => {
    try {
      setLoadingAuth(true);
      window.localStorage.clear();
      setJWT("");
      setUser(null);
    } catch (err) {
      return err;
    } finally {
      setLoadingAuth(false);
    }
  }, []);

  return {
    loadingAuth,
    login,
    logout,
  };
}
