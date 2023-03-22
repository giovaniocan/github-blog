import { Profile } from '../../components/profile'
import { SearchIssues } from '../../components/searchIssues'
import {
  BlogContainer,
  PostsContainer,
  HeaderPost,
  ContentPost,
  ListofPosts,
} from './styles'

export function Blog() {
  return (
    <BlogContainer>
      <Profile />
      <SearchIssues />
      <ListofPosts>
        <PostsContainer>
          <HeaderPost>
            <h1>JavaScript data types and data structures</h1>
            <span>há 1 dia</span>
          </HeaderPost>
          <ContentPost>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in JavaScript and what
            properties they have. These can be used to build other data
            structures. Wherever possible, comparisons with other languages are
            drawn. Dynamic typing JavaScript is a loosely typed and dynamic
            language. Variables in JavaScript are not directly associated with
            any particular value type, and any variable can be assigned (and
            re-assigned) values of all types:
          </ContentPost>
        </PostsContainer>
        <PostsContainer>
          <HeaderPost>
            <h1>JavaScript data types and data structures</h1>
            <span>há 1 dia</span>
          </HeaderPost>
          <ContentPost>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in JavaScript and what
            properties they have. These can be used to build other data
            structures. Wherever possible, comparisons with other languages are
            drawn. Dynamic typing JavaScript is a loosely typed and dynamic
            language. Variables in JavaScript are not directly associated with
            any particular value type, and any variable can be assigned (and
            re-assigned) values of all types:
          </ContentPost>
        </PostsContainer>
      </ListofPosts>
    </BlogContainer>
  )
}
