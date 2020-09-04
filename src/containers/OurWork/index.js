import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

import { Container } from '../../components/Container'
import { H2 } from '../../components/Typography'
import { translate } from '../../i18n/translate'

const OurWork = ({ t }) => {
  const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
  `

  const Div = styled(Img)`
    border-radius: var(--borderRadius);
    max-height: 300px;

    :nth-child(1),
    :nth-child(4) {
      grid-column: span 2;
    }
  `

  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          sort: { fields: frontmatter___date, order: DESC }
          limit: 4
          filter: { frontmatter: { key: { eq: "portfolio" } } }
        ) {
          edges {
            node {
              frontmatter {
                role
                key
                thumb {
                  childImageSharp {
                    fluid(maxWidth: 900, quality: 90) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  )

  const items = allMarkdownRemark.edges

  return (
    <Container>
      <H2>{t('ourWork.title')}</H2>
      <Wrapper>
        {items.map(({ node }, i) => (
          <Div fluid={node.frontmatter.thumb.childImageSharp.fluid} key={i} />
        ))}
      </Wrapper>
    </Container>
  )
}

export default translate(OurWork)
