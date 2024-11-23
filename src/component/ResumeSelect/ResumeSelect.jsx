import React from 'react'
import ImageCard from '../simplecard/ImageCard'
import img1 from '../../assets/Screenshot 2024-11-05 123154.png'
import img2 from '../../assets/Screenshot 2024-11-05 123442.png'
import img3 from '../../assets/Screenshot 2024-11-05 123519.png'

const ResumeSelect = () => {
    const data = [
        img1,
        img2
    ]
    return (
        <>
            <div className='container h-auto md:h-screen'>
                <div className=' flex items-center  justify-center'>
                    <h1 className='text-2xl font-bold'>Select The Resume</h1>
                </div>
                <div className='m-3 md:m-6 flex flex-col md:flex-row items-center justify-center gap-4'>
                    <ImageCard img={img1} url='/resume' />
                    <ImageCard img={img2} url='/resume2' />
                    <ImageCard img={img3} url='/resume3' />
                </div>

            </div>
        </>
    )
}
export default ResumeSelect