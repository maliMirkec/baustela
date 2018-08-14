import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1)

export default ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <h1 style={{ color: 'purple' }}>Categories</h1>
      { data.allFile.edges.map(( { node }, index) => (
        <div>
          <p><a href={ node.relativeDirectory.replace("pages", "") + "/" }>{ capitalizeFirstLetter(node.relativeDirectory.replace("pages/kategorije/", "")) }</a></p>
        </div>
      ) ) }
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile(filter: {
      relativeDirectory: {
        regex: "/(pages\/kategorije\/)+/g"
      }
    }) {
      edges {
        node {
          name
          birthtime
          relativePath
          prettySize
          relativeDirectory
        }
      }
    }
  }
`
