import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import logo from "/logo.png";

const JobForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isCurrentlyWorking, setIsCurrentlyWorking] = useState(false);

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="max-w-xl mx-auto bg-gradient-to-r from-blue-100 via-teal-50 to-blue-200 p-8 rounded-xl shadow-2xl">
            {/* Logo */}
            <div className="text-center mb-4">
                <img src={logo} alt="Logo" className="w-24 h-auto mx-auto" />
                <p className="text-sm text-gray-500 mt-2">Join our team and make an impact!</p>
            </div>

            <h2 className="text-4xl font-semibold text-center mb-6 text-[#4C9DFF]">Job Application Form</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">


                <div className="flex gap-6">
                    {/* name  */}
                    <div className="flex-1">
                        <label htmlFor="fullName" className="text-lg font-semibold text-gray-600">Full Name</label>
                        <input
                            id="fullName"
                            type="text"
                            className="w-full p-3 mt-2 border-2 border-[#4C9DFF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4C9DFF] transition duration-300 shadow-sm"
                            {...register('fullName', { required: 'Full name is required' })}
                        />
                        {errors.fullName && <span className="text-red-500 text-sm">{errors.fullName.message}</span>}
                    </div>
                    {/* father's name  */}
                    <div className="flex-1">
                        <label htmlFor="fatherName" className="text-lg font-semibold text-gray-600">Father's Name</label>
                        <input
                            id="fatherName"
                            type="text"
                            className="w-full p-3 mt-2 border-2 border-[#4C9DFF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4C9DFF] transition duration-300 shadow-sm"
                            {...register('fatherName', { required: 'Father name is required' })}
                        />
                        {errors.fatherName && <span className="text-red-500 text-sm">{errors.fatherName.message}</span>}
                    </div>
                </div>

                <div className="flex gap-6">
                    {/* email  */}
                    <div className="flex-1">
                        <label htmlFor="email" className="text-lg font-semibold text-gray-600">Email Address</label>
                        <input
                            id="email"
                            type="email"
                            autoComplete='off'
                            className="w-full p-3 mt-2 border-2 border-[#4C9DFF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4C9DFF] transition duration-300 shadow-sm"
                            {...register('email', { required: 'Email is required' })}
                        />
                        {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                    </div>
                    {/* number  */}
                    <div className="flex-1">
                        <label htmlFor="phoneNumber" className="text-lg font-semibold text-gray-600">Phone Number</label>
                        <input
                            id="phoneNumber"
                            type="tel"
                            className="w-full p-3 mt-2 border-2 border-[#4C9DFF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4C9DFF] transition duration-300 shadow-sm"
                            {...register('phoneNumber', { required: 'Phone number is required' })}
                        />
                        {errors.phoneNumber && <span className="text-red-500 text-sm">{errors.phoneNumber.message}</span>}
                    </div>
                </div>

                <div className="flex gap-6">
                    {/* maritial status  */}
                    <div className="flex-1">
                        <label htmlFor="maritalStatus" className="text-lg font-semibold text-gray-600">Marital Status</label>
                        <select
                            id="maritalStatus"
                            className="w-full p-3 mt-2 border-2 border-[#4C9DFF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4C9DFF] transition duration-300 shadow-sm"
                            {...register('maritalStatus')}
                        >
                            <option value="single">Un-Married</option>
                            <option value="married">Married</option>
                        </select>
                    </div>
                    {/* gender  */}
                    <div className="flex-1">
                        <label htmlFor="gender" className="text-lg font-semibold text-gray-600">Gender</label>
                        <select
                            id="gender"
                            className="w-full p-3 mt-2 border-2 border-[#4C9DFF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4C9DFF] transition duration-300 shadow-sm"
                            {...register('gender')}
                        >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                    {/* area  */}
                    <div>
                        <label htmlFor="area" className="text-lg font-semibold text-gray-600">Area</label>
                        <input
                            id="area"
                            type="text"
                            className="w-full p-3 mt-2 border-2 border-[#4C9DFF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4C9DFF] transition duration-300 shadow-sm"
                            {...register('area')}
                        />
                    </div>
                    {/* dob  */}
                    <div>
                        <label htmlFor="dob" className="text-lg font-semibold text-gray-600">Date of Birth</label>
                        <input
                            id="dob"
                            type="date"
                            className="w-full p-3 mt-2 border-2 border-[#4C9DFF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4C9DFF] transition duration-300 shadow-sm"
                            {...register('dob', { required: 'Date of birth is required' })}
                        />
                        {errors.dob && <span className="text-red-500 text-sm">{errors.dob.message}</span>}
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                    {/* cnic  */}
                    <div>
                        <label htmlFor="cnic" className="text-lg font-semibold text-gray-600">CNIC</label>
                        <input
                            id="cnic"
                            type="text"
                            className="w-full p-3 mt-2 border-2 border-[#4C9DFF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4C9DFF] transition duration-300 shadow-sm"
                            {...register('cnic', { required: 'CNIC is required' })}
                        />
                        {errors.cnic && <span className="text-red-500 text-sm">{errors.cnic.message}</span>}
                    </div>
                    {/* qualification  */}
                    <div>
                        <label htmlFor="highestQualification" className="text-lg font-semibold text-gray-600">Highest Qualification</label>
                        <select
                            id="highestQualification"
                            className="w-full p-3 mt-2 border-2 border-[#4C9DFF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4C9DFF] transition duration-300 shadow-sm"
                            {...register('highestQualification')}
                        >
                            <option value="intermediate">Intermediate</option>
                            <option value="matriculation">Matriculation</option>
                        </select>
                    </div>
                </div>

                {/* position */}
                <div>
                    <label htmlFor="position" className="text-lg font-semibold text-gray-600">Position Applied For</label>
                    <input
                        id="position"
                        type="text"
                        className="w-full p-3 mt-2 border-2 border-[#4C9DFF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4C9DFF] transition duration-300 shadow-sm"
                        {...register('position', { required: 'Position is required' })}
                    />
                    {errors.position && <span className="text-red-500 text-sm">{errors.position.message}</span>}
                </div>

                {/*  upload */}
                <div>
                    <label htmlFor="resume" className="text-lg font-semibold text-gray-600">Upload Your Resume</label>
                    <input
                        id="resume"
                        type="file"
                        accept=".pdf,.docx"
                        className="w-full p-3 mt-2 border-2 border-[#4C9DFF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4C9DFF] transition duration-300 shadow-sm"
                        {...register('resume')}
                    />
                </div>

                {/* link */}
                <div>
                    <label htmlFor="linkedin" className="text-lg font-semibold text-gray-600">LinkedIn / Portfolio / GitHub</label>
                    <input
                        id="linkedin"
                        type="url"
                        className="w-full p-3 mt-2 border-2 border-[#4C9DFF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4C9DFF] transition duration-300 shadow-sm"
                        {...register('linkedin')}
                    />
                </div>

                {/* skills */}
                <div>
                    <label htmlFor="skills" className="text-lg font-semibold text-gray-600">Key Skills</label>
                    <textarea
                        id="skills"
                        className="w-full p-3 mt-2 border-2 border-[#4C9DFF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4C9DFF] transition duration-300 shadow-sm"
                        rows="4"
                        {...register('skills')}
                    ></textarea>
                </div>

                {/* Working Status  */}
                <div className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        className="w-5 h-5"
                        checked={isCurrentlyWorking}
                        onChange={() => setIsCurrentlyWorking(!isCurrentlyWorking)}
                    />
                    <label className="text-lg font-semibold text-gray-600">Are you currently working?</label>
                </div>

                {/* if yess  */}

                {isCurrentlyWorking && (
                    <div className="space-y-6">
                        <div>
                            <label htmlFor="currentJobTitle" className="text-lg font-semibold text-gray-600">Current Job Title</label>
                            <input
                                id="currentJobTitle"
                                type="text"
                                className="w-full p-3 mt-2 border-2 border-[#4C9DFF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4C9DFF] transition duration-300 shadow-sm"
                                {...register('currentJobTitle')}
                            />
                        </div>

                        <div>
                            <label htmlFor="currentCompany" className="text-lg font-semibold text-gray-600">Current Company</label>
                            <input
                                id="currentCompany"
                                type="text"
                                className="w-full p-3 mt-2 border-2 border-[#4C9DFF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4C9DFF] transition duration-300 shadow-sm"
                                {...register('currentCompany')}
                            />
                        </div>

                        <div>
                            <label htmlFor="currentSalary" className="text-lg font-semibold text-gray-600">Current Salary (Optional)</label>
                            <input
                                id="currentSalary"
                                type="number"
                                className="w-full p-3 mt-2 border-2 border-[#4C9DFF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4C9DFF] transition duration-300 shadow-sm"
                                {...register('currentSalary')}
                            />
                        </div>

                        <div>
                            <label htmlFor="noticePeriod" className="text-lg font-semibold text-gray-600">Notice Period / Availability to Join</label>
                            <input
                                id="noticePeriod"
                                type="text"
                                className="w-full p-3 mt-2 border-2 border-[#4C9DFF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4C9DFF] transition duration-300 shadow-sm"
                                {...register('noticePeriod')}
                            />
                        </div>
                    </div>
                )}

                {/* button */}
                <div className="mt-6 text-center">
                    <button
                        type="submit"
                        className="bg-[#4C9DFF] text-white py-3 px-6 rounded-full text-lg hover:bg-[#3995E5] transition duration-300"
                    >
                        Submit Application
                    </button>
                </div>

            </form>
        </div>
    );
};

export default JobForm;
