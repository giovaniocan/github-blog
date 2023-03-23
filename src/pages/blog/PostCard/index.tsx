import { ContentPost, HeaderPost, PostsContainer } from './styles'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import ReactMarkdown from 'react-markdown'
import { NavLink } from 'react-router-dom'
interface PostCardProps {
  number: number
  id: number
  title: string
  created_at: Date
  body: string
}
export function PostCard({
  id,
  title,
  // eslint-disable-next-line camelcase
  created_at,
  body,
  number,
}: PostCardProps) {
  const date = formatDistanceToNow(new Date(created_at), {
    locale: ptBR,
    addSuffix: true,
  })
  return (
    <PostsContainer>
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
