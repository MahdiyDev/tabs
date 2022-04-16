import { useState } from "react";
import "./App.scss";
import Tab from "./components/tab";
import Content from './components/content'

function App() {
  const [tab, setTab] = useState(1);

  return (
    <div className="app">
      <div className="tabs">
        <Tab onClick={() => setTab(1)}>Tab 1</Tab>
        <Tab onClick={() => setTab(2)}>Tab 2</Tab>
        <Tab onClick={() => setTab(3)}>Tab 3</Tab>
      </div>

      <div className="content">
        {tab === 1 && <Content title="Content 1" description="I love my work" />}
        {tab === 2 && <Content title="Content 2" description="But hate my work" />}
        {tab === 3 && <Content title="Content 3" description="Hello!" />}
      </div>
    </div>
  );
}

export default App;
