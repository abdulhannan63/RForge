import React, { useState } from 'react'
import "./resume.css"
import { IoMdMail } from 'react-icons/io'
import { BiMobileAlt, BiSquare } from 'react-icons/bi'
import { GrLinkedinOption } from 'react-icons/gr'
import { AiFillGithub } from 'react-icons/ai'
import { MdLocationOn } from 'react-icons/md'

import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

function Resume() {
    // const "red" = useSelector(state => state.theme?.theme?.color) || "#643baa"
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    const userdata = useSelector(state => state.users.userdata)
    const [loadhint, setloadhint] = useState("")

    const loadFunc = () => {
        const hints = ["Please wait your resume is in process...", "Hint: Entering the complete details will make your resume looks awesome"]
        setLoading(true)
        hints.map((item, index) => {
            return (
                setTimeout(() => {
                    setloadhint(item)
                }, 3000 * index)
            )
        })
        setTimeout(() => {
            setLoading(false)
        }, 6000)
    }
    console.log(userdata);

    useEffect(() => {
        if (!userdata.personal) { navigate("/") }
        window.scrollTo({
            top: 0, left: 0, behavior: "smooth"
        })
    }, [])

    const print = () => {
        window.print()
    }
    return (
        <>
            {loading ?
                <>
                    {/* <BounceLoader className='loader' color="#643baa" size={150} /> */}
                    <div className='loader-hint mt-2 h-screen font-bold'>{loadhint}</div>
                </> :
                <>
                    {/* some features for   */}
                    <div className='noprint '>
                        {/* <Link to={"/resumebuild"}><button className='print-btn'>Edit Data</button></Link>
                        <Link to={"/selecttheme"}><button className='print-btn'>Change theme</button></Link> */}
                        {/* <button className='print-btn' onClick={print}>Download</button> */}
                        <button onClick={print} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:fr\om-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Download
                            </span>
                        </button>
                    </div>
                    <div className='theme2 bg-white mb-3'>
                        <div className={"mb-4"}>
                            <div>
                                <div className='text-3xl' style={{ color: "black", "fontWeight": "bold" }}>{userdata.personal.firstname} {userdata.personal.lastname}</div>
                                <div style={{ color: "black", "fontSize": "19px" }}>{userdata.personal.title}</div>
                                <div className={"mt-1 text-left"}>{userdata.personal.quote} asja akjks let check it out how the css is working
                                    is it working fine? has been the industry's</div>
                            </div>
                            <div>
                                <div className='text-black'>{userdata.personal.email}</div><IoMdMail style={{ color: "black" }} />
                                <div className='text-black'>{userdata.personal.mob}</div><BiMobileAlt style={{ color: "black" }} />
                                <div className='text-black'>{userdata.personal.city}, {userdata.personal.country}</div><MdLocationOn style={{ color: "black" }} />
                                <div className='text-black'>{userdata.link.linkedin}</div><GrLinkedinOption style={{ color: "black" }} />
                                <div className='text-black'>{userdata.link.github}</div><AiFillGithub style={{ color: "black" }} />
                            </div>
                        </div>

                        <div className='theme2-section'>
                            <div className='section-head' style={{ "color": "black" }}>SKILLS</div>
                            <div className='section-content'>
                                <div className='theme2-interest'>
                                    {userdata.personal.technicalskill.map((item, index) => {
                                        return (
                                            <div key={index} style={{ "backgroundColor": "black", "borderRadius": "5px", "padding": "3px", "fontSize": "12px" }}>{item.skill}</div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>

                        {userdata.experience[0].company ? <div className='theme2-section'>
                            <div className='section-head' style={{ "color": "black" }}>WORK EXPERIENCE</div>
                            <div className='section-content'>
                                {userdata.experience.map((item, index) => {
                                    return (
                                        <div key={index} className='text-black'>
                                            <div className='font-bold' style={{ "fontSize": "14px" }}>{item.worktitle}</div>
                                            <div style={{ "fontSize": "14px" }}>{item.company}</div>
                                            <div className='text-xs italic' style={{ color: "black" }}>{item.yearfrom} - {item.present === true ? "Present" : item.yearto}</div>
                                            <div>
                                                - {item.description}
                                            </div>

                                        </div>
                                    )
                                })}
                            </div>
                        </div> : null}

                        {userdata.project[0].name ? <div className='theme2-section'>
                            <div className='section-head text-black' style={{ "color": "black" }}>PROJECTS</div>
                            <div className='section-content text-black'>
                                {userdata.project.map((item, index) => {
                                    return (
                                        <div key={index} className='theme2-proj'>
                                            <BiSquare style={{ color: "black" }} />
                                            <div>
                                                <div className='resume-title' style={{ "fontWeight": "bold" }}>{item.name}</div>
                                                <div className={"text-xs"} style={{ color: "black" }}>{item.tech}</div>
                                                {item.des ? <div className={'mt-1'}>{item.des}</div> : null}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div> : null}

                        <div className='theme2-section text-black'>
                            <div className='section-head' style={{ "color": "black" }}>EDUCATION</div>
                            <div className='section-content'>
                                {userdata.education.map((item, index) => {
                                    return (
                                        <div key={index} className='theme2-edu'>
                                            <div className='font-bold resume-title' style={{ color: "black" }}>{item.degree}</div>
                                            <div className='resume-title'>{item.university}</div>
                                            <div className='text-xs italic' style={{ color: "black" }}>
                                                <div>{item.yearfrom} - {item.yearto}</div>
                                                <div>{item.grade}{item.gradetype === "grade" ? "/10" : "%"}</div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        {userdata.course[0].name ? <div className='theme2-section text-black'>
                            <div className='section-head ' style={{ "color": "black" }}>COURSES</div>
                            <div className='section-content'>
                                {userdata.course.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <div className='resume-title' style={{ "fontWeight": "bold" }}>{item.name}</div>
                                            <div className={"text-xs"} style={{ color: "black" }}>{item.provider}</div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div> : null}

                        <div className='theme2-section text-black'>
                            <div className='section-head' style={{ "color": "black" }}>INTERESTS/HOBBY</div>
                            <div className='section-content'>
                                <ul style={{ "display": "grid", "justifyItems": "center", "gridTemplateColumns": "repeat(auto-fit, minmax(25%,1fr)", "paddingBottom": "20px" }}>
                                    {userdata.personal.interest.map((item, index) => {
                                        return (
                                            <li key={index} style={{ "listStyle": "outside disc" }}>{item.hobbie}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </>}
        </>
    )
}

export default Resume