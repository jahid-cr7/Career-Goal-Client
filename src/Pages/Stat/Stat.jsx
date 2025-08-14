import React from "react";
import CountUp from "react-countup";

const Stat = () => {
  return (
    <div className="grid grid-cols-4 gap-4 p-10">
      <div className="  text-center p-10 space-y-3 ">
        <h1 className="text-5xl font-bold text-blue-500">
          <CountUp end={25} duration={5}>
            25
          </CountUp>{" "}
          K+
        </h1>
        <h4 className="text-2xl font-semibold">Completed Cases</h4>
        <p>
          We always provide people a complete solution upon focused of any
          business
        </p>
      </div>
      <div className="  text-center p-10 space-y-3 ">
        <h1 className="text-5xl font-bold text-blue-500">
          <CountUp end={17} duration={5}>
            17
          </CountUp>+
        </h1>
        <h4 className="text-2xl font-semibold">Our Office</h4>
        <p>
          We always provide people a complete solution upon focused of any
          business
        </p>
      </div>
      <div className="  text-center p-10 space-y-3 ">
        <h1 className="text-5xl font-bold text-blue-500">
          <CountUp end={86} duration={5}>
            86
          </CountUp>
          +
        </h1>
        <h4 className="text-2xl font-semibold">Skilled People</h4>
        <p>
          We always provide people a complete solution upon focused of any
          business
        </p>
      </div>
      <div className="  text-center p-10 space-y-3 ">
        <h1 className="text-5xl font-bold text-blue-500">
          <CountUp end={28} duration={5}>
            28
          </CountUp>
          +
        </h1>
        <h4 className="text-2xl font-semibold">Happy Clients</h4>
        <p>
          We always provide people a complete solution upon focused of any
          business
        </p>
      </div>
    </div>
  );
};

export default Stat;
