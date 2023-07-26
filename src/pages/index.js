import RootLayout from "@/components/layouts/RootLayout";
import React from "react";
import { useSession, signOut } from "next-auth/react";
import Head from "next/head";
import Banner from "@/components/UI/Banner";
import { Card } from "antd";
import Image from "next/image";
const { Meta } = Card;

const HomePage = ({ allBlogs }) => {
  const { data: session } = useSession();

  console.log(allBlogs);

  return (
    <div
      style={{
        minHeight: "100vh",
      }}
    >
      <Head>
        <title>Blog Site</title>
      </Head>
      <Banner />
      <h4 className="" style={{textAlign: "center", fontSize: 32}}>All Blogs</h4>

      <div
        className=""
        style={{
          margin: "0 100px",
        }}
      >
        {allBlogs?.data.map((blog) => {
          return (
            <Card
              key={blog?._id}
              hoverable
              style={{
                marginBottom: "40px",
              }}
              cover={
                <Image
                  src={blog?.image}
                  height={500}
                  width={500}
                  alt="blog img"
                />
              }
            >
              <h5 style={{fontSize: 18, margin: "0px"}}>{blog?.title}</h5>
              <div style={{paddingTop: 0}}>
                <small><strong>Author: </strong> {blog?.author}</small>
                <br />
                <small><strong>Publish Date: </strong> {blog?.publicationDate}</small>
              </div>
              <p className="">{blog?.description}</p>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/api/v1/blog/getallblogs");
  const data = await res.json();
  // console.log("Data", data);

  return {
    props: {
      allBlogs: data,
    },
    revalidate: 10,
  };
};
