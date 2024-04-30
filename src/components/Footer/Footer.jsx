import { FaFacebook, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    // style={{
    //   background:
    //     "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
    // }}

    <footer
      className="footer footer-center p-10 bg-primary text-primary-content"
      style={{
        background:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
      }}
    >
      <aside>
        <h1 className="text-7xl font-bold p-4">ArtScape</h1>
        <p className="text-2xl font-bold">
          ArtScape <br />
          Providing reliable service since 1992 <br></br>
          Your destination for painting and drawing inspiration
        </p>
        <div className="text-center text-xl p-8">
          <p>
            Contact us at{" "}
            <a href="mailto:contact@artscape.com">contact@artscape.com</a>
          </p>
          <p>Phone: +1 (123) 456-7890</p>
          <p className="mt-2">Designed and Developed by Farzana Hossain </p>
        </div>
        <p>Copyright © 2024 - All right reserved</p>
      </aside>
      <nav>
        <div>
          <ul className="flex space-x-4">
            <li>
              <a href="https://www.facebook.com/" className="hover:text-gray-400">
                <FaFacebook size={34} />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/home" className="hover:text-gray-400">
                <FaTwitterSquare size={34} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/accounts/login/" className="hover:text-gray-400">
                <FaInstagramSquare size={34} />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
