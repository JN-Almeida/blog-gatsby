import React from 'react'
import {Link} from 'gatsby'

import Layout from "../components/Layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello Word</h1>
    <ul>
      <li>
        <a  href="/about">About (link normal)</a>
      </li>
      <li>
        <Link to="/about">About (link gatsby)</Link>
      </li>
    </ul>

  </Layout>
)

export default IndexPage
