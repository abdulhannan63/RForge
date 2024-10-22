import React from 'react'
import SimpleCard from "../simplecard/SimpleCard";
import { FaReact } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";
import { IoMdShare } from "react-icons/io";
import ins from '../../assets/icons8-instagram-100.png';
import face from '../../assets/icons8-facebook-96.png';
import redd from '../../assets/icons8-linkedin-100.png';
const Herosec = () => {
    return (
        <div className='h-auto mb-5'>
            <h1 className='items-center text-4xl mb-5 '>How it work</h1>
            <div className='h-auto flex flex-col md:flex-row items-center gap-3 mx-4'>
               <SimpleCard img={FaReact} title={"Enter On Explore"}/>
               <SimpleCard img={TfiWrite} title={"Edit Your Form"}/>
               <SimpleCard img={IoMdShare} title={"Enter on Save and then download"}/>
            </div>
            <div className='flex  items-center justify-between m-10 '>
                <a className='opacity-50 hover:opacity-100' href="https://www.instagram.com/"><img src={ins} alt="instagram" /></a>
                <a className='opacity-50 hover:opacity-100' href="https://www.facebook.com/"><img src={face} alt="facebook" /></a>
                <a className='opacity-50 hover:opacity-100' href="https://www.linkedin.com/in/abdul-hannan-6a475a23b/"><img src={redd} alt="reddit" /></a>
            </div>
        </div>
    )
}

export default Herosec