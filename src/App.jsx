import './App.css'
import { Route, Routes } from 'react-router-dom'
import Filling from './pages/Filling'
import Result from './pages/Result'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Filling/>}/>
        <Route path='/result' element={<Result/>}/>
      </Routes>
    </>
  )
}

export default App
