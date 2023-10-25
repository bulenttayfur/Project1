import logo from "../photos/logo.png"

const Header = () => {
  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between py-3">
          <div>
          <ul className="nav justify-content-center">
              <li className="nav-item d-flex">
                <img className="m-0" src={logo} alt="logo" height="35px" />
                <a className="nav-link active text-primary" aria-current="page" href="#">
                Travelo
                </a>
              </li>
          </ul>
          </div>
          <div>
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <a className="nav-link active text-secondary" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-secondary" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-secondary" href="#">
                  Places
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-secondary" href="#">
                  Careers
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-secondary" href="#">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <button className="btn btn-primary rounded-pill" type="submit" style={{backgroundColor:"#4468E2"}}>
              Connect
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
