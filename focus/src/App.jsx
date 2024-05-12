

import Apresentações from  './assets/pages/Apresentações'
import Mídias from  './assets/pages/Mídias'
import Sobre from  './assets/pages/Sobre'
import Home from  './assets/pages/Home'
import { Route, Routes } from 'react-router-dom'
import NavBar from './assets/Components/NavBar'




function App() {
  return (
    <div className="container">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/apresentacoes' element={<Apresentações />} />
        <Route path='/midias' element={<Mídias />} />
        <Route path='/sobre' element={<Sobre />} />
      </Routes>
    </div>
  )
}

export default App
