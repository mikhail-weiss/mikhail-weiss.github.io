import React, { useEffect } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '@components/layout';
import SEO from '@components/seo';
import Prism from 'prismjs';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { getImages } from '@components/images';

const SecondPage = (): JSX.Element => {
  const images = getImages('pages/page2');

  return (
    <Layout>
      <SEO title="Gatsby Images Trick" />

      <h1>Gatsby Images Trick</h1>

      <p>During writing of previous post I found default gatsby images deeply inconvenient to say the least.
        I understand the reason and that it's miles ahead of editing images in Photoshop, but still adding huge graphql queries into each file just feels wrong.</p>

      <h3>What am I even talking about</h3>
      <p>gatsby-image is a React component that optimizes image loading for your site. Without it we'd need to create multiple different resolutions for the same file
        to load in different devices. Gatsby takes care of that. How? Just load an image through graphql query</p>

      <SyntaxHighlighter language="typescript" style={okaidia}>
        {`
export const query = graphql\`
  query {
    file(relativePath: { eq: "blog/avatars/kyle-mathews.jpeg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
        `}
      </SyntaxHighlighter>

      <p>load the query using  </p>
      <SyntaxHighlighter language="tsx" style={okaidia}>{`
const { data } = useStaticQuery(query)

      `}</SyntaxHighlighter>

      <p>and use result in Img tag </p>
      <SyntaxHighlighter language="tsx" style={okaidia}>{`
<Img
  fixed={data.file.childImageSharp.fixed}
  objectFit="cover"
  objectPosition="50% 50%"
  alt=""
/>             
      `}</SyntaxHighlighter>


      <p>Unfortunately it means a separate query for every image. Even with graphql fragments and multi queries it's cumbersome.</p>
      <p>The first instinct would be to just parameterize the graphql query and supply it with the image path or better list of images.
        Unfortunately it's impossible for reasons explained in <a href="https://github.com/gatsbyjs/gatsby/issues/10482">this discussion</a></p>
      <p>And honestly even with parameters <code>data.file.childImageSharp.fixed</code> doesn't really scream clean to me.</p>
      <h3>The Alternative</h3>
      <p>My solution is brute, but I'm pretty happy with it.</p>
      <SyntaxHighlighter language="typescript" style={okaidia} showLineNumbers>{`\
import { FluidObject } from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';

type ImagesMap = { [key: string]: FluidObject };
export const useImages = (page: string): ImagesMap => {
  const allImagesQuery = graphql\`
      query MyQuery {
        allFile(filter: {
          relativeDirectory: {glob: "pages/*"}, 
          extension: {in: ["png", "jpg"]}}) {
          edges {
            node {
              base
              relativeDirectory
              childImageSharp {
                fluid(quality: 100, maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }          
            }
          }
        }
      }
    \`;

  const { allFile }: { allFile: { edges: any[] } } = useStaticQuery(allImagesQuery);
  return allFile.edges
    .filter(edge => edge.node.relativeDirectory === page)
    .reduce((acc, edge) => {
      acc[edge.node.base.split('.')[0]] = edge.node.childImageSharp.fluid;
      return acc;
    }, {});
};
      `}
      </SyntaxHighlighter>
      <p>I define <code>useImages</code> react hook. It queries all images, selects only images in the specific folder and
        puts them into the map using the filename as a key.</p>

      <p>To use it simply:</p>

      <SyntaxHighlighter language="tsx" style={okaidia}>{`
const MyPage = (): JSX.Element => {
  const images = getImages('pages/page1');
  return (
    <Layout>
      <Img fluid={images?.backtest3} alt="Backtest3" />
      ...
      `}</SyntaxHighlighter>
      <p>Just one line!</p>
      <p>For reference my folder looks like
        <Img fluid={images.folder} alt="folder" style={{ width: '10rem' }} />
      </p>


    </Layout >
  );
};

export default SecondPage;
