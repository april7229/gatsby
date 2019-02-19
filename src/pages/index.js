import React from "react"
import { Link } from "gatsby"
import Menu from "../components/menu"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Welcome to my website</h1>
    <p>This is a sample site for the Gatsby.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    
    </div>
   
  </Layout>
)

export default IndexPage
