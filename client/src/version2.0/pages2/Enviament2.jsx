import React from "react";
import useCollapse from "react-collapsed";
import "./App.css";
function Collapsible() {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <div>
      <div className="collapsible">
        <div className="Pregunta1" {...getToggleProps()}>
          {isExpanded
            ? "Amb quina agencia treballeu?"
            : "Amb quina agencia treballeu?"}
        </div>
        <div {...getCollapseProps()}>
          <div className="content">
            Now you can see the hidden content. <br />
            <br />
            Click again to hide...
          </div>
        </div>
      </div>
    </div>
  );
}
function App() {
  return <Collapsible />;
}
export default App;
