import React from 'react'
import Navbar from './component/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './component/Footer/Footer'
import BulidResume from './pages/BulidResume'
import Resume from './component/Resume/Resume'
import About from './pages/About'
import Resume2 from './component/Resume/Resume2'
import ResumeSelect from './component/ResumeSelect/ResumeSelect'
import Resume3 from './component/Resume/resume3'

const App = () => {
  return (
    <>
        <div className='bg-gradient-to-tr from-black to-purple-900 text-white'>
          <Navbar />
          <div className='mx-4 md:mx-7'>
            <Routes >
              <Route path='/*' element={<Home />} ></Route>
              <Route path='/about' element={<About />} ></Route>
              <Route path='/built' element={<BulidResume />} ></Route>
              <Route path='/choose' element={<ResumeSelect />} ></Route>
              <Route path='/resume' element={<Resume />} ></Route>
              <Route path='/resume2' element={<Resume2 />} ></Route>
              <Route path='/resume3' element={<Resume3 />} ></Route>
            </Routes>
          </div>
          <Footer />
        </div>
    </>
  )
}

export default App