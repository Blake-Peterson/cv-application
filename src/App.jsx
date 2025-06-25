import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";

import './styles/App.css';

function App() {
  return (
    <div id='app-container'>
      <div>
        <General></General>
      </div>
      <div>
        <Education></Education>
      </div>
      <div>
        <Experience></Experience>
      </div>
    </div>
  )
}

export default App
