"use client";

import { GetServerSideProps, NextPage } from "next";

const ErrorPage: NextPage = () => {
  return (
    <div>
      <h1>Your operation has been executed</h1>
      <div>Go Home</div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {},
  };
};

export default ErrorPage;
