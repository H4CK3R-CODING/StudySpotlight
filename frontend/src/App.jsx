import './App.css'
import {
  RecoilRoot
} from 'recoil';
import { Route, Routes } from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Semester from './pages/Semester/Semester'
import Note from './pages/Notes/Note';

function App() {
  return (
    <>
      <RecoilRoot>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='/about' element={<About/>} ></Route>
          <Route path='/sem' element={<Semester/>} ></Route>
          <Route path='/notes' element={<Note/>} ></Route>
        </Routes>
      </RecoilRoot>
    </>
  )
}

export default App
