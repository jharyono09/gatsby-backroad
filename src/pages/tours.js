import React, { Component } from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"

export default class tours extends Component {
  render() {
    return (
      <Layout>
        <StyledHero
          img={this.props.data.toursBcg.childImageSharp.fluid}
        ></StyledHero>
      </Layout>
    )
  }
}

export const query = graphql`
  {
    toursBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          src
        }
      }
    }
  }
`
