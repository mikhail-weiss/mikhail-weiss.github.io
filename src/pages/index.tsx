import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = (): JSX.Element => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/page1/">Python, Quantopian and This Blog</Link> <br />
    <Link to="/page2/">Gatsby Images Trick</Link> <br />

    <Link to="/using-typescript/">Go to &quot;Using TypeScript&quot;</Link>
  </Layout>
);

export default IndexPage;
