

import Home from "../Components/Home";
import Details from "../components/Details";
import Create from "../components/Create";

import { Routes, Route } from "react-router-dom";
const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<Create/>}/>
      <Route path="/details/:id" element={<Details />}></Route>
    </Routes>
  );
};

export default Routing;



