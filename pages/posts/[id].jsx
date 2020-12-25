import Head from "next/head";
import { Fragment } from "react";
import Layout from "../../components/layout";

import { getAllPostIds, getPostData } from "../../lib/posts";

import utilStyles from "../../styles/utils.module.scss";

const Post = ({ postData }) => (
  <Fragment>
    <Head>
      <title>{postData.title}</title>
    </Head>
    <Layout>
      <div className={utilStyles.lightText}>
        <b>{postData.date}</b>
      </div>
      <div>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
      </div>
      <div dangerouslySetInnerHTML={{ __html: postData.content }} />
    </Layout>
  </Fragment>
);

export default Post;

// getStaticPaths needs a list of all possible paths (or can use a [id] pattern)
export const getStaticPaths = async () => {
  // Return a list of possible value for id
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  // Fetch necessary data for the blog post using params.id
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
};
