import { ContentPost, HeaderPost, PostsContainer } from './styles'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import ReactMarkdown from 'react-markdown'
import { NavLink } from 'react-router-dom'

import { BlogContext } from '../../../contexts/blogContext'
import { useContextSelector } from 'use-context-selector'
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
  const selectCompletePost = useContextSelector(BlogContext, (context) => {
    return context.selectCompletePost
  })
  const date = formatDistanceToNow(new Date(createdat), {
    locale: ptBR,
    addSuffix: true,
  })

  function teste() {
    selectCompletePost(number)
  }

  return (
    <PostsContainer onClick={teste}>
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
