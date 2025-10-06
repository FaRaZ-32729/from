import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { FaPaperPlane, FaUserTie, FaLaptopCode, FaHeart } from "react-icons/fa";
import logo from "/logo.png";

const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isCurrentlyWorking, setIsCurrentlyWorking] = useState(false);

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#2b5876]  to-[#4e4376] overflow-hidden px-4">
            {/* Floating gradient circles */}
            <motion.div
                className="absolute w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 top-20 left-20"
                animate={{ y: [0, 30, 0], scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            ></motion.div>
            <motion.div
                className="absolute w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 bottom-20 right-20"
                animate={{ y: [0, -30, 0], scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            ></motion.div>

            {/* Card container */}
            <motion.div
                className="relative z-10 w-full max-w-4xl bg-white/20 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/40 p-10 md:p-14"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                {/* Header */}
                <div className="text-center mb-10">
                    <img src={logo} alt="Logo" className="w-38 h-auto mx-auto mb-4 drop-shadow-lg" />
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-wide">
                        We’re Hiring 
                    </h1>
                    <p className="text-lg text-gray-100 max-w-2xl mx-auto">
                        At <span className="font-semibold text-blue-100">Our Company</span>, we believe in ideas that shape the future.
                        This is your moment to shine — take the next step in your career and join a team
                        that values creativity, collaboration, and growth.
                    </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
                    {/* PERSONAL INFO */}
                    <motion.div
                        className="bg-white/30 p-6 rounded-2xl shadow-lg"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-2xl font-semibold text-blue-900 flex items-center gap-2 mb-4">
                            <FaUserTie /> Personal Information
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="label">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="input-box"
                                    {...register("fullName", { required: "Full name is required" })}
                                />
                                {errors.fullName && (
                                    <span className="error">{errors.fullName.message}</span>
                                )}
                            </div>
                            <div>
                                <label className="label">Father’s Name</label>
                                <input
                                    type="text"
                                    placeholder="Father’s Name"
                                    className="input-box"
                                    {...register("fatherName", { required: "Father name is required" })}
                                />
                            </div>
                            <div>
                                <label className="label">Email</label>
                                <input
                                    type="email"
                                    placeholder="example@email.com"
                                    className="input-box"
                                    {...register("email", { required: "Email is required" })}
                                />
                            </div>
                            <div>
                                <label className="label">Phone Number</label>
                                <input
                                    type="tel"
                                    placeholder="03xx-xxxxxxx"
                                    className="input-box"
                                    {...register("phoneNumber", { required: "Phone number is required" })}
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* PROFESSIONAL INFO */}
                    <motion.div
                        className="bg-white/30 p-6 rounded-2xl shadow-lg"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h2 className="text-2xl font-semibold text-blue-900 flex items-center gap-2 mb-4">
                            <FaLaptopCode /> Professional Details
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="label">Position Applied For</label>
                                <input
                                    type="text"
                                    placeholder="e.g. Flutter Developer"
                                    className="input-box"
                                    {...register("position", { required: "Position is required" })}
                                />
                            </div>
                            <div>
                                <label className="label">Qualification</label>
                                <select className="input-box" {...register("highestQualification")}>
                                    <option>Intermediate</option>
                                    <option>Bachelor’s</option>
                                    <option>Master’s</option>
                                    <option>Ph.D.</option>
                                </select>
                            </div>
                            <div>
                                <label className="label">Upload Resume</label>
                                <input type="file" accept=".pdf,.docx" className="file-box" {...register("resume")} />
                            </div>
                            <div>
                                <label className="label">Portfolio / LinkedIn / Github</label>
                                <input
                                    type="url"
                                    placeholder="https://linkedin.com/in/yourprofile"
                                    className="input-box"
                                    {...register("linkedin")}
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label className="label">Skills</label>
                            <textarea
                                rows="4"
                                placeholder="e.g. React, Flutter, Firebase, Node.js"
                                className="input-box"
                                {...register("skills")}
                            ></textarea>
                        </div>
                    </motion.div>

                    {/* WORK STATUS */}
                    <div className="bg-white/30 p-6 rounded-2xl shadow-lg">
                        <div className="flex items-center gap-3 mb-4">
                            <input
                                type="checkbox"
                                className="w-5 h-5 accent-blue-600"
                                checked={isCurrentlyWorking}
                                onChange={() => setIsCurrentlyWorking(!isCurrentlyWorking)}
                            />
                            <label className="label">Are you currently working?</label>
                        </div>

                        {isCurrentlyWorking && (
                            <motion.div
                                className="grid md:grid-cols-2 gap-6"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6 }}
                            >
                                <div>
                                    <label className="label">Current Job Title</label>
                                    <input type="text" className="input-box" {...register("currentJobTitle")} />
                                </div>
                                <div>
                                    <label className="label">Current Company</label>
                                    <input type="text" className="input-box" {...register("currentCompany")} />
                                </div>
                                <div>
                                    <label className="label">Current Salary</label>
                                    <input type="number" className="input-box" {...register("currentSalary")} />
                                </div>
                                <div>
                                    <label className="label">Notice Period</label>
                                    <input type="text" className="input-box" {...register("noticePeriod")} />
                                </div>
                            </motion.div>
                        )}
                    </div>

                    {/* SUBMIT */}
                    <motion.div className="text-center mt-10">
                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-10 py-4 rounded-full text-white text-lg font-semibold shadow-lg bg-gradient-to-r from-blue-600 to-indigo-500 hover:shadow-2xl transition-all flex items-center justify-center gap-2 mx-auto"
                        >
                            Submit Application
                            <FaPaperPlane className="text-xl" />
                        </motion.button>
                        <p className="text-gray-200 mt-4 flex justify-center items-center gap-2">
                            We value passion over perfection. <FaHeart className="text-red-400" />
                        </p>
                    </motion.div>
                </form>
            </motion.div>

            <style jsx>{`
                .input-box {
                    width: 100%;
                    padding: 12px 14px;
                    border-radius: 12px;
                    border: 1px solid rgba(255,255,255,0.4);
                    background: rgba(255,255,255,0.2);
                    color: #111;
                    font-size: 1rem;
                    outline: none;
                    transition: all 0.3s ease;
                }
                .input-box::placeholder {
                    color: #6b7280;
                }
                .input-box:focus {
                    background: rgba(255,255,255,0.4);
                    box-shadow: 0 0 8px rgba(255,255,255,0.5);
                }
                .file-box {
                    width: 100%;
                    padding: 12px;
                    border-radius: 12px;
                    border: 2px dashed rgba(255,255,255,0.5);
                    background: rgba(255,255,255,0.2);
                    cursor: pointer;
                    transition: all 0.3s;
                }
                .file-box:hover {
                    background: rgba(255,255,255,0.4);
                    border-color: #fff;
                }
                .label {
                    font-weight: 600;
                    color: #1e3a8a;
                    display: block;
                    margin-bottom: 6px;
                }
                .error {
                    color: red;
                    font-size: 0.85rem;
                }
            `}</style>
        </div>
    );
};

export default Form;
