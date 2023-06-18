import {Routes, Route} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Catalog from "./pages/Catelog/Catalog";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={''} element={<Layout/>}>
           <Route path={'/'} element={<Home/>}/>
          <Route path={'/about'} element={<About/>}/>
            <Route path={'/catalog'} element={<Catalog/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
