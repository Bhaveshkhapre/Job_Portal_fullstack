import React from 'react'
import { Checkbox } from './ui/checkbox'
import { Label } from './ui/label'

export default function JobFilterPage() {

    const filterData = [
        {
            title: "Job Type",
            options: ["Full Time", "Part Time", "Remote", "Contract", "Work From Home", "Hybrid"]
        },
        {
            title: "Location",
            options: ["Surat", "Ahmedabad", "Vadodara", "Rajkot", "Pune", "Bangalore"]
        },
        {
            title: "Industry",
            options: ["IT", "Finance", "Healthcare", "Education", "Marketing", "Sales"]
        },
        {
            title: "Salary Range",
            options: ["0-3 LPA", "3-6 LPA", "6-10 LPA", "10+ LPA"]
        },
        {
            title: "Experience Level",
            options: ["0-1 Year", "1-3 Year", "3-5 Year", "5+ Year"]
        },
        {
            title: "Company Type",
            options: ["Product Based", "Service Based", "Startup", "MNC"]
        },

    ]

    return (
        <div>
            <div className="bg-white p-4 rounded-lg w-full">
                <h2 className="text-xl font-bold mb-4 text-gray-800">Filter Jobs</h2>
                <hr className="mb-4" />
                {filterData.map((filter, index) => (
                    <div key={index} className="mb-5">
                        <h3 className="font-semibold text-gray-700 mb-2">
                            {filter.title}
                        </h3>
                        <hr className="mb-2" />

                        <div className="space-y-2">
                            {filter.options.map((option, index) => (

                                <div key={index} className="flex items-center space-x-2 my-2">
                                    <Checkbox id={`${filter.title}-${index}`} />
                                    <Label
                                        htmlFor={`${filter.title}-${index}`}
                                        className="text-sm font-medium"
                                    >
                                        {option}
                                    </Label>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}
