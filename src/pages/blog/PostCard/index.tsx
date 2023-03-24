import { ContentPost, HeaderPost, PostsContainer } from './styles'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import ReactMarkdown from 'react-markdown'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { BlogContext } from '../../../contexts/blogContext'
interface PostCardProps {
  number: number
  id: number
  title: string
  createdat: Date
  body: string
}
export function PostCard({
  id,
  title,
  // eslint-disable-next-line camelcase
  createdat,
  body,
  number,
}: PostCardProps) {
  const { selectCompletePost } = useContext(BlogContext)
  const date = formatDistanceToNow(new Date(createdat), {
    locale: ptBR,
    addSuffix: true,
  })
  function handleSelectedPost() {
    selectCompletePost(number)
  }
  return (
    <PostsContainer onClick={handleSelectedPost}>
      <NavLink to={`/post/${number}`} style={{ textDecoration: 'none' }}>
        <HeaderPost>
          <h1>{title}</h1>
          <span>{date}</span>
        </HeaderPost>
        <ContentPost>
          <ReactMarkdown className="markdown-paragraph">{body}</ReactMarkdown>
        </ContentPost>
      </NavLink>
    </PostsContainer>
  )
}
