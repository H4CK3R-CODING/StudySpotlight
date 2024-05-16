import './App.css'
import {
  RecoilRoot,
  useSetRecoilState
} from 'recoil';
import { Route, Routes, useLocation } from 'react-router-dom'
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
import { useEffect } from 'react';
import Verify from './components/Verify/Verify';
import Contact from './pages/Contact/Contact';
import Atom from './Recoil/Atom';
import axios from 'axios';

function App() {
  const {pathname} = useLocation();
  const setIsLoggedIn = useSetRecoilState(Atom.isLoggedIn)
  const checkLoggedIn = async ()=>{
    try {
      const config = {
          headers: {
              'Content-Type': 'application/json'
          }
      }
      const {data} = await axios.get("/api/v1/user/isLoggedIn",config);
      if(data.msg == "User getted"){
        setIsLoggedIn(true)
      }
      else{
        setIsLoggedIn(false)
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect( ()=>{
    checkLoggedIn();
  },[])

  useEffect(()=>{
    window.scrollTo({top: 0, behavior: "smooth"})
  },[pathname])

  return (
    <>
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
          <Route path='/register/verify' element={<Verify/>} ></Route>
          <Route path='/contact' element={<Contact/>} ></Route>
          <Route path='/instuction' element={<Instruction/>} ></Route>
        </Routes>
        <Footer/>
    </>
  )
}

export default App
