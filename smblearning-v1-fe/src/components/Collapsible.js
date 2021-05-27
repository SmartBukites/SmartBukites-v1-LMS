import React from "react";
import "./Collapsible.css";

const Collapsible = ({ summary, children }) => {
  return (
    <details>
      <summary>{summary}</summary>
      {children}
    </details>
  );
};

export default Collapsible;
