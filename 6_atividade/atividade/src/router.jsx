import {Routes, Route} from "react-router-dom"
import Teste from "./pages/Teste"
import A from "./pages/A"

function Router() {
  return (
    <Routes>
        <Route path="/" element={<A />}></Route>
        <Route path="/teste" element={<Teste />}></Route>
    </Routes>
  )
}

export default Router