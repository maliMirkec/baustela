import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Link from "gatsby-link"
import hdrrStyles from "./header.module.scss"

const ListLink = props => (
  <li>
    <Link to={ props.to }>{ props.children }</Link>
  </li>
)

export default (data, props) => (
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
      <header className={ hdrrStyles.hdr12 }>
        <h1>Test: { data.site.siteMetadata.title }</h1>
        <nav>
          <ul>
            <ListLink to="/">Početna</ListLink>
            <ListLink to="/kategorije/">Kategorije</ListLink>
            <ListLink to="/o-nama/">O nama</ListLink>
          </ul>
        </nav>
      </header>
    )}
  />
)
