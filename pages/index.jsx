import Head from "next/head";
import Link from "next/link";
import { Fragment } from "react";

import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";

import utilStyles from "../styles/utils.module.scss";

export default function Home(props) {
  const { users, allPostsData } = props;

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        <h1 className="title">
          <li>
            <Link href="/posts/first-post">
              <a>First post</a>
            </Link>
          </li>
        </h1>
      </section>

      <h1>Pre-render step (fetch data)</h1>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2>Users</h2>
        <div>
          {users.map((user) => (
            <li key={user.id}>
              <Link href={`/user/${user.id}`}>
                <a>
                  {user.id}: {user.name}
                </a>
              </Link>
            </li>
          ))}
        </div>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        {allPostsData.map((p) => (
          <li key={p.id}>
            <span>{p.date}: </span>
            <Link href={`/posts/${p.id}`}>{p.title}</Link>
          </li>
        ))}
      </section>
    </Layout>
  );
}

const url = "https://jsonplaceholder.typicode.com/users";

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const res = await fetch(`${url}?limit=10`);
  const data = await res.json();

  // The value of the `props` key will be passed to the `Home` component
  return {
    props: {
      users: data,
      allPostsData: getSortedPostsData(),
    },
  };
}
