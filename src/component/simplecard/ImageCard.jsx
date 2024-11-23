import React from 'react'
import { NavLink } from 'react-router-dom'

const ImageCard = ({ img,url }) => {
    // const ?
    return (
        <>
            <NavLink to={url} className="flex flex-col items-center shadow-xl  bg-white border border-gray-200 rounded-lg md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:hover:bg-gray-700 hover:translate-x-2 hover:translate-y-2 ease-linear hover:shadow-[#697565] hover:shadow-lg ">
                <img className=" w-full rounded h-60 md:h-80 md:w-60 " src={img} alt="" />
            </NavLink>
        </>
    )
}

export default ImageCard