import Link from "next/link";
import React from "react";

const AuthLayout = ({children}) => {
  return (
    <div>
      <div
        className="max-w-7xl mx-auto p-6"
      >
        <Link href={"/auth"}>Sign up</Link>
        <Link href={"/auth/sign-in"}>Sign in</Link>
        <Link href={"/auth/login"}>Login</Link>
      </div>
      {children}
    </div>
  );
};

export default AuthLayout;
