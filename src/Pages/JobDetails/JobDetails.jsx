import { div } from "motion/react-client";
import React from "react";
import { Link, useLoaderData } from "react-router";
import {
  FaBriefcase,
  FaMoneyBillWave,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { MdWork, MdUpdate } from "react-icons/md";
import { BsCalendar2DateFill } from "react-icons/bs";
import { IoMdPerson } from "react-icons/io";
const JobDetails = () => {
  const job = useLoaderData();
  console.log(job);
  const {
    title,
    company,
    location,
    jobType,
    category,
    applicationDeadline,
    description,
    requirements,
    responsibilities,
    status,
    hr_email,
    hr_name,
    company_logo,
    salaryRange,
  } = job;
  return (
    <div>
      <div className=" rounded-lg px-10 py-6 my-9 shadow-lg bg-white max-w-3xl mx-auto">
        <img className="mb-2" src={company_logo} alt="" />
        <h1 className="mb-3 text-[24px] font-bold">{title}</h1>
        <h2 className="text-lg font-semibold mb-2">Employment Info</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-10 text-sm">
          <div className="flex items-center gap-2">
            <FaBriefcase className="text-gray-500" />
            <span className="font-medium">Industry:</span> {company}
          </div>

          <div className="flex items-center gap-2">
            <MdWork className="text-gray-500" />
            <span className="font-medium">Status: </span> {status}
          </div>

          <div className="flex items-center gap-2">
            <FaMoneyBillWave className="text-gray-500" />
            <span className="font-medium">Salary:</span>
            {salaryRange.currency.toUpperCase() === "BDT"
              ? `${job.salaryRange.min} - ${job.salaryRange.max}/Month`
              : `$${job.salaryRange.min} - $${job.salaryRange.max}/Month`}
          </div>

          <div className="flex items-center gap-2">
            <FaClock className="text-gray-500" />
            <span className="font-medium">Category:</span> {category}
          </div>

          <div className="flex items-center gap-2">
            <MdWork className="text-gray-500" />
            <span className="font-medium">Job type:</span> {jobType}
          </div>

          <div className="flex items-center gap-2">
            <BsCalendar2DateFill className="text-gray-500" />
            <span className="font-medium">Deadline:</span> {applicationDeadline}
          </div>

          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-gray-500" />
            <span className="font-medium">Location:</span> {location}
          </div>
          <div className="flex items-center gap-2">
            <IoMdPerson className="text-gray-500" />
            <span className="font-medium">HR Name: </span> {hr_name}
          </div>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-gray-500" />
            <span className="font-medium">HR Email: </span> {hr_email}
          </div>
          
        </div>
         <div className="mt-6">
            <p><span className="text-[16px] font-bold">Description:</span> {description}</p>
            <div className="flex flex-wrap gap-3 mt-2">
                <p><span className="text-[16px] font-bold">Requirements:</span> </p>
                {requirements.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full"
                  >
                     {tag}
                  </span>
                ))}
            </div>
            <div className="flex flex-wrap gap-3 mt-2">
                <p><span className="text-[16px] font-bold">Responsibilities:</span> </p>
                {responsibilities.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full"
                  >
                     {tag}
                  </span>
                ))}
            </div>
        </div>
<div className="mt-6 flex justify-end">
            <Link className="bg-blue-500 px-5 py-2 rounded-lg text-white">Apply Now</Link>
</div>
      </div>
    </div>
  );
};

export default JobDetails;
