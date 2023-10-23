import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Greeting from "./greeting";

const App = ()=>{

    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Greeting />}>
            </Route>
          </Routes>
        </BrowserRouter>
      );
}

export default App;
