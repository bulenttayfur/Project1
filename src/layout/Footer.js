import facebook from "../photos/facebook.png";
import linkedin from "../photos/linkedin.png";
import instagram from "../photos/instagram.png";

const Footer = () => {
  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center my-5 rounded px-3 py-4" style={{backgroundColor:"#E1E8F8"}}>
          {/* #E1E8F8 */}
          <div>
            <p className="nav-link active text-secondary m-0">
              Copyright © 2020 Travelo. All rights reserved
            </p>
          </div>
          <div>
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <a
                  className="nav-link active text-secondary"
                  aria-current="page"
                  href="#"
                >
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
          <div className="d-flex">
            <a className="nav-link text-secondary px-2" href="#">
              <img className="rounded-circle" src={facebook} alt="facebook" />
            </a>
            <a className="nav-link text-secondary px-2" href="#">
              <img className="rounded-circle" src={linkedin} alt="linkedin" />
            </a>
            <a className="nav-link text-secondary px-2" href="#">
              <img className="rounded-circle" src={instagram} alt="instagram" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
