import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Images from "../examples/images"

const blog = () => {
  return (
    <Layout>
      hello from blog page<Link to="/">Home</Link>
      <Images />
    </Layout>
  )
}

export default blog
