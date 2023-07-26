import RootLayout from "@/components/layouts/RootLayout";
import { useRouter } from "next/router";
import React from "react";

const ErrorPage = () => {
  const router = useRouter();

  setTimeout(() => {
    router.push("/");
  }, 3000);
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2 className="">404 Not Found</h2>
    </div>
  );
};

export default ErrorPage;

// ErrorPage.getLayout = function getLayout(page) {
//     return <MyAPP>{page}</MyAPP>
//   }
