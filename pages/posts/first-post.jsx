import Head from "next/head";
import Link from "next/link";

import Layout from "../../components/layout";
import Stuff from "../../components/stuff";
import Alert from "../../components/alert";

const FirstPost = () => (
  <Layout>
    <Head>
      <title>First Post</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <h1>First Post</h1>
    <Link href="/">
      <a>Back to Home</a>
    </Link>

    <Stuff />
    <Alert type="error">error Alert!!</Alert>
    <Alert type="success">success Alert!!</Alert>
    <Alert>default Alert!!</Alert>

    <style jsx>{`
      .first-post {
        font-size: 30px;
        color: green;
        text-align: center;
      }
    `}</style>
  </Layout>
);

export default FirstPost;
