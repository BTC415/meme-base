import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link href="#home">
          <Image src="/logo-avatar.gif" alt="Logo" width="36" height="36" unoptimized/>
        </Link>
        <span className="font-semibold text-xl tracking-tight">Meme</span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link href="#home" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4">
            Home
          </Link>
          <Link href="#about" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4">
            About Us
          </Link>
          <Link href="#tokenomics" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4">
            Tokenomics
          </Link>
          <Link href="#buy" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400">
            Buy Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;