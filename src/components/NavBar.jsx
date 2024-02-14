import { Link } from "react-router-dom"
import ParquesNaturales from "../context/ParquesNaturales"

export const NavBar = () => {
  return (
    <div>
      {ParquesNaturales.map(parque => {
        return (
          <div key={parque.id}>
            <Link to={`/Parque/${parque.id}`}>{parque.nom}</Link>
          </div>
        )
      })}
    </div>
  )
}

export default NavBar
