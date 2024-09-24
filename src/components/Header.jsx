import { Button } from "./UI/button";
import React from "react";


const Navbar = () => {
  return (
    <div className="w-3/5 mx-auto" >
      <nav className="flex justify-between items-center p-6"> {/* Use justify-between to space out the items */}
        {/* Left side: name */}
        <div className="text-2xl font-bold">
          &lt;kaneki/&gt;
        </div>

        {/* Right side: navigation buttons */}
        <div className="flex space-x-6">
          <Button variant="link" href="#about">About</Button>
          <Button variant="link" href="#project">Project</Button>
          <Button variant="link" href="#skills">Skills</Button>
          <Button variant="link" href="#certification">Certification</Button>
          <Button variant="link" href="#contact">Contact</Button>
        </div>
      </nav>
      <section id="about" className=" mx-auto justify-end p-6 ">
            <h2 className="text-2xl font-bold text-blue-600">About Me</h2>
            <p >Your content goes here. This is a brief introduction about yourself.</p>
        </section>

    </div>
  );
};

export default Navbar;
