import EducationBg from "./EducationBg";
import Projects from "./Projects";

const AboutMe = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <h2 className=" about display-5 fs-2 text-center fw-bold mb-3 text-decoration-underline ">
          MORE ABOUT ME
        </h2>
        <br />
        <div className=" col-sm-5  m-2 rounded border border-success ">
          <h1 className=" about  text-uppercase text-center display-5 fs-2 fw-bold ">
            MORE Information about me
          </h1>
          <h4 className="text-light fs-3 fw-bold  text-capitalize text-decoration-underline">
            Education Background
          </h4>
          <EducationBg />

          <div className="text-center">
            <a
              href="#"
              className=" btn btn-md-5 btn-outline-success text-center btn-lg text-uppercase p-3 text-light btn-w-60 mx-5 my-5 bi bi-download "
            >
              DOWNLOAD CV
            </a>
          </div>
        </div>
        <Projects />
      </div>
    </div>
  );
};

export default AboutMe;
