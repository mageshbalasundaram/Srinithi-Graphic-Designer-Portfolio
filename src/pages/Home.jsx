import React, { Suspense } from "react";

const Allothers = React.lazy(() => import('../components/Allothers'));
const Work = React.lazy(() => import('../components/Work'));
const Calender = React.lazy(() => import('../components/Calender'));
const Brand = React.lazy(() => import('../components/Brand'));
const Service = React.lazy(() => import('../components/Service'));





const Home = () => {
  return (
      <Suspense fallback={<div className="text-white text-center mt-20 h-screen">Loading content...</div>}>
        <Allothers />
        <Service />
        
        <Work />
        <Brand />
        <Calender />
      </Suspense>

    
  );
};

export default Home;
