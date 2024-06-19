import instagram from "../assets/icons/instagram.png";
import github from "../assets/icons/github.png";
import linkedin from "../assets/icons/linked.png";
import CV from "../assets/icons/user-profile.png";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center flex flex-row justify-between py-28">
      <div className="mt-4 ml-10">
        <h5 className="font-bold mb-8">Reach out to me:</h5>
        <div className="flex flex-row justify-between items-center space-x-4">
          <div className="tooltip">
            <a
              href="https://www.instagram.com/humenyuk_anastasia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="Instagram" className="w-9" />
            </a>
            <span className="tooltiptext">Instagram</span>
          </div>
          <div className="tooltip">
            <a
              href="https://github.com/humenyuk16"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="Github" className="w-9" />
            </a>
            <span className="tooltiptext">GitHub</span>
          </div>
          <div className="tooltip">
            <a
              href="https://www.linkedin.com/in/anastasiia-humenyuk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="Linkedin" className="w-9" />
            </a>
            <span className="tooltiptext">LinkedIn</span>
          </div>
          <div className="tooltip">
            <a
              href="https://docs.google.com/presentation/d/12LJsZs-MW6vDvklOQwUMPFyxVBxbmxN7nhUfPH_p7OY/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={CV} alt="CV" className="w-9" />
            </a>
            <span className="tooltiptext"> Explore CV</span>
          </div>
        </div>
      </div>
      <div></div>
      <div className="mt-4 mr-10 flex justify-center items-center flex-col">
        <p>Designed and Developed by Anastasiia Humenyuk</p>
        <p>&copy; 2024 My Portfolio. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
