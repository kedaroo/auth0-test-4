import { useEffect } from "react";
import { webAuth } from "./main";

const CrossOriginVerification = () => {
  useEffect(() => {
    webAuth.crossOriginVerification();
  }, []);

  return <div>CrossOriginVerification</div>;
};

export default CrossOriginVerification;