import React, {useState} from "react";
import './nav.css';
import logo from '../../ressources/logo.svg';

function Nav(props) {
    const [isActive, setActive] = useState(true);
    const toggleClass = () => {
        setActive(!isActive);
    }
    return (
        <nav
            className="sticky mt-0 p-2 top-0 left-0 w-full navbar z-50 bg-black bg-opacity-5 font-semibold text-xs backdrop-blur text-white">
            <div className="container inline items-center justify-center">
                <div className="float-left h-1">
                    <a href="#">
                        <img src={logo} alt=""
                             className="w-auto h-7 m-2"/>
                    </a>
                </div>
                <ul id="desktopNav" className="hidden md:flex justify-around items-center h-full">
                    <li>
                        <a href="#"
                           className="h-auto w-auto transition duration-200 ease-in-out hover:text-gray-700">
                            First page
                        </a>
                    </li>
                    <li>
                        <a href="#"
                           className="h-auto w-auto transition duration-200 ease-in-out hover:text-gray-700">
                            Second page
                        </a>
                    </li>
                    <li>
                        <a href="#"
                           className="h-auto w-auto transition duration-200 ease-in-out hover:text-gray-700">
                            Third page
                        </a>
                    </li>
                    <li>
                        <a href="#"
                           className="h-auto w-auto transition duration-200 ease-in-out hover:text-gray-700">
                            Fourth page
                        </a>
                    </li>
                </ul>
                <div>
                    <button id="menuIcon" onClick={() => {
                        toggleClass();
                    }}
                            className={isActive ? 'focus:outline-none block md:hidden h-10 w-10 transition duration-200 ease-in-out hover:text-gray-700 absolute right-0 top-0 m-2 z-50'
                                : 'focus:outline-none block md:hidden h-10 w-10 transition duration-200 ease-in-out hover:text-gray-700 absolute right-0 top-0 m-2 z-50 menuActive menuActiveCross'}>
                        <svg className={isActive ? "menuIcon menuIconRotate block fill-current stroke-current text-white"
                            : "menuIcon menuIconRotate block fill-current stroke-current text-white active"
                        }
                             viewBox="0 0 100 100"
                             width="40">
                            <path
                                className="line top"
                                d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"/>
                            <path
                                className="line middle"
                                d="m 30,50 h 40"/>
                            <path
                                className="line bottom"
                                d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"/>
                        </svg>
                    </button>
                </div>
                <ul id="mobileNav"
                    className={isActive ? "hidden absolute top-0 left-0 h-screen w-full bg-gray-900 flex-col justify-around items-center h-full"
                    :"hidden absolute top-0 left-0 h-screen w-full bg-gray-900 flex-col justify-around items-center h-full activeFlex"
                    }>
                    <li>
                        <a href="#"
                           className="h-auto w-auto transition duration-200 ease-in-out hover:text-gray-700">
                            First section
                        </a>
                    </li>
                    <li>
                        <a href="#"
                           className="h-auto w-auto transition duration-200 ease-in-out hover:text-gray-700">
                            Second section
                        </a>
                    </li>
                    <li>
                        <a href="#"
                           className="h-auto w-auto transition duration-200 ease-in-out hover:text-gray-700">
                            Third section
                        </a>
                    </li>
                    <li>
                        <a href="#"
                           className="h-auto w-auto transition duration-200 ease-in-out hover:text-gray-700">
                            Fourth section
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
