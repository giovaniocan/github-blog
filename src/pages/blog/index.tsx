import { useContext } from 'react'
import { Profile } from '../../components/profile'
import { SearchIssues } from '../../components/searchIssues'
import { BlogContext } from '../../contexts/blogContext'
import { BlogContainer, ListofPosts } from './styles'

import { PostCard } from './PostCard'

export function Blog() {
  const { posts } = useContext(BlogContext)
  return (
    <BlogContainer>
      <Profile />
      <SearchIssues />
      <ListofPosts>
        {posts.map((post) => {
          return (
            <PostCard
              key={post.id}
              body={post.body}
              created_at={post.created_at}
              id={post.id}
              title={post.title}
            />
          )
        })}
      </ListofPosts>
    </BlogContainer>
  )
}
