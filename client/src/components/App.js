import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const PageOne = () => {
  return (
    <div>
      <Link to="/pagetwo">Go to page two</Link>
    </div>
  );
};

const PageTwo = () => {
  return (
    <div>
      <Link to="/">Go to page one</Link>
    </div>
  );
};

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={PageOne} />
          <Route path="/pagetwo" exact component={PageTwo} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
