import React from "react";
import "./Collapsible.css";

const Collapsible = ({ summary, children, htmlEl }) => {
  return (
    <details>
      <summary>
        {htmlEl}
        <span>{summary}</span>
      </summary>
      {children}
    </details>
  );
};

export default Collapsible;
