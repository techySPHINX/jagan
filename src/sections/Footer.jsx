import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>

        <div className="socials flex gap-4 items-center">
          {socialImgs.map((socialImg, index) => (
            <a
              key={index}
              href={socialImg.link}
              target="_blank"
              rel="noopener noreferrer"
              className="icon text-xl hover:text-blue-500 transition"
              aria-label={socialImg.name}
            >
              <socialImg.icon />
            </a>
          ))}
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Jagan Kumar Hotta. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
