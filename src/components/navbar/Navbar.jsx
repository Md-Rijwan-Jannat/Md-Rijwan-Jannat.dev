import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FiMenu } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import { navLinksdata } from '../../constants';
import Links from '../SocialMedia/Links';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const [navbarBackground, setNavbarBackground] = useState('transparent');
  // const [fadeRight, setFadeRight] = useState(false);

  const [backgroundTransition, setBackgroundTransition] =
    useState('background 0.4s');

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setNavbarBackground('bg-bodyColor');
      setBackgroundTransition('background 0.4s');
    } else {
      setNavbarBackground('transparent');
      setBackgroundTransition('background 0.4s');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full py-2 px-3 fixed top-0 z-50 mx-auto flex justify-between items-center font-titleFont ${navbarBackground} bg-opacity-80`}
      style={{
        transition: backgroundTransition,
        backdropFilter: showMenu ? 'blur(5px)' : 'none', // Apply blur when menu is shown
      }}
    >
      <div className="flex items-center gap-">
        <h2 className="bg-designColor text-lg uppercase px-2 md:px-2 py-2 text-black font-[700]">
          {' '}
          Full-Stack
        </h2>
        <h2 className="text-lg uppercase px-2 py-3 text-designColor font-[700]">
          Developer
        </h2>
      </div>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li className="link-btn" key={_id}>
              <Link
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onSetActive={() => setActiveLink(link)}
                className={
                  activeLink === link
                    ? 'active border-t-4 border-designColor'
                    : ''
                }
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div
            data-aos="fade-right"
            data-aos-once="true"
            className="w-[80%] h-screen overflow-scroll absolute top-4 left-0 bg-bodyColor p-4 scrollbar-hide"
          >
            <div className="flex flex-col gap-8 py-2 relative">
              <div className="flex items-center gap-">
                <h2 className="bg-designColor text-lg uppercase px-2 md:px-2 py-2 md:py-3 text-black font-[700]">
                  {' '}
                  Full-Stack
                </h2>
                <h2 className="text-lg uppercase px-2 py-3 text-designColor font-[700]">
                  Developer
                </h2>
              </div>
              <ul className="flex flex-col gap-4 items-center justify-center">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="link-btn w-[90px] text-center mb-3"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      onSetActive={() => setActiveLink(item.link)}
                      className={
                        activeLink === item.link
                          ? 'active border-t-2 border-designColor'
                          : ''
                      }
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4 items-center justify-center">
                <h2 className="text-base uppercase font-titleFont mb-4">
                  Find me in
                </h2>
                <Links />
              </div>
              <span
                data-aos="fade-right"
                onClick={() => {
                  setTimeout(() => {
                    setShowMenu(false);
                  }, 300);
                }}
                className="absolute top-4 right-4 text-gray-400 hover-text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
