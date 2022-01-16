import Header from '@components/Header';
import { T } from '@components/T';
import { Description } from '@styles/pages/about';
import { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next Default Project</title>
      </Head>

      <Header title="Welcome to Next Default Project" page="About" />

      <Description>
        <div>
          <T type="body">
            This is a standard project developed by Adstrito for the quick start
            of project development
          </T>
          <T type="body">Technologies used:</T>
          <div>
            <T type="body">
              - React
              <br />
              - Typescript
              <br />- Next js
            </T>
            <T type="body">
              - Styled Components
              <br />
              - Jest js
              <br />- Cypress
            </T>
            <T type="body">
              - EsLint
              <br />
              - Prettier
              <br />- Framer Motion
            </T>
          </div>
        </div>
      </Description>
    </>
  );
};

export default Home;
