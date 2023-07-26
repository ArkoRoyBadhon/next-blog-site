import RootLayout from "@/components/layouts/RootLayout";
import { signIn } from "next-auth/react";
import React from "react";

const LoginPage = () => {
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <h1>LoginPage</h1>

      <div
        className=""
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: 'center'
        }}
      >
        <div
          className=""
          style={{
            background: "skyblue",
            padding: "5px 10px",
            cursor: "pointer",
            marginBottom: "10px"
          }}
          onClick={() => signIn("github",{
            callbackUrl: "http://localhost:3000"
          })}
        >
          Login with Github
        </div>
        <div
          className=""
          style={{
            background: "skyblue",
            padding: "5px 10px",
            cursor: "pointer",
          }}
          onClick={() => signIn("google",{
            callbackUrl: "http://localhost:3000"
          })}
        >
          Login with Google
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

LoginPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
