import React from "react"
import Header from "./header"
import Footer from "./footer"
import layoutStyles from "./layout.module.scss";

export default ({ children }) => (
  <div>
    <Header/>
    <main className={ layoutStyles.container }>
      { children }
    </main>
    <Footer/>
  </div>
)
