import { useParams } from "react-router-dom"
import ParquesNaturales from "./context/ParquesNaturales";
import { useContext } from "react";
import MyContext from "./context/MyContext";

export const ParqueNatural = () => {
  const { id } = useParams();
  const context = useContext(MyContext);
  const { idioma: language, setIdioma: setLanguage } = context;

  const filtradoParque = ParquesNaturales.filter(e => e.id == id);

  return (
    <div>
      {filtradoParque.map(e => {
        return (
          <div className="" key={e.id}>
            <h1>{language === 'es' ? e.title.original : e.title.catalan}</h1>
            <img src={e.image} alt={e.nom} />
          </div>
        )
      })
      }
    </div>
  )
}

export default ParqueNatural;
