import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Resume3 = () => {
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
        <div className="bg-gray-50 p-10 font-sans max-w-5xl mx-auto rounded-lg shadow-md">
            {/* Header */}
            <section className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900">{userdata.personal.firstname} {userdata.personal.lastname}</h1>
                <p className="text-xl font-semibold text-gray-700">{userdata.personal.title}</p>
            </section>

            <div className="flex flex-col md:flex-row">
                {/* Sidebar */}
                <aside className="md:w-1/3 mb-8 md:mb-0">
                    {/* Contact Info */}
                    <div className="p-6 bg-white rounded-lg shadow-sm mb-6">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Info</h2>
                        <p className="text-gray-600"><strong>Email:</strong> {userdata.personal.email}</p>
                        <p className="text-gray-600"><strong>Phone:</strong> {userdata.personal.mob}</p>
                        <p className="text-gray-600"><strong>Address:</strong> {userdata.personal.city}</p>
                    </div>

                    {/* Links */}
                    <div className="p-6 bg-white rounded-lg shadow-sm mb-6">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Links</h2>
                        <ul className="space-y-1 text-gray-700">
                            {userdata.link.linkedin && <li><strong>linkedIn:</strong> <a href={userdata.link.linkedin} className="text-blue-600 hover:underline">{userdata.link.linkedin}</a></li>}
                            {userdata.link.github && <li><strong>GitHub:</strong> <a href={userdata.link.github} className="text-blue-600 hover:underline">{userdata.link.github}</a></li>}
                            {userdata.link.portfolio && <li><strong>Portfolio:</strong> <a href={userdata.link.portfolio} className="text-blue-600 hover:underline">{userdata.link.portfolio}</a></li>}
                        </ul>
                    </div>

                    {/* Technical Skills */}
                    {
                        userdata.technical &&
                        <div className="p-6 bg-white rounded-lg shadow-sm">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">Technical Skills</h2>
                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                                {userdata.personal.technicalskill && userdata.personal.technicalskill.map((skill, index) => (
                                    <li key={index}><strong>{skill.skill}:</strong> {skill.rate}</li>
                                ))}
                            </ul>
                        </div>
                    }
                </aside>

                {/* Main Content */}
                <main className="md:w-2/3 md:pl-8 space-y-10">
                    {/* Experience */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-300 pb-2">Experience</h2>
                        {userdata.experience.map((exp, index) => (
                            <div key={index} className="my-4 p-4 bg-white rounded-lg shadow-sm border">
                                <p className="text-lg font-semibold text-gray-900">{exp.company}</p>
                                <p><strong>Role:</strong> {exp.worktitle}</p>
                                <p><strong>Description:</strong> {exp.description}</p>
                                <p><strong>Tags:</strong> {exp.tags}</p>
                                <p><strong>Year:</strong> {exp.yearfrom} - {exp.present ? "Present" : exp.yearto}</p>
                            </div>
                        ))}
                    </section>

                    {/* Education */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-300 pb-2">Education</h2>
                        {userdata.education.map((edu, index) => (
                            <div key={index} className="my-4 p-4 bg-white rounded-lg shadow-sm border">
                                <p className="text-lg font-semibold text-gray-900">{edu.degree}</p>
                                <p><strong>University:</strong> {edu.university}</p>
                                <p><strong>Grade:</strong> {edu.grade}</p>
                                <p><strong>Year:</strong> {edu.yearfrom} - {edu.yearto}</p>
                            </div>
                        ))}
                    </section>

                    {/* Projects */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-300 pb-2">Projects</h2>
                        {userdata.project.map((proj, index) => (
                            <div key={index} className="my-4 p-4 bg-white rounded-lg shadow-sm border">
                                <p className="text-lg font-semibold text-gray-900">{proj.name}</p>
                                <p><strong>Technologies:</strong> {proj.tech}</p>
                                <p><strong>Description:</strong> {proj.des}</p>
                                <p><strong>Link:</strong> <a href={proj.link} className="text-blue-600 hover:underline">{proj.link}</a></p>
                            </div>
                        ))}
                    </section>

                    {/* Courses */}
                    {/* <section>
                        <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-300 pb-2">Courses</h2>
                        {course.map((crs, index) => (
                            <div key={index} className="my-4">
                                <p className="text-lg font-semibold text-gray-900">{crs.name}</p>
                                <p><strong>Provider:</strong> {crs.provider}</p>
                            </div>
                        ))}
                    </section> */}

                    {/* Interests */}
                    {
                        userdata.personal.interest &&
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-300 pb-2">Interests</h2>
                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                                {userdata.personal.interest && userdata.personal.interest.map((interest, index) => (
                                    <li key={index}>{interest.hobbie}</li>
                                ))}
                            </ul>
                        </section>
                    }
                </main>
            </div>
        </div>
    )
}

export default Resume3