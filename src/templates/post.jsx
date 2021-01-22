import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Layout, Container, Content } from 'layouts';
import { Header, SEO } from 'components';
import '../styles/prism';
import { backgroundColor } from '../../config/site';

const SuggestionBar = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  background: ${props => props.theme.colors.white.light};
  box-shadow: ${props => props.theme.shadow.suggestion};
`;
const PostSuggestion = styled.div`
  display: block;
  align-items: center;
  margin: 1rem 2rem 0 2rem;
`;

const Post = ({ data, pageContext }) => {
  const { next, prev } = pageContext;
  const {html, frontmatter, excerpt } = data.markdownRemark
  const {date, title, path, description} = frontmatter
  const image = frontmatter.cover.childImageSharp.fluid;

  return (
    <Layout>
      <SEO
        title={title}
        description={description || excerpt || ' '}
        banner={image}
        pathname={path}
        article
      />
      <Header title={title} date={date} cover={image} />
      <Container>
        <Content input={html} />
      </Container>
      <SuggestionBar>
        <PostSuggestion>
          {next && (
            <Link to={next.frontmatter.path} style={{ color: 'grey'}}>
              <h3>Back</h3>

            </Link>
          )}
        </PostSuggestion>
        <PostSuggestion>
          {prev && (
            <Link to={prev.frontmatter.path} style={{ color: 'grey' }}>
              <h3>Next</h3>

            </Link>
          )}
        </PostSuggestion>
      </SuggestionBar>
    </Layout>
  );
};

export default Post;

Post.propTypes = {
  pageContext: PropTypes.shape({
    prev: PropTypes.object,
    next: PropTypes.object,
  }).isRequired,
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        date
        title
        cover {
          childImageSharp {
            fluid(
              maxWidth: 1920
              quality: 90
              duotone: { highlight: "#44a68c", shadow: "#438a77", opacity: 60 }
            ) {
              ...GatsbyImageSharpFluid_withWebp
            }
            resize(width: 1200, quality: 90) {
              src
            }
          }
        }
      }
    }
  }
`;
