import mylogo from "./mylogo.png";
const Menu = () => {
  return (
    <div className="navbar">
      <div>
        <a href="app">
          <img className="logo" src={mylogo} />
        </a>
      </div>
      <nav className="menu navbar d-sm-none d-md-block">
        <div className="container-fluid">
          <a href="#" className="btn btn-outline-success  ">
            ABOUT ME
          </a>
          <a href="#" className="btn btn-outline-success ">
            MY PORTFOLIO
          </a>
          <a href="#" className="btn btn-outline-success me-2">
            CONTACT ME
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
