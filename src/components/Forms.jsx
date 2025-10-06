import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

const Forms = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({});

    const onNext = (data) => {
        setFormData((prev) => ({ ...prev, ...data }));
        setStep(step + 1);
    };

    const onBack = () => setStep(step - 1);

    const onSubmit = (data) => {
        const finalData = { ...formData, ...data };
        console.log("Submitted Data:", finalData);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#2b5876] to-[#4e4376] px-4">
            <motion.div
                className="w-full max-w-3xl bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/40 p-10"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <h2 className="text-3xl font-bold text-center text-white mb-8">
                    Job Application Form
                </h2>

                <form
                    onSubmit={step === 3 ? handleSubmit(onSubmit) : handleSubmit(onNext)}
                    className="space-y-8"
                >
                    {/* Step 1: Personal Info */}
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 50 }}
                            transition={{ duration: 0.4 }}
                        >
                            <h3 className="text-2xl text-blue-100 font-semibold mb-4">
                                Personal Information
                            </h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="text-white">Full Name</label>
                                    <input
                                        type="text"
                                        {...register("fullName", { required: "Full name is required" })}
                                        placeholder="John Doe"
                                        className="input-box"
                                    />
                                    {errors.fullName && (
                                        <span className="text-red-400 text-sm">{errors.fullName.message}</span>
                                    )}
                                </div>
                                <div>
                                    <label className="text-white">Email</label>
                                    <input
                                        type="email"
                                        {...register("email", { required: "Email is required" })}
                                        placeholder="example@email.com"
                                        className="input-box"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* Step 2: Professional Info */}
                    {step === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 50 }}
                            transition={{ duration: 0.4 }}
                        >
                            <h3 className="text-2xl text-blue-100 font-semibold mb-4">
                                Professional Details
                            </h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="text-white">Position Applied For</label>
                                    <input
                                        type="text"
                                        {...register("position", { required: "Position is required" })}
                                        placeholder="Frontend Developer"
                                        className="input-box"
                                    />
                                </div>
                                <div>
                                    <label className="text-white">Qualification</label>
                                    <select className="input-box" {...register("qualification")}>
                                        <option>Intermediate</option>
                                        <option>Bachelor’s</option>
                                        <option>Master’s</option>
                                    </select>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* Step 3: Final Review */}
                    {step === 3 && (
                        <motion.div
                            key="step3"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            <h3 className="text-2xl text-blue-100 font-semibold mb-4">
                                Final Step
                            </h3>
                            <p className="text-gray-100 mb-6">
                                Review your details and click <strong>Submit</strong> to send your application.
                            </p>
                            <div>
                                <label className="text-white">Portfolio Link</label>
                                <input
                                    type="url"
                                    {...register("portfolio")}
                                    placeholder="https://yourportfolio.com"
                                    className="input-box"
                                />
                            </div>
                        </motion.div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex justify-between pt-6">
                        {step > 1 && (
                            <button
                                type="button"
                                onClick={onBack}
                                className="px-6 py-3 rounded-full bg-white/20 text-white font-medium hover:bg-white/30 transition"
                            >
                                Back
                            </button>
                        )}

                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="ml-auto flex items-center gap-2 px-8 py-3 rounded-full text-white bg-gradient-to-r from-blue-500 to-indigo-500 font-semibold shadow-lg"
                        >
                            {step === 3 ? "Submit Application" : "Next"}
                            {step === 3 && <FaPaperPlane />}
                        </motion.button>
                    </div>
                </form>
            </motion.div>

            <style jsx>{`
        .input-box {
          width: 100%;
          padding: 12px 14px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.4);
          background: rgba(255, 255, 255, 0.2);
          color: white;
          outline: none;
          transition: 0.3s;
        }
        .input-box::placeholder {
          color: #e0e0e0;
        }
        .input-box:focus {
          background: rgba(255, 255, 255, 0.35);
        }
      `}</style>
        </div>
    );
};

export default Forms;
