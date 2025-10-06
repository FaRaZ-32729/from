import React from "react";
import { useLocation, useNavigate } from "react-router";
import axios from "axios";

const Preview = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const formData = state?.formData;

    if (!formData) return <p className="text-center text-white">No data to preview.</p>;

    const handleEdit = () => navigate("/", { state: { formData } });

    console.log(formData)


    const handleSubmit = async () => {
        try {
            const formPayload = new FormData();

            formPayload.append("FullName", formData.fullName);
            formPayload.append("FatherName", formData.fatherName);
            formPayload.append("CNIC", formData.cnic);
            formPayload.append("Email", formData.email);
            formPayload.append("Phone", formData.phone);
            formPayload.append("Area", formData.area);
            formPayload.append("DOB", formData.dob);
            formPayload.append("Gender", formData.gender);
            formPayload.append("MaritalStatus", formData.maritalStatus);
            formPayload.append("Position", formData.position);
            formPayload.append("Qualification", formData.qualification);
            formPayload.append("Skills", formData.skills);
            formPayload.append("Portfolio", formData.portfolio || "");

            if (formData.resume && formData.resume[0]) {
                formPayload.append("Resume", formData.resume[0]); // file object
            }

            formPayload.append("IsWorking", formData.isWorking || "no");
            if (formData.isWorking === "yes") {
                formPayload.append("CurrentJobTitle", formData.currentJobTitle);
                formPayload.append("CurrentCompany", formData.currentCompany);
                formPayload.append("CurrentSalary", formData.currentSalary);
                formPayload.append("NoticePeriod", formData.noticePeriod);
            }

            const response = await axios.post(
                "http://192.168.103.2:84/Employee/EmployeeAddEdit",
                formPayload
            );

            console.log("Response:", response.data);
            alert("Form submitted successfully!");
            navigate("/submitted");
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Submission failed!");
        }
    };



    // const handleSubmit = async () => {
    //     try {
    //         const formPayload = new FormData();

    //         // Loop through your formData and append keys
    //         for (const key in formData) {
    //             // Skip the blob URL used for preview
    //             if (key === "resumeFile") continue;

    //             // If this is the resume field, append the actual file
    //             if (key === "resume" && formData.resume && formData.resume[0]) {
    //                 formPayload.append("resume", formData.resume[0]); // File object
    //             } else {
    //                 formPayload.append(key, formData[key]);
    //             }
    //         }

    //         const response = await axios.post(
    //             "http://192.168.103.2:84/Employee/EmployeeAddEdit",
    //             formPayload,
    //             {
    //                 headers: {
    //                     "Content-Type": "multipart/form-data",
    //                 },
    //             }
    //         );

    //         console.log("Response:", response.data);
    //         alert("Form submitted successfully!");
    //         navigate("/submitted");
    //     } catch (error) {
    //         console.error("Error submitting form:", error);
    //         alert("Submission failed!");
    //     }
    // };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#2b5876] to-[#4e4376] flex items-center justify-center p-6">
            <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-3xl p-8 max-w-3xl w-full shadow-2xl text-white">
                <h2 className="text-3xl font-bold text-center mb-6">Preview Your Application</h2>
                <div className="space-y-3">
                    {Object.entries(formData).map(([key, value]) => {
                        // Skip displaying the resume file URL 
                        if (key === "resumeFile") return null;

                        return (
                            <div key={key} className="flex justify-between border-b border-white/30 py-2">
                                <span className="font-semibold capitalize">
                                    {key.replace(/([A-Z])/g, " $1")}:
                                </span>
                                <span>
                                    {key === "portfolio" && value ? (
                                        <a
                                            href={value}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-300 underline hover:text-blue-400"
                                        >
                                            View Portfolio
                                        </a>
                                    ) : key === "resumeName" ? (
                                        <a
                                            href={formData.resumeFile}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-green-300 underline hover:text-green-400"
                                        >
                                            {value}
                                        </a>
                                    ) : (
                                        String(value)
                                    )}
                                </span>
                            </div>
                        );
                    })}
                </div>

                <div className="flex justify-between mt-8">
                    <button
                        onClick={handleEdit}
                        className="px-6 py-3 bg-white/20 rounded-full hover:bg-white/30 transition font-medium"
                    >
                        Edit
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full font-semibold shadow-lg"
                    >
                        Submit Application
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Preview;
