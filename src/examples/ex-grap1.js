import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getSiteData = graphql`
  query MyQuery {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`
const Header = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(getSiteData)
  return (
    <div>
      <h4>title:{siteMetadata.title}</h4>
      <h4>author:{siteMetadata.author}</h4>
    </div>
  )
}

export default Header
