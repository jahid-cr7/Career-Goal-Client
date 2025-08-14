import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

export default function JobCarousel() {
  const [jobData, setJobData] = useState([]);
  const [page, setPage] = useState(0);
  const itemsPerPage = 10; // 5 columns × 2 rows

  useEffect(() => {
    fetch("http://localhost:3000/jobsCategory")
      .then((res) => res.json())
      .then((data) => setJobData(data))
      .catch((err) => console.error("Failed to fetch jobs:", err));
  }, []);

  // Duplicate data so carousel feels endless
  const duplicatedJobs = [...jobData, ...jobData];

  const totalPages = Math.ceil(duplicatedJobs.length / itemsPerPage);

  const paginate = (direction) => {
    setPage((prev) => {
      let next = prev + direction;
      if (next < 0) next = totalPages - 1;
      if (next >= totalPages) next = 0;
      return next;
    });
  };

  const startIndex = page * itemsPerPage;
  const visibleJobs = duplicatedJobs.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="flex items-center gap-4 bg-[#f5cbcbd7]">
      {/* Prev button */}
      <button
        onClick={() => paginate(-1)}
        className="p-3 rounded-full bg-gray-300"
      >
        <IoIosArrowDropleft size={22}></IoIosArrowDropleft>
      </button>

      {/* Cards container */}
      <div className="overflow-hidden w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -200, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-5 grid-rows-2 gap-4 py-8"
          >
            {visibleJobs.map((job, i) => (
              <motion.div
                style={{ perspective: 1000 }} // 3D perspective
      whileHover={{ y: 2 }} // move forward along z-axis
      transition={{ type: "spring", stiffness: 300 }}
                key={i}
                className=" rounded-lg p-4 border shadow-md bg-white flex flex-col items-center justify-center"
              >
                <div className="flex items-center gap-4">
                  <div>
                    <img src={job.photoUrl} alt="" />
                  </div>

                  <div>
                    <h3 className="font-bold text-black">{job.title}</h3>
                    <p className="text-gray-400">{job.jobs} Jobs Available</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Next button */}
      <button
        onClick={() => paginate(1)}
        className="p-3 rounded-full bg-gray-300"
      >
        <IoIosArrowDropright size={22}></IoIosArrowDropright>
      </button>
    </div>
  );
}
