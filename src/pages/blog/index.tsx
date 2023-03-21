import { Profile } from '../../components/profile'
import { SearchIssues } from '../../components/searchIssues'
import { BlogContainer } from './styles'

export function Blog() {
  return (
    <BlogContainer>
      <Profile />
      <SearchIssues />
    </BlogContainer>
  )
}
