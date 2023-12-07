'use client'
import Image from "next/image"
import DragonLogo from "../../public/news-logo.png"
import Link from "next/link"
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const Navbar = () => {
  return (
    <div className="w-full mx-auto text-center py-8 space-y-3">

    <div>
      <h1>
        The Dragon News
      </h1>
      <p className="text-xs text-gray-500">Journalism without Fear or Favour</p>
      <p className="text-xs text-gray-500"><span className="font-medium">Sunday</span>, November 27, 2023</p>
    </div>

    <div className="bg-[#151515] py-2">
        <nav className="max-w-[1200px] mx-auto flex justify-between items-center">
            <div className="logo">
            <Image 
            src={DragonLogo}
            width={80}
            height={30}
            alt="Dragon News Logo"
            />
            </div>
            <div className="menu flex gap-3 items-center text-white text-xs">
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
            <div className="social-icons text-white flex justify-center items-center gap-3">
            <FaLinkedin/>
            <FaSquareXTwitter />
            <FaFacebookSquare />
            </div>
        </nav>
    </div>
    </div>
  )
}

export default Navbar
