import SocialMedia from "./SocialMedia";
const Projects = () => {
  return (
    <div className="col-sm-12 col-lg-6 text-center m-2 rounded border border-success">
      <div className="row my-5">
        <div className=" yel col-sm-3 col-md-4  col-lg-5 ms-3   rounded">
          <p className="fs-3 display-5 fw-bold text-start text-light">10+</p>
          <h6 className="text-light display-4 fw-bold fst-italic fs-3">
            ---Projects completed
          </h6>
        </div>
        <div className=" col-sm-3 col-md-4 col-lg-5 bg-success ms-5  rounded">
          <p className="fs-3 display-5 fw-bold text-start text-light">3+</p>
          <h6 className="text-light display-4 fw-bold fst-italic fs-3">
            ---Years of Experience
          </h6>
        </div>
      </div>
      <div className="row my-2">
        <div className="col-sm-3 col-md-4  col-lg-5 bg-success ms-3  rounded">
          <p className="fs-3 display-5 fw-bold text-start text-light">50+</p>
          <h6 className="text-light display-4 fw-bold fst-italic fs-3">
            ---Happy clients
          </h6>
        </div>
        <div className=" yel col-sm-3 col-md-4  col-lg-5  ms-5 rounded">
          <p className="fs-3 display-5 fw-bold text-start text-light">20+</p>
          <h6 className="text-light display-4 fw-bold fst-italic fs-3">
            ---Customer reviews
          </h6>
        </div>
        {/* <SocialMedia /> */}
      </div>
    </div>
  );
};

export default Projects;
