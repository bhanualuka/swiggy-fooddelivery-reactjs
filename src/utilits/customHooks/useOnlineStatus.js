import { useState } from "react";

const useOnlineStatus = () => {
  const [status, setStatus] = useState(false);

  window.addEventListener("online", () => {
    setStatus(false);
  });

  window.addEventListener("offline", () => {
    setStatus(true);
  });

  return status;
};

export default useOnlineStatus;
