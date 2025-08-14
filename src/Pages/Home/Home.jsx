import React from 'react';
import Banner from "../Banner/Banner";
import JobCard from "../JobAvility/JobCard";
import Stat from "../Stat/Stat";
import JobOffer from "../JobCard/JobOffer";

const Home = () => {
  // const jobPromise = fetch("http://localhost:3000/job").then((res) =>
  //   res.json()
  // );
  return (
    <div className=" ">
      <Banner />
      <Stat />
      <JobCard />
      <JobOffer />
    </div>
  );
};

export default Home;