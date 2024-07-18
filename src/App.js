 import React from "react";
import Testimonials from "./components/Testimonials";
import reviews from "./data";
const App = () => {
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200 " >
      <div className="text-center ">
        <hi className="text-4xl font-bold" > Our Testimonials</hi>
        <div className="bg-violet-400 w-1/5 mx-auto h-[4px] mt-1 " ></div>
       
          <Testimonials reviews={reviews}></Testimonials>
       
      </div>
    </div>
  );
};

export default App;
