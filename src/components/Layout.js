import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "./Layout.css"

const Layout = ({ children }) => {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  )
}

export default Layout
