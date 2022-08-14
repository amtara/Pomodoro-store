import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 text-gray-400 md:order-2">
            <Link to="/Faq">Termes et conditions</Link>
          </div>
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            Pomodoro © . Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
