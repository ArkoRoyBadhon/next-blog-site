import RootLayout from '@/components/layouts/RootLayout';
import React from 'react';
import { useSession, signOut } from "next-auth/react";


const HomePage = () => {
  const { data: session } = useSession();

  return (
    <div style={{
      height: "100vh"
    }}>
      <h2>Home page</h2>
      {session?.user?.email}
    </div>
  );
};

export default HomePage;


HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>
}