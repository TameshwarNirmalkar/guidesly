import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";

const NotFoundPage: NextPage = () => {
  return (
    <div className="">
      <div>
        <h3>Page Not Found!</h3>
        <Link href="/">Go Home</Link>
        </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {},
  };
};

export default NotFoundPage;
