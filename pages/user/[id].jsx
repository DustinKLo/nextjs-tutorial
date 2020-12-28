import { Fragment, useState, useEffect } from "react";
import Head from "next/head";

import Layout from "../../components/layout";

const url = "https://jsonplaceholder.typicode.com/users";

const UserProfile = (props) => {
  const { id } = props;

  const [user, getUser] = useState({});
  useEffect(() => {
    fetch(`${url}/${id}`)
      .then((res) => res.json())
      .then((d) => getUser(d));
  }, []);

  return (
    <Fragment>
      <Head>
        <title>{user.name}</title>
      </Head>
      <Layout>
        {Object.keys(user).length > 0 ? (
          <Fragment>
            <h2>{user.name}</h2>
            <div>
              <ul>
                <li>
                  <b>Username:</b> {user.username}
                </li>
                <li>
                  <b>Phone:</b> {user.phone}
                </li>
                <li>
                  <b>Email:</b> {user.email}
                </li>
                <li>
                  <b>Website:</b> {user.website}
                </li>
                <li>
                  <b>Address:</b>{" "}
                  {`${user.address.street}, ${user.address.city}, ${user.address.zipcode}`}
                </li>
              </ul>
            </div>
            <div>
              {user.company ? (
                <Fragment>
                  <h4>Company: </h4>
                  <ul>
                    <li>
                      <b>Name:</b> {user.company.name}
                    </li>
                    <li>
                      <b>About:</b> {user.company.catchPhrase}
                    </li>
                  </ul>
                </Fragment>
              ) : null}
            </div>
          </Fragment>
        ) : null}
      </Layout>
    </Fragment>
  );
};

export default UserProfile;

export const getServerSideProps = async (context) => {
  const { params } = context;

  // const res = await fetch(`${url}/${params.id}`);
  // const data = await res.json();

  return {
    props: {
      id: params.id,
      // user: data,
    },
  };
};
