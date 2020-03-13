import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"

const IndexPage = () => {

  const { allMarkdownRemark } = useStaticQuery(graphql`
    query PostList {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              Background
              category
              date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
              title
              description
            }
            fields {
              slug
            }
            timeToRead
          }
        }
      }
    }
  
  `)

  const postList = allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Home" />
      {postList.map(({
        node: {
          frontmatter: { background, category, date, title, description },
          timetoRead,
          fields: { slug }
        }
      }) => (

          <PostItem
            slug= {slug}
            background = {background}
            category= {category}
            date= {date}
            timeToRead= {timetoRead}
            title= {title}
            description= {description}
          />
        ))}

    </Layout>
  )
}

export default IndexPage
