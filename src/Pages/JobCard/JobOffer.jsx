import React, {  useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router";

const JobOffer = () => {
const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/job")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        console.log(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching jobs:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading jobs...</p>;
  }


  return (
    <div className="">
        <div>
            <h1>Jobs of the day</h1>
            <p>Search and connect with the right candidates faster</p>
        </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto px-8 py-8">
        {jobs.map((job) => (
          <div key={job._id}>
            <div className="p-5 bg-white border lg:h-[320px] border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              {/* Company Info */}
              <div className="flex items-center mb-3">
                <img
                  src={job.company_logo}                  
                  alt="logo"
                  className="w-12 h-12 rounded-lg"
                />
                <div className="ml-3">
                  <h3 className="font-semibold text-lg text-gray-800">
                    {job.title}
                  </h3>
                  <p className="text-sm text-gray-500 flex items-center gap-1"><CiLocationOn></CiLocationOn>{job.location}</p>
                </div>
              </div>

              {/* Job Title */}
              <h2 className="text-xl font-bold text-gray-900">
                {job.company}
              </h2>

              {/* Job Meta */}
              <div className="flex items-center text-gray-500 text-sm gap-4 mt-2">
                <div className="flex items-center gap-1">
                  <span>🕒</span>
                  <p>Full Time</p>
                </div>
                <div className="flex items-center gap-1">
                  <span>📅</span>
                  <p>Deadline: {job.applicationDeadline}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm mt-3">
                {job.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {job.requirements.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="flex justify-between items-center mt-5">
                <p className="text-indigo-600 font-bold text-lg">
                  {job.salaryRange.max} - {job.salaryRange.min} {job.salaryRange.currency}
                  <span className="text-gray-500 font-normal text-sm">
                    /Month
                  </span>
                </p>
                <Link to={`job/${job._id}`} className="px-4 py-2 bg-indigo-100 text-indigo-700 font-semibold rounded-lg hover:bg-indigo-200 transition">
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobOffer;
