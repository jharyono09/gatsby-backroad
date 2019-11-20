import React from "react"
import Layout from "../components/Layout"
import Header from "../examples/ex-grap1"
import RegularHeader from "../examples/ex-grap2"

export const contact = () => {
  return (
    <Layout>
      hello from contact page
      <Header />
      <h1>another header</h1>
      <RegularHeader />
    </Layout>
  )
}

export default contact
