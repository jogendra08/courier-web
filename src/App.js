import './App.css';

import { Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';

import Footer from './components/Footer';
import Home from './components/Home';
import Services from './components/Services';
import Admin from './components/Admin';
import Prohibiteditems from './components/Prohibiteditems';
import Regulatory from './components/Regulatory';
import ContactUs from './components/ContactUs';
import NoteState from './context/notes/NoteState';
import Login from './components/Login';
import Singup from './components/Singup';



function App() {
  return (
    <>
      <NoteState>
        <div className='App'>
          <Navbar />
          <main className='main-wrapper'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/services' element={<Services />} />
              <Route path='/admin' element={<Admin />} />
              <Route path='/prohibiteditems' element={<Prohibiteditems />} />
              <Route path='/regulatory' element={<Regulatory />} />
              <Route path='/contactus' element={<ContactUs />} />
              <Route path='/login' element={<Login/>}/>
              <Route path='/singup' element={<Singup/>}/>
              
            </Routes>
          </main>
          <Footer />
        </div>
        </NoteState>
    </>
  );
}


export default App;
