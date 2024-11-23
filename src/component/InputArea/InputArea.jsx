import React, { useState } from 'react'
import { useFieldArray, useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { clruserdata, getuserdata } from '../../Store/Slice/UserSlice'
import { BsFillPlusCircleFill } from "react-icons/bs";
import { RiCloseFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
const InputArea = () => {
    const userRedux = useSelector(state => state.users.userdata)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const emptydata = {
        experience: [{
            company: "", description: "", worktitle: "", tags: "", yearfrom: "", yearto: "",
            present: false

        }],
        course: [{
            name: "", provider: ""
        }],
        education: [{
            degree: "", grade: "", university: "", yearfrom: "", yearto: "",
        }],
        personal: {
            technicalskill: [{
                skill: "", rate: ""
            }],
            interest: [{
                hobbie: ""
            }],
            firstname: "", lastname: "", date: "", email: "", mob: "",
            address: "", title: ""
        },
        project: [{
            name: "", tech: "", des: "", link: ""
        }],
        link: {
            linkedin: "",
            github: "",
            portfolio: ""
        },
    }
    const Fdata = userRedux.personal ? userRedux : emptydata;
    // here we are using the use form hook for efficiently handle the form
    const {
        register,
        handleSubmit,
        reset,
        control,
        formState: { errors, isSubmitting },
    } = useForm({
        defaultValues: emptydata,
    })

    const eduerror = errors.education || [];

    // we had used this usefieldarray property for that is user want to add more information like experience 


    const {
        fields: interestFields,
        append: interestAppend,
        remove: interestRemove
    } = useFieldArray({ control, name: "personal.interest" });

    const {
        fields: technicalFields,
        append: technicalAppend,
        remove: technicalRemove
    } = useFieldArray({ control, name: "personal.technicalskill" });

    const {
        fields: experienceFields,
        append: experienceAppend,
        remove: experienceRemove
    } = useFieldArray({ control, name: "experience" });

    const {
        fields: courseFields,
        append: courseAppend,
        remove: courseRemove
    } = useFieldArray({ control, name: "course" });

    const {
        fields: educationFields,
        append: educationAppend,
        remove: educationRemove
    } = useFieldArray({ control, name: "education" });

    const {
        fields: projectFields,
        append: projectAppend,
        remove: projectRemove
    } = useFieldArray({ control, name: "project" });

    const onSubmit = (data) => {
        dispatch(getuserdata(data))
        console.log(data);

        navigate("/choose")
    }
    const clrFunc = () => {
        // dispatch(clruserdata())
        reset(emptydata)
    }

    return (
        <div className='h-auto bg-stone-900'>
            <form onSubmit={handleSubmit(onSubmit)} className="p-2 md:p-6 bg-black shadow-md ">
                <div className=''>
                    <h2 className="text-2xl font-semibold mb-4">Personal Details</h2>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1" htmlFor="firstName">
                            First Name
                        </label>
                        {/* here we had used the register for sack of  connecting this input field with form hook  */}
                        <input  {...register("personal.firstname", { required: true })} className="bg-gray-900 p-2 w-full rounded-md" placeholder="Name" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1" htmlFor="lastName">
                            Last Name
                        </label>
                        <input {...register("personal.lastname", { required: true })} className="bg-gray-900 p-2 w-full rounded-md" placeholder="Last Name" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1" htmlFor="email">
                            Email
                        </label>
                        <input className="singlefield bg-gray-900 p-2 w-full rounded-md" type={"email"} inputMode={"email"} {...register("personal.email", { required: true })} placeholder="Email" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1" htmlFor="phone">
                            Phone Number
                        </label>

                        <input className="input-mob singlefield bg-gray-900 p-2 w-full rounded-md" type={"number"} inputMode={"tel"} {...register("personal.mob", { maxLength: 10, required: true })} placeholder="Mobile No- +91" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1" htmlFor="address">
                            Address
                        </label>
                        <textarea
                            {...register("personal.city", { required: true })} placeholder="Address" className="bg-gray-900 p-2 w-full rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1" htmlFor="title">
                            Title
                        </label>
                        <input {...register("personal.title", { required: true })} className="bg-gray-900 p-2 w-full rounded-md" placeholder="Professional Title e.g Full Stack Developer" />
                    </div>
                </div>
                {/* this section used for the experence */}
                <div className=''>
                    <h2 className="text-2xl font-semibold mb-4">Experience</h2>
                    {experienceFields.map((item, index) => {
                        return (
                            <React.Fragment key={item.id}>
                                <div className="input-index">{index + 1}.</div>
                                <input {...register(`experience[${index}].worktitle`)} defaultValue={item.worktitle} placeholder="Title/Position" className='bg-gray-900 p-2 w-full rounded-md mb-4' />
                                <input {...register(`experience[${index}].company`)} defaultValue={item.company} placeholder="Workplace/Company" className='bg-gray-900 p-2 w-full rounded-md mb-4' />
                                <input className="bg-gray-900 p-2 w-full rounded-md mb-4" {...register(`experience[${index}].description`)} defaultValue={item.description} placeholder="Description about your work in one or two line" />
                                <input className="bg-gray-900 p-2 w-full rounded-md mb-4" {...register(`experience[${index}].tags`)} defaultValue={item.tags} placeholder="Link, Tags, Tech-stack or anything" />
                                <div className="year flex gap-4">
                                    <input name="year" className="bg-gray-900 p-2 w-full rounded-md mb-4" inputMode={"numeric"} {...register(`experience[${index}].yearfrom`)} defaultValue={item.yearfrom} placeholder="from mm/yy" />
                                    <input name="year" className="bg-gray-900 p-2 w-full rounded-md mb-4" inputMode={"numeric"} {...register(`experience[${index}].yearto`)} defaultValue={item.yearto} placeholder="to mm/yy" />
                                </div>
                                {index !== 0 ?
                                    <div className="input-remove flex items-center justify-center gap-4 mb-3 ">

                                        <div className='w-[3] bg-red-700 rounded' onClick={() => { experienceRemove(index) }}>
                                            <RiCloseFill className="input-remove-icon " />
                                            {/* <div>Remove</div> */}
                                        </div>
                                    </div> : null}
                            </React.Fragment>
                        )
                    })}
                    <div className="add-input-block flex items-center justify-center ">
                        -- <BsFillPlusCircleFill className="add-input-icon" onClick={() => { experienceAppend() }} /> --
                        <div></div>
                    </div>
                </div>
                <div className=''>
                    <h2 className="text-2xl font-semibold mb-4">Interest/Skills</h2>
                    <div className="input-interest">
                        {interestFields.map((item, index) => {
                            return (
                                <div key={item.id} className='mb-2' >
                                    <input className="bg-gray-900 p-2 w-full rounded- mb-2" {...register(`personal.interest[${index}].hobbie`, { required: true })} defaultValue={item.hobbie} placeholder="Interest/Hobbies e.g Chess" />
                                    {index !== 0 ?
                                        <div className='flex items-center justify-center gap-4 mb-3 '>

                                            <div className='w-[3] bg-red-700 rounded'>
                                                <RiCloseFill onClick={() => { interestRemove(index) }} className="interest-cls-icon" />
                                            </div>
                                        </div>
                                        : null}
                                </div>
                            )
                        })}
                    </div>
                    <div className="add-input-block flex items-center justify-center ">
                        -- <BsFillPlusCircleFill className="add-input-icon" onClick={() => { interestAppend() }} /> --
                        <div></div>
                    </div>

                    {technicalFields.map((item, index) => {
                        return (
                            <div key={item.id} className="flex flex-col lg:flex-row items-center justify-around my-2">
                                <input className="bg-gray-900 p-2 w-[45%] rounded-md" {...register(`personal.technicalskill[${index}].skill`, { required: true })} defaultValue={item.skill} placeholder="Technical Skills e.g Javascript" />
                                <input className="bg-gray-900 p-2 w-[45%] rounded-md" type={"number"} inputMode={"decimal"} min="0" max="10" {...register(`personal.technicalskill[${index}].rate`, { required: true })} defaultValue={item.rate} placeholder="Rate your skill out of 10" />
                                {index !== 0 ?
                                    <div className="input-remove flex items-center justify-center gap-4 mb-4">
                                        <div onClick={() => { technicalRemove(index) }} className='w-[3] bg-red-700 rounded'>
                                            <RiCloseFill className="input-remove-icon" />

                                        </div>
                                    </div> : null}
                            </div>
                        )
                    })}
                    <div className="add-input-block flex items-center justify-center ">
                        -- <BsFillPlusCircleFill className="add-input-icon" onClick={() => { technicalAppend() }} /> --
                        <div></div>
                    </div>

                </div>
                <div className=''>
                    <h2 className="text-2xl font-semibold mb-4">Education</h2>
                    {educationFields.map((item, index) => {
                        return (
                            <React.Fragment key={item.id} >
                                <div className="input-index">{index + 1}.</div>
                                <input className="singlefield bg-gray-900 p-2 w-full rounded-md mb-3" {...register(`education[${index}].degree`, { required: true })} placeholder="College/Degree/Diploma Name" />

                                <div className="grade-input">
                                    <input type={"number"} className='bg-gray-900 p-2 w-full rounded-md mb-3' inputMode={"decimal"} step={"any"} min="0" max="100" {...register(`education[${index}].grade`, { required: true })} placeholder="Grade/Percentage" />

                                </div>
                                <input className="singlefield bg-gray-900 p-2 w-full rounded-md mb-3" {...register(`education[${index}].university`, { required: true })} placeholder="Institute/University Name" />
                                <div className="year flex items-center gap-4">
                                    <input className='bg-gray-900 p-2 w-full rounded-md mb-3' name="year" inputMode={"decimal"} {...register(`education[${index}].yearfrom`, { required: true })} placeholder="yyyy e.g 2010" /><span className="text-3xl">-</span>
                                    <input className="bg-gray-900 p-2 w-full rounded-md mb-3" name="year" inputMode={"numeric"} {...register(`education[${index}].yearto`, { required: true })} placeholder="yyyy e.g 2014" />
                                </div>
                                {index !== 0 ?
                                    <div className="input-remove flex items-center justify-center gap-4 mb-4">
                                        <div onClick={() => { educationRemove(index) }} className='w-[3] bg-red-700 rounded'>
                                            <RiCloseFill className="input-remove-icon" />

                                        </div>
                                    </div> : null}
                            </React.Fragment>
                        )
                    })}
                    <div className="add-input-block  flex items-center justify-center ">
                        -- <BsFillPlusCircleFill className="add-input-icon" onClick={() => { educationAppend() }} /> --
                        <div></div>
                    </div>
                </div>
                <div >
                    <h2 className='text-2xl font-semibold mb-4'>Project</h2>
                    {projectFields.map((item, index) => {
                        return (
                            <React.Fragment key={item.id}>
                                <div className="input-index">{index + 1}.</div>
                                <input className="bg-gray-900 p-2 w-full rounded-md mb-3" {...register(`project[${index}].name`)} defaultValue={item.name} placeholder="Project Title" />
                                <input className="bg-gray-900 p-2 w-full rounded-md mb-3" {...register(`project[${index}].tech`)} defaultValue={item.tech} placeholder="Tech Used e.g Html, Python (Use comma and space)" />
                                <input className="bg-gray-900 p-2 w-full rounded-md mb-3" {...register(`project[${index}].des`)} defaultValue={item.name} placeholder="Project Description (Optional)" />
                                <input type={"url"} className="bg-gray-900 p-2 w-full rounded-md mb-3" {...register(`project[${index}].link`)} defaultValue={item.link} placeholder="Link (Optional)" />
                                {index !== 0 ?
                                    <div className="input-remove flex items-center justify-center">
                                        <div onClick={() => { projectRemove(index) }} className="bg-red-700 rounded">
                                            <RiCloseFill className="input-remove-icon" />

                                        </div>
                                    </div> : null}
                            </React.Fragment>
                        )
                    })}
                    <div className="add-input-block flex items-center justify-center" >
                        -- <BsFillPlusCircleFill className="add-input-icon" onClick={() => { projectAppend() }} /> --
                        <div></div>
                    </div>


                    <div className="input-head">{'Courses/Trainings & Certificates'}</div>
                    {courseFields.map((item, index) => {
                        return (
                            <React.Fragment key={item.id}>
                                <div className="input-index">{index + 1}.</div>
                                <input className='bg-gray-900 p-2 w-full rounded-md mb-3' {...register(`course[${index}].name`)} defaultValue={item.name} placeholder="Course/Certificate Name" />
                                <input className='bg-gray-900 p-2 w-full rounded-md mb-3' {...register(`course[${index}].provider`)} defaultValue={item.provider} placeholder="Course Provider Name" />
                                {index !== 0 ?
                                    <div className="input-remove flex items-center justify-center">
                                        <div onClick={() => { courseRemove(index) }} className="bg-red-700 rounded">
                                            <RiCloseFill className="input-remove-icon" />
                                        </div>
                                    </div> : null}
                            </React.Fragment>
                        )
                    })}
                    <div className="add-input-block flex items-center justify-center">
                        -- <BsFillPlusCircleFill className="add-input-icon" onClick={() => { courseAppend() }} /> --
                        <div></div>
                    </div>
                </div>
                <div className=''>
                    <h2 className="text-2xl font-semibold mb-4">Social/Links</h2>
                    <input className="bg-gray-900 p-2 w-full rounded-md mb-3 " {...register("link.linkedin", { required: true })} placeholder="Linkedin Url" />
                    <input className="bg-gray-900 p-2 w-full rounded-md mb-3" {...register("link.github", { required: true })} placeholder="Github Url" />
                    <input className="singlefield bg-gray-900 p-2 w-full rounded-md mb-3" {...register("link.portfolio")} placeholder="Porfolio Url or any other (Optional)" />

                    {errors.personal || errors.education ?
                        <span className="input-err singlefield">Please enter the required field</span> : null}
                    {userRedux.personal ? <div className="singlefield btndiv mt-3">
                        <button className="input-btn bg-gray-900 p-2 w-full rounded-md mb-3" value={"Clear All"} onClick={clrFunc} >Clear</button>
                        {/* <input className="input-btn bg-gray-900 p-2 w-full rounded-md mb-3" type="submit" value={"Next"} /> */}
                    </div> :
                        <input className="input-btn singlefield mt-3" type="submit" value={"Next"} />}

                </div>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded-md" disabled={isSubmitting}>
                    Submit
                </button>

            </form>
        </div>
    )
}

export default InputArea