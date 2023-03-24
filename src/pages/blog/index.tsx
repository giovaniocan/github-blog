import { Profile } from '../../components/profile'
import { SearchIssues } from '../../components/searchIssues'
import { BlogContext } from '../../contexts/blogContext'
import { BlogContainer, ListofPosts } from './styles'
import { useContextSelector } from 'use-context-selector'
import { PostCard } from './PostCard'

export function Blog() {
  /* const posts = useContextSelector(BlogContext, (context) => {
    return context.filteredListPosts
  }) */
  const posts = useContextSelector(BlogContext, (context) => {
    return context.posts
  })

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
              createdat={post.created_at}
              id={post.id}
              title={post.title}
              number={post.number}
            />
          )
        })}
      </ListofPosts>
    </BlogContainer>
  )
}
