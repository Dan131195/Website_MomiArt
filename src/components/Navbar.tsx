import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <section className="my-3 w-100 ">
        <ul className="m-0 p-0 d-flex align-items-center justify-content-between justify-content-md-evenly">
          <li className="">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Opere">Opere</Link>
          </li>

          <li>
            <Link to="/Contatti">Contatti</Link>
          </li>
        </ul>
      </section>
    </nav>
  );
};

export default Navbar;
