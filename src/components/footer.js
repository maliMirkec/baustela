import React from "react"
import { StaticQuery, graphql } from "gatsby"

export default ({ data }) => (
  <StaticQuery
    query = { graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  }
    render = { (data) => (
      <p>{ data.site.siteMetadata.title }</p>
    )}
  />
)
