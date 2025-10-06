import React from "react";
import { useNavigate } from "react-router";
import logo from "/logo.png";

const SubmissionSummary = () => {

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#2b5876] to-[#4e4376]  text-white ">
            <div className="bg-white/20 backdrop-blur-lgp-10 rounded-2xl shadow-lg text-center max-w-md w-full p-10 ">
                <img
                    src={logo}
                    alt="Company Logo"
                    className="w-34 h-auto mx-auto mb-6 rounded-full shadow-md"
                />
                <h1 className="text-3xl font-bold mb-4">Application Submitted </h1>
                <p className="text-lg text-gray-300 mb-6">
                    Thank you for submitting your application!
                    We’ve received your information successfully, and our team will contact you soon.
                </p>
            </div>
        </div>
    );
};

export default SubmissionSummary;
