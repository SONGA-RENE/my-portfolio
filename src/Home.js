import { useState } from "react";
import songa from "./songa.jpg";

const [rene, renee] = [
  {
    name: "I'm Rene SONGA",
    description: "UI/UX Designer And Front-end Developer",
    welcome:
      "Welcome to my frontend developer portfolio! I am a skilled and passionate frontend developer with expertise in building immersive and user-friendly web experiences.  Through my projects, I strive to combine creativity, functionality, and the latest technologies to deliver outstanding results. ",
    thanks:
      "Thank you for visiting my frontend developer portfolio, and I look forward to the opportunity to work together and create exceptional digital experiences.",
    id: 1,
  },
];

const Home = () => {
  return (
    <section className="home container-fluid">
      <div className="homepage container m-2">
        {/* {rene.map((songa) => {
          <div key={songa.id}>
            <h1>{songa.name}</h1>
            <h1>{songa.description}</h1>
            <p>{songa.welcome}</p>
            <p>{songa.thanks}</p>
          </div>;
        })} */}
        <div className="row">
          <div className="col">
            <h1 className=" fw-bold display-4 text-center text-uppercase fs-1">
              I am SONGA Rene
            </h1>
            <h2 className="fw-bold text-center fs-2  display-6">
              UI/UX designer and Front-End Developer
            </h2>
            <p className="text-center fs-4 display-6 p-2 fst-italic border-start border-success border-3 ">
              Welcome to my portfolio!
              <br /> I am a skilled and passionate frontend developer with
              expertise in building immersive and user-friendly web experiences.
              Through my projects, I strive to combine creativity,
              functionality, and the latest technologies to deliver outstanding
              results.
            </p>
            <p className="text-center fs-4 display-6 p-2 fst-italic border-start border-success border-3">
              Thank you for visiting my frontend developer portfolio, and I look
              forward to the opportunity to work together and create exceptional
              digital experiences.
            </p>
            <div className="container ">
              <div className="col-md-12 text-center">
                <a
                  href="#"
                  className=" buto btn-lg btn btn-light btn-block text-uppercase"
                >
                  More About me
                </a>
                <a
                  href="#"
                  className=" butto btn btn-lg text-light btn-light btn-block text-uppercase mx-3"
                >
                  Hire me
                </a>
              </div>
            </div>
          </div>
          <div className="col mb-3">
            <img
              className="img-fluid rounded-circle mx-5 "
              src={songa}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
