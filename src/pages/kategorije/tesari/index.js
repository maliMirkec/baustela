import React from "react"
import { graphql } from "gatsby"
import Layout from "../../../components/layout"

export default ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <h1 style={{ color: 'purple' }}>Tesari</h1>
      { data.allMarkdownRemark.edges.map(( { node }, index) => (
        <div>
          <a href={ node.fields.slug }>
            <div>{ node.frontmatter.title }</div>
            <div>{ node.frontmatter.date }</div>
          </a>
        </div>
      ) ) }
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(filter: {
      frontmatter: {
        category: {
          eq: "Tesari"
        }
      }
    }) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            date
            tags
            category
            draft
            description
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
