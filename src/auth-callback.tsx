import { useEffect } from "react";
import { webAuth } from "./main";

const AuthCallback = () => {
  useEffect(() => {
    webAuth.parseHash((err, authResult) => {
      if (err) {
        console.error("Error parsing hash", err);
        return;
      }

      if (authResult?.accessToken && authResult.idToken) {
        console.log("Tokens:", authResult);

        // Store tokens in localStorage or memory
        localStorage.setItem("access_token", authResult.accessToken);
        localStorage.setItem("id_token", authResult.idToken);
        localStorage.setItem(
          "expires_at",
          JSON.stringify(authResult.expiresIn * 1000 + new Date().getTime())
        );
      }
    });
  }, []);

  return <div>AuthCallback</div>;
};

export default AuthCallback;