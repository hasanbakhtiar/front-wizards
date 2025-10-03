import Link from "next/link";

const page = () => {
  return (
    <div className="flex justify-around ">
      <Link href="about" className="text-green-600">
        About
      </Link>
      <Link href="login" className="text-yellow-600">
        Login
      </Link>
    </div>
  );
};

export default page;
