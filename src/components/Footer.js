import Image from "next/image";
import Link from "next/link";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full bg-[#011321] py-10 mt-10">
      <footer className="max-w-[1200px] mx-auto space-y-5">
        <ul className="flex justify-center items-center py-3 gap-3 text-2xl text-white"> 
          <li>
            <FaLinkedin />
          </li>
          <li>
            <FaSquareXTwitter />
          </li>
          <li>
            <FaFacebookSquare />
          </li>
        </ul>
      <nav >
           
            <div className="menu flex gap-3 items-center justify-center text-white text-base">
            <Link href="/">
            Home
            </Link>
            <Link href="/pages">
            Pages
            </Link>
            <Link href="/category">
            Category
            </Link>
            <Link href="/news">
            News
            </Link>
            <Link href="/post">
            Post
            </Link>
            <Link href="/contact">
            Contact
            </Link>
            </div>
           
        </nav>
        <p className=" text-center text-gray-400 text-sm">copyright @dragon news all right reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;
