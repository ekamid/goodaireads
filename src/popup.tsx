import React from "react";
import { render } from "react-dom";

const Popup: React.FC = () => {
  return <div>popup</div>;
};

render(<Popup />, document.getElementById("popup"));
