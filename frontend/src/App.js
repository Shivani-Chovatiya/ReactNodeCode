import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Userlist from "./comp/Userlist";
import { Pagination } from "react-bootstrap";

function App() {
  return (
    <Router>
      <Route path="/" component={Userlist} exact />
    </Router>
  );
}

export default App;
