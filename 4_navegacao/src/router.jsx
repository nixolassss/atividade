import{ Routes, Route } from "react-router-dom"
import Usuarios from "./pages/Usuarios"
import Home from "./pages/Home"

function Router(){
    return(
        <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/usuarios" element={<Usuarios />} /> 
        </Routes>
    )
}
export default Router