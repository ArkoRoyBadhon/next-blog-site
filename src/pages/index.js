import RootLayout from '@/components/layouts/RootLayout';
import React from 'react';

const HomePage = () => {
  return (
    <div style={{
      height: "100vh"
    }}>
      <h2>Home page</h2>
    </div>
  );
};

export default HomePage;


HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>
}