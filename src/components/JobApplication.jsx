import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import logo from "/logo.png";
import { FaPaperPlane, FaStar } from "react-icons/fa";

const JobApplication = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isCurrentlyWorking, setIsCurrentlyWorking] = useState(false);

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-teal-50 to-blue-200 overflow-hidden">
            {/* Background animation */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-200 via-blue-100 to-teal-100 blur-3xl opacity-70"
                animate={{
                    backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                }}
            ></motion.div>

            <motion.div
                className="relative z-10 w-full max-w-3xl bg-white/70 backdrop-blur-md rounded-3xl shadow-2xl p-10 border border-white/40"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                {/* Header Section */}
                <motion.div
                    className="text-center mb-8"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    <img src={logo} alt="Logo" className="w-24 mx-auto drop-shadow-lg" />
                    <h2 className="text-4xl font-bold mt-4 text-[#4C9DFF] tracking-wide">
                        Join Our Dynamic Team
                    </h2>
                    <motion.p
                        className="mt-3 text-gray-600 text-lg flex items-center "
                        whileHover={{ scale: 1.02 }}
                    >
                        Ready to take your career to the next level? Fill out the form below
                        and become part of a company that values innovation, creativity, and
                        growth.
                        <motion.div
                            animate={{ rotate: [0, 15, -15, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <FaStar className="text-blue-500 text-xl" />
                        </motion.div>
                    </motion.p>

                </motion.div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                    {/* Full name + Father name */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="font-semibold text-gray-600">Full Name</label>
                            <input
                                type="text"
                                placeholder="Enter your full name"
                                className="input-style"
                                autoComplete="off"
                                {...register("fullName", { required: "Full name is required" })}
                            />
                            {errors.fullName && (
                                <span className="text-red-500 text-sm">{errors.fullName.message}</span>
                            )}
                        </div>

                        <div>
                            <label className="font-semibold text-gray-600">Father's Name</label>
                            <input
                                type="text"
                                placeholder="Enter your father's name"
                                autoComplete="off"
                                className="input-style"
                                {...register("fatherName", { required: "Father name is required" })}
                            />
                            {errors.fatherName && (
                                <span className="text-red-500 text-sm">{errors.fatherName.message}</span>
                            )}
                        </div>
                    </div>

                    {/* Email + Phone */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="font-semibold text-gray-600">Email</label>
                            <input
                                type="email"
                                placeholder="example@email.com"
                                autoComplete="off"
                                className="input-style"
                                {...register("email", { required: "Email is required" })}
                            />
                            {errors.email && (
                                <span className="text-red-500 text-sm">{errors.email.message}</span>
                            )}
                        </div>
                        <div>
                            <label className="font-semibold text-gray-600">Phone Number</label>
                            <input
                                type="tel"
                                placeholder="03xx-xxxxxxx"
                                autoComplete="off"
                                className="input-style"
                                {...register("phoneNumber", { required: "Phone number is required" })}
                            />
                            {errors.phoneNumber && (
                                <span className="text-red-500 text-sm">{errors.phoneNumber.message}</span>
                            )}
                        </div>
                    </div>

                    {/* Marital status + Gender */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="font-semibold text-gray-600">Marital Status</label>
                            <select className="input-style" {...register("maritalStatus")}>
                                <option>Un-Married</option>
                                <option>Married</option>
                            </select>
                        </div>
                        <div>
                            <label className="font-semibold text-gray-600">Gender</label>
                            <select className="input-style" {...register("gender")}>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>
                    </div>

                    {/* Area + DOB */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="font-semibold text-gray-600">Area</label>
                            <input type="text" className="input-style" {...register("area")} />
                        </div>
                        <div>
                            <label className="font-semibold text-gray-600">Date of Birth</label>
                            <input
                                type="date"
                                className="input-style"
                                {...register("dob", { required: "Date of birth is required" })}
                            />
                            {errors.dob && (
                                <span className="text-red-500 text-sm">{errors.dob.message}</span>
                            )}
                        </div>
                    </div>

                    {/* CNIC + Qualification */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="font-semibold text-gray-600">CNIC</label>
                            <input
                                type="text"
                                placeholder="xxxxx-xxxxxxx-x"
                                className="input-style"
                                {...register("cnic", { required: "CNIC is required" })}
                            />
                            {errors.cnic && (
                                <span className="text-red-500 text-sm">{errors.cnic.message}</span>
                            )}
                        </div>
                        <div>
                            <label className="font-semibold text-gray-600">Qualification</label>
                            <select className="input-style" {...register("highestQualification")}>
                                <option>Intermediate</option>
                                <option>Matriculation</option>
                                <option>Bachelor’s</option>
                                <option>Master’s</option>
                            </select>
                        </div>
                    </div>

                    {/* Position */}
                    <div>
                        <label className="font-semibold text-gray-600">Position Applied For</label>
                        <input
                            type="text"
                            placeholder="e.g. Frontend Developer"
                            className="input-style"
                            {...register("position", { required: "Position is required" })}
                        />
                        {errors.position && (
                            <span className="text-red-500 text-sm">{errors.position.message}</span>
                        )}
                    </div>

                    {/* Resume Upload */}
                    <div>
                        <label className="font-semibold text-gray-600">Upload Your Resume</label>
                        <input
                            type="file"
                            accept=".pdf,.docx"
                            className="file-input cursor-pointer"
                            {...register("resume")}
                        />
                    </div>

                    {/* Portfolio Link */}
                    <div>
                        <label className="font-semibold text-gray-600">LinkedIn / Portfolio / Github</label>
                        <input
                            type="url"
                            placeholder="https://yourprofile.com"
                            className="input-style"
                            {...register("linkedin")}
                        />
                    </div>

                    {/* Skills */}
                    <div>
                        <label className="font-semibold text-gray-600">Key Skills</label>
                        <textarea
                            rows="4"
                            placeholder="Mention your skills..."
                            className="input-style"
                            {...register("skills")}
                        ></textarea>
                    </div>

                    {/* Working Status */}
                    <div className="flex items-center gap-3">
                        <input
                            type="checkbox"
                            className="w-5 h-5 accent-[#4C9DFF]"
                            checked={isCurrentlyWorking}
                            onChange={() => setIsCurrentlyWorking(!isCurrentlyWorking)}
                        />
                        <label className="font-semibold text-gray-600">
                            Are you currently working?
                        </label>
                    </div>

                    {/* Conditional Fields */}
                    {isCurrentlyWorking && (
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 gap-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div>
                                <label className="font-semibold text-gray-600">Current Job Title</label>
                                <input type="text" className="input-style" {...register("currentJobTitle")} />
                            </div>
                            <div>
                                <label className="font-semibold text-gray-600">Current Company</label>
                                <input type="text" className="input-style" {...register("currentCompany")} />
                            </div>
                            <div>
                                <label className="font-semibold text-gray-600">Current Salary (Optional)</label>
                                <input type="number" className="input-style" {...register("currentSalary")} />
                            </div>
                            <div>
                                <label className="font-semibold text-gray-600">
                                    Notice Period / Availability
                                </label>
                                <input type="text" className="input-style" {...register("noticePeriod")} />
                            </div>
                        </motion.div>
                    )}

                    {/* Submit Button */}
                    <motion.div
                        className="text-center pt-6"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center justify-center gap-2 px-8 py-3 rounded-full text-white bg-gradient-to-r from-[#4C9DFF] to-[#70CFFF] font-semibold text-lg shadow-md hover:shadow-xl transition-all duration-300"
                        >
                            Submit Application
                            <motion.div whileHover={{ x: 4 }}>
                                <FaPaperPlane className="text-xl" />
                            </motion.div>
                        </motion.button>


                    </motion.div>
                </form>
            </motion.div>

            {/* Updated minimal underline input style */}
            <style jsx>{`
                .input-style {
                    width: 100%;
                    padding: 10px 6px;
                    margin-top: 6px;
                    background: transparent;
                    border: none;
                    border-bottom: 2px solid #4c9dff;
                    transition: all 0.3s ease;
                    outline: none;
                    font-size: 1rem;
                    color: #333;
                }
                .input-style::placeholder {
                    color: #9ca3af;
                }
                .input-style:hover {
                    border-bottom-color: #70cfff;
                }
                .input-style:focus {
                    border-bottom-color: #4c9dff;
                    box-shadow: 0 2px 0 0 #4c9dff;
                    transform: translateY(-2px);
                }
                .file-input {
                    width: 100%;
                    padding: 12px;
                    border-radius: 10px;
                    border: 2px dashed #4c9dff;
                    background: #f9fbff;
                    transition: all 0.3s;
                }
                .file-input:hover {
                    border-color: #3995e5;
                    background: #eef6ff;
                }
            `}</style>
        </div>
    );
};

export default JobApplication;
