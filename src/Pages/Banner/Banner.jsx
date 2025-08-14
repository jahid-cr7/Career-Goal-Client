import React from "react";
import { motion } from "motion/react";
import team1 from "../../assets/Team/Team-1.jpg";
import team2 from "../../assets/Team/Team-2.jpg";
import { FaLongArrowAltRight } from "react-icons/fa";
const Banner = () => {
  return (
    <div className="hero bg-[#748DAE] min-h-96 py-4">
      <div className="hero-content flex lg:flex-row-reverse">
        <div className="flex-1">
          <motion.img
            src={team1}
            animate={{ y: [100, 150, 100] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="max-w-[250px] rounded-tr-[50px] border-[#c29393] border-l-8 border-b-8 shadow-2xl"
          />
          <motion.img
            src={team2}
            animate={{ x: [100, 150, 100] }}
            transition={{ duration: 10, delay: 1, repeat: Infinity }}
            className="max-w-[250px] rounded-tr-[50px] border-[#c29393] border-l-8 border-b-8 shadow-2xl"
          />
        </div>

        <div className="max-w-2/3">
          <motion.h1
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-5xl font-bold"
          >
            Latest Jobs For You!!!
          </motion.h1>
          <p className="py-6 pr-20">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary flex items-center gap-3">Explore Now <FaLongArrowAltRight></FaLongArrowAltRight></button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
