import Header from '@components/Header';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
const Example = dynamic(() => import('@components/Example'));

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next Default Project</title>
      </Head>

      <Header title="Next Default Project" page="Home" />

      <Example color="red" />
    </>
  );
};

export default Home;
