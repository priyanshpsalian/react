import React, { useState } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Xaarow from './components/Xarrow';
// import Reactflow from "./components/Reactflow/Reactflow";
import Reactflow from "./components/Reactflow/Reactflow";
import ReactFlowDND from './components/ReactFlowDnd';
import NodeFlow from "./components/NodeFlow";
import Xarrow, { useXarrow, xarrowPropsType, Xwrapper } from "react-xarrows";
import NewApp from "./App";
import Component1 from "./components/Sidebar";
import Button from './Component1/Button/Button';
import { ApiContextProvider } from "./utils/ApiContext";
import ChatView from "./components/chatview";
import Editor from "./components/Editor";

function App() {
  const updateXarrow = useXarrow();
  const [state, setState] = useState("CLICK ME");

  return (
    <div style={{display:'flex', justifyContent:'space-between'}}>
      {/* <ApiContextProvider> */}
          {/* <NewApp /> */}
          {/* <ReactReandererFlow/> */}
          {/* <Xaarow updateXarrow={updateXarrow}/> */}
          <Reactflow/>
          {/* <Editor/> */}
          {/* <ReactFlowDND/> */}
          {/* <NodeFlow/> */}
          {/* <Component1/> */}
          {/* <Button label="Click me please"/> */}
          {/* <ChatView/> */}
      {/* </ApiContextProvider> */}
    </div>
  );
}

render(<App />,document.getElementById("root"));

