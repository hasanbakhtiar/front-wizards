import Link from "next/link";
const Login = () => {
  return (
    <div className="flex justify-evenly">
      <Link href="register">Register</Link>
      <Link href="about">About</Link>
    </div>
  );
};

export default Login;
