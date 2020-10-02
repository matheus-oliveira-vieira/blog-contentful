import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

const posts_query = graphql`
query {
  posts: allContentfulPost(filter: {visible: {eq: true}}){
    edges {
      node {
        title
        slug
        content {
          internal {
            content
            type
          }
        }
      }
    }
  }
}
`

const Index = () => {
  const data = useStaticQuery(posts_query)
  return (
    <div>

      <h1>Contentful Blog</h1>
      {data.posts.edges.map(post => {
        return (
          <h2>
            <Link to={post.node.slug}>{post.node.title}</Link>
          </h2>
        )
      })}
    </div>
  )
}

export default Index