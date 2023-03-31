import React from "react";
import { Spinner } from "@chakra-ui/react";


function Loader() {
  return (
    <div style={{ marginLeft: "42%" }}>
      <Spinner
        thickness="5px"
        speed="0.9s"
        emptyColor="gray.200"
        color="green.600"
        size="xl"
        width="145px"
        height="145px"
      />
    </div>
  );
}

export default Loader;