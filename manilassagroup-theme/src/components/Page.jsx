import React, { useEffect } from "react";

function Page(props) {
  useEffect(() => {
    document.title = `${props.title} | SSAGroup`;
  }, []);

  return <>{props.children}</>;
}

export default Page;
