import "./banner.scss";
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";

const Banner = () => {
  const contacts = [
    {
      id: 1,
      icons: <FaPhoneAlt />,
      text: (
        <a href="tel:6383680016">
          <span>+91 6383680016</span>
        </a>
      ),
    },
    {
      id: 2,
      icons: <CiMail />,
      text: (
        <a href="mailto:spbharathikannaa4501@gmail.com">
          <span>spbharathikannaa4501@gmail.com</span>
        </a>
      ),
    },
    {
      id: 3,
      icons: <IoLocationOutline />,
      text: "Chennai",
    },
    {
      id: 4,
      icons: <TbWorld />,
      text: (
        <a
          target="blank"
          href="https://spbharathikannaa-portfolio.netlify.app/"
        >
          <span>Portfolio</span>
        </a>
      ),
    },
  ];
  return (
    <>
      <div className="banner">
        {/* <div className="design"></div> */}
        <div className="contents">
          <div className="name">
            <h1>BHARATHI KANNAA S P</h1>
          </div>
          <p>React Developer</p>
        </div>
        <div className="contacts">
          {contacts.map((i) => (
            <div key={i.id} className="item">
              <span>{i.icons}</span>
              <span>{i.text}</span>
            </div>
          ))}
        </div>
        <hr />
      </div>
    </>
  );
};

export default Banner;
