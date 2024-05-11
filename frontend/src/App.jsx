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
import Instruction from './pages/Instuction/Instruction';
import SignIn from './pages/SignIn/SignIn';
import JoinUs from './pages/JoinUs';
import Footer from './components/Footer/Footer';

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
          <Route path='/signin' element={<SignIn/>} ></Route>
          <Route path='/about' element={<About/>} ></Route>
          <Route path='/sem' element={<Semester/>} ></Route>
          <Route path='/notes' element={<Note/>} ></Route>
          <Route path='/join' element={<JoinUs/>} ></Route>
          <Route path='/register' element={<Register/>} ></Route>
          <Route path='/instuction' element={<Instruction/>} ></Route>
        </Routes>
        <Footer/>
      </RecoilRoot>
    </>
  )
}

export default App
