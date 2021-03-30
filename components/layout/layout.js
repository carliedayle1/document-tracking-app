import Sidebar from "./sidebar";
import Header from "./header";
import { useState } from "react";
import { useSession } from "next-auth/client";

export default function Layout({ children }) {
  const [toggle, setToggle] = useState(true);
  const [session] = useSession();

  const handleToggle = (data) => {
    setToggle(data);
  };

  return (
    <>
      <div className={`d-flex ${toggle ? "toggled" : ""}`} id="wrapper">
        {session && <Sidebar />}

        <div id="page-content-wrapper">
          <Header parentToggle={handleToggle} />

          <div className="container-fluid content">{children}</div>
        </div>
      </div>
    </>
  );
}
