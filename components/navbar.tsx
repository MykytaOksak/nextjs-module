import phantom_logo from "../public/icons/phantom-logo.svg"
import hamb_icon from "../public/icons/hamburger-icon.svg"
import close_dropdown_icon from "../public/icons/close-dropdown-icon.svg"
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar(): JSX.Element {
    return (
        <nav id="navbar" className="backdrop-filter backdrop-blur-2xl flex flex-row 
        py-20 px-20 z-50 fixed w-full top-0 justify-between items-center">
  
          <div className="flex items-center">
            <Image className="mr-10" id="logo-Image" src={ phantom_logo } alt="phantom logo" />
            <h3 className="md:hidden font-bold">Phantom</h3>
            <p className="text-primary hidden font-medium md:block">Phantom</p>
          </div>
  
          <div id="navbar-links" className="hidden md:grid grid-flow-col auto-cols-min lg:gap-50 md:gap-30">
            <Link href="/">Overview</Link>
            <Link href="/forecast">Weather</Link>
            <Link href="/login">Login</Link>
            <span className="relative" id="help-dropdown-toggle">
              <a href="#">Help<span className="text-base">▼</span></a>
              <div id="help-dropdown-content" className="">
                <a className="font-p2-md" href="#">Support</a>
                <a className="font-p2-md" href="#">Forum</a>
                <a className="font-p2-md" href="#">FAQ</a>
              </div>
            </span>
          </div>
  
          <button className="add-wallet-btn bg-btn-primary rounded-full hidden md:block text-primary" type="button">
            <p className="text-btn font-btn text-primary text-center">Add to Chrome</p>
          </button>
  
          <button className="md:hidden" type="button" id="menu-toggle">
            <Image id="navbar-toggle-image" src={ hamb_icon } alt="hamburger" />
          </button>
  
          <div id="dropdown-menu" className="md:hidden hidden absolute p-30 w-29/30 mx-auto right-0 top-4 left-0 rounded-md bg-footer 
                focus:outline-none">
            <div className="flex flex-row justify-between items-center mb-10">
              <h3 className="font-medium">Phantom</h3>
              <button id="close-dropdown">
                <Image id="close-dropdown-icon" src={ close_dropdown_icon } alt="close dropdown icon" />
              </button>
            </div>
            <ul className="text-white text-opacity-60 text-4xl">
              <li className="mb-10"><a className="md:text-p2-md md:font-p2-md" href="#">Overview</a></li>
              <li className="mb-10"><a className="md:text-p2-md md:font-p2-md" href="#">Security</a></li>
              <li className="mb-10"><a className="md:text-p2-md md:font-p2-md" href="#">Blog</a></li>
              <li className="mb-10"><a className="md:text-p2-md md:font-p2-md" href="#">Support</a></li>
            </ul>
          </div>
        </nav>
    );
}