import React from "react";
import { Wrapper, Circle } from "../commonStyles/loader";

const Loader = () => {
  return (
    <Wrapper>
      <Circle />
      <Circle />
      <Circle />
    </Wrapper>
  );
};

export default Loader;
