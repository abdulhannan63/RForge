import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Resume2 = ({ data }) => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    const userdata = useSelector(state => state.users.userdata)
    const [loadhint, setloadhint] = useState("")


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
            <div className='noprint '>
                
                <button onClick={print} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:fr\om-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Download
                    </span>
                </button>
            </div>
            <div className="p-8 bg-gray-50 text-gray-800 font-sans rounded-lg shadow-lg max-w-3xl mx-auto">
                {/* Personal Information */}
                <section className="mb-8 text-center">
                    <h1 className="text-3xl font-bold text-gray-900">{userdata.personal.firstname} {userdata.personal.lastname}</h1>
                    <p className="text-lg font-semibold text-gray-700">{userdata.personal.title}</p>
                    <p className="text-gray-600"><strong>Email:</strong> {userdata.personal.email}</p>
                    <p className="text-gray-600"><strong>Phone:</strong> {userdata.personal.mob}</p>
                    <p className="text-gray-600"><strong>Address:</strong> {userdata.personal.city}</p>
                </section>

                {/* Links */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-300 pb-2">Links</h2>
                    <ul className="space-y-1">
                        {userdata.link.linkedin && <li><strong>LinkedIn:</strong> <a href={userdata.link.linkedin} className="text-blue-600 hover:underline">{userdata.link.linkedin}</a></li>}
                        {userdata.link.github && <li><strong>GitHub:</strong> <a href={userdata.link.github} className="text-blue-600 hover:underline">{userdata.link.github}</a></li>}
                        {userdata.link.portfolio && <li><strong>Portfolio:</strong> <a href={userdata.link.portfolio} className="text-blue-600 hover:underline">{userdata.link.portfolio}</a></li>}
                    </ul>
                </section>

                {/* Experience */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-300 pb-2">Experience</h2>
                    {userdata.experience.map((exp, index) => (
                        <div key={index} className="mb-4 p-4 bg-white rounded-lg shadow-sm border">
                            <p className="text-lg font-semibold text-gray-900">{exp.company}</p>
                            <p><strong>Role:</strong> {exp.worktitle}</p>
                            <p><strong>Description:</strong> {exp.description}</p>
                            <p><strong>Tags:</strong> {exp.tags}</p>
                            <p><strong>Year:</strong> {exp.yearfrom} - {exp.present ? "Present" : exp.yearto}</p>
                        </div>
                    ))}
                </section>

                {/* Education */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-300 pb-2">Education</h2>
                    {userdata.education.map((edu, index) => (
                        <div key={index} className="mb-4 p-4 bg-white rounded-lg shadow-sm border">
                            <p className="text-lg font-semibold text-gray-900">{edu.degree}</p>
                            <p><strong>University:</strong> {edu.university}</p>
                            <p><strong>Grade:</strong> {edu.grade}</p>
                            <p><strong>Year:</strong> {edu.yearfrom} - {edu.yearto}</p>
                        </div>
                    ))}
                </section>

             

                {/* Projects */}
                {
                    userdata.project &&
                    < section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-300 pb-2">Projects</h2>
                        {userdata.project.map((proj, index) => (
                            <div key={index} className="mb-4 p-4 bg-white rounded-lg shadow-sm border">
                                <p className="text-lg font-semibold text-gray-900">{proj.name}</p>
                                <p><strong>Technologies:</strong> {proj.tech}</p>
                                <p><strong>Description:</strong> {proj.des}</p>
                                <p><strong>Link:</strong> <a href={proj.link} className="text-blue-600 hover:underline">{proj.link}</a></p>
                            </div>
                        ))}
                    </section>
                }
                {/* Technical Skills */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-300 pb-2">Technical Skills</h2>
                    <ul className="list-disc list-inside space-y-1">
                        {userdata.personal.technicalskill && userdata.personal.technicalskill.map((skill, index) => (
                            <li key={index} className="text-gray-700"><strong>{skill.skill}:</strong> {skill.rate}</li>
                        ))}
                    </ul>
                </section>

                {/* Interests */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-300 pb-2">Interests</h2>
                    <ul className="list-disc list-inside space-y-1">
                        {userdata.personal.interest && userdata.personal.interest.map((interest, index) => (
                            <li key={index} className="text-gray-700">{interest.hobbie}</li>
                        ))}
                    </ul>
                </section>
            </div >
        </>
    );
};


export default Resume2