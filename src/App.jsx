import { Outlet } from 'react-router-dom';
import MyContext from './context/MyContext';
import { useState } from 'react';
import NavBar from './components/NavBar';

export const App = () => {
  const [idioma, setIdioma] = useState('ca');
  const packIdiom = {
    idioma,
    setIdioma
  }


  return (
    <MyContext.Provider value={packIdiom}>
      <div className='h-screen'>
        <h1>Parques Naturales</h1>
        <button className='' onClick={() => setIdioma('es')}>ES</button>
        <button className='' onClick={() => setIdioma('ca')}>CAT</button>
        <NavBar />
        <Outlet />
      </div>
    </MyContext.Provider>
  )
}

export default App