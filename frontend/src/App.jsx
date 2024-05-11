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
import Register from './pages/Register/Register';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <RecoilRoot>
        <Navbar/>
        <Toaster
          position="top-center"
        />
        <Routes>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='/about' element={<About/>} ></Route>
          <Route path='/sem' element={<Semester/>} ></Route>
          <Route path='/notes' element={<Note/>} ></Route>
          <Route path='/register' element={<Register/>} ></Route>
        </Routes>
      </RecoilRoot>
    </>
  )
}

export default App
