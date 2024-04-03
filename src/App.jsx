
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Items from './components/Items'
import Cart from './components/Cart'
import Final from './components/Final'
import Login from './components/Login'


function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/home' element={<Home />} />
      <Route path='/cart' element={<Cart /> }/>
      <Route path='/final' element={<Final />} />
      <Route path='/items/:type' element={<Items />} />

    </Routes>
    </>
  )
}

export default App
