
import React from "react";
import {HashRouter, Route} from "react-router-dom";
import MyPage from "./routes/MyPage"
import Home from "./routes/Home"
import Detail from "./routes/Detail"
import Navigation from "./components/Navigation"


function App() {
  return (
  <HashRouter>
    <Navigation />
    <Route path="/" exact={true} component={Home} />
    <Route path="/myPage" component={MyPage} />
    <Route path="/movie/:id" component={Detail}/>
  </HashRouter>
  )
}

export default App;