import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-around">
      <Link href="/about" className="text-orange-600">
        About
      </Link>
      <Link href="/product" className="text-blue-700">
        Product
      </Link>
    </div>
  );
};

export default Header;
