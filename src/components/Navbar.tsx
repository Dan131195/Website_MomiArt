// import { Link } from "react-router-dom";
// import logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    <nav>
      <section className="my-2 d-flex justify-content-end align-items-center">
        {/* <img src={logo} alt="MomiArt Logo" width={35} /> */}
        <ul className="m-0 p-0 d-flex align-items-center justify-content-end">
          <li>
            <a href="">OPERE</a>
          </li>
          <li className="mx-3 mx-md-5">
            <a href="">ABOUT ME</a>
          </li>
          <li>
            <a href="">CONTATTI</a>
          </li>
        </ul>
      </section>
    </nav>
    // <nav className="navbar navbar-expand-md">
    //   <div className="container-fluid">
    //     <Link className="navbar-brand" to="/">
    //       <img src={logo} alt="MomiArt Logo" width={35} />
    //     </Link>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarNav"
    //       aria-controls="navbarNav"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarNav">
    //       <ul className="navbar-nav ms-auto">
    //         <li className="nav-item">
    //           <a className="nav-link " aria-current="page" href="#">
    //             OPERE
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">
    //             ABOUT ME
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">
    //             CONTATTI
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default Navbar;
