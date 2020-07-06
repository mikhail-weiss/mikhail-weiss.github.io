import { FluidObject } from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';

type ImagesMap = { [key: string]: FluidObject };
export const getImages = (page: string): ImagesMap => {
  const allImagesQuery = graphql`
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
    `;

  const { allFile }: { allFile: { edges: any[] } } = useStaticQuery(allImagesQuery);
  return allFile.edges
    .filter(edge => edge.node.relativeDirectory === page)
    .reduce((acc, edge) => {
      acc[edge.node.base.split('.')[0]] = edge.node.childImageSharp.fluid;
      return acc;
    }, {});
};
