import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import {
  ContactInfo,
  Eachinfo,
  HeaderOptions,
  PostInfoContainer,
} from './styles'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface PostInfoProps {
  htmlUrl: string
  title: string
  createdAt: Date
  comments: number
}

export function PostInfo({
  htmlUrl,
  title,
  createdAt,
  comments,
}: PostInfoProps) {
  const date = formatDistanceToNow(new Date(createdAt), {
    locale: ptBR,
    addSuffix: true,
  })
  return (
    <div>
      <PostInfoContainer>
        <HeaderOptions>
          <NavLink to={'/'} style={{ textDecoration: 'none' }}>
            <FontAwesomeIcon icon={faChevronLeft} />
            <h3>VOLTAR</h3>
          </NavLink>
          <a href={htmlUrl}>
            <h3>VER NO GITHUB</h3>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </HeaderOptions>
        <h1>{title}</h1>
        <ContactInfo>
          <Eachinfo>
            <FontAwesomeIcon icon={faGithub} />
            <span>giovaniocan</span>
          </Eachinfo>
          <Eachinfo>
            <FontAwesomeIcon icon={faCalendarDay} />
            <span>{date}</span>
          </Eachinfo>
          <Eachinfo>
            <FontAwesomeIcon icon={faComment} />
            <span>{comments} comentarios</span>
          </Eachinfo>
        </ContactInfo>
      </PostInfoContainer>
    </div>
  )
}
