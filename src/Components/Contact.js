import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    return () => {
      console.log("UseEffectHookFrom Contact page Will Unmount");
    };
  }, []);

  return (
    <div>
      <h1>Contact Page</h1>
    </div>
  );
};

export default Contact;
