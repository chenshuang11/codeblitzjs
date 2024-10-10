import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ModelWrapper } from './components/code/code.tsx';

function App() {
  return (
    <Router>
      <div>
      <Link to="/">111</Link>
      <Link to="/start">开始</Link>
    </div>
    <Route path="/start" component={ModelWrapper}></Route>
    </Router>
  );
}

export default App;
