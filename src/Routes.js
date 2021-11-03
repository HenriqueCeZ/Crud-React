import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./components/Home"
import  Listar from "./components/Listar"
import  Atualizar from "./components/Atualizar"



const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Home }  path="/" exact />
           <Route component = { Listar}  path="/Listar" />
           <Route component = { Atualizar}  path="/Atualizar" />
          
           
       </BrowserRouter>
   )
}

export default Routes;