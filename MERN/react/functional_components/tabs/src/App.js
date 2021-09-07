import logo from './logo.svg';
import './App.css';
import Tabs from "./components/Tabs"

function App() {
  return (
    <div className="App">
      <Tabs tabItems={[
        {header: "Tab1", content:"Tab1 content", isSelected: false},
        {header: "Tab2", content:"Tab2 content", isSelected: false},
        {header: "Tab3", content:"I miss python sadge", isSelected: false},
        {header: "Tab4", content:"Tab4 content", isSelected: false}
      ]}/>
    </div>
  );
}

export default App;
