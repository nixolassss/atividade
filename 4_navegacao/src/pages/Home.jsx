import {Link} from "react-router-dom"

function Home() {
  return (
    <>
    <h1>Home</h1>
    <Link to={"/usuarios"}>Ver Usuários</Link>
    
    </>
  )
}

export default Home