import React from "react"
import Layout from "../components/Layout"
import styles from "../css/error.module.css"
import Banner from "../components/Banner"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export default function error() {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title="Ooppss it's a dead end">
          <AniLink fade to="/" className="btn-white">
            back to home
          </AniLink>
        </Banner>
      </header>
      Ooppsss dead end
    </Layout>
  )
}
