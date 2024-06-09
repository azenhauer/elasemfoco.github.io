

import Apresentações from  './assets/pages/Apresentações'
import Mídias from  './assets/pages/Mídias'
import Sobre from  './assets/pages/Sobre'
import Home from  './assets/pages/Home/Home.jsx'
import { Route, Routes } from 'react-router-dom'






function App() {
  return (
    // main container
    <div id='appjs-body'>

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
