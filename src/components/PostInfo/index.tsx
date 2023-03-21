import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  ContactInfo,
  Eachinfo,
  HeaderOptions,
  PostInfoContainer,
} from './styles'

export function PostInfo() {
  return (
    <div>
      <PostInfoContainer>
        <HeaderOptions>
          <a>
            <FontAwesomeIcon icon={faChevronLeft} />
            <h3>VOLTAR</h3>
          </a>
          <a href="https://github.com/giovaniocan">
            <h3>VER NO GITHUB</h3>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </HeaderOptions>
        <h1>JavaScript data types and data structures</h1>
        <ContactInfo>
          <Eachinfo>
            <FontAwesomeIcon icon={faGithub} />
            <span>giovaniocan</span>
          </Eachinfo>
          <Eachinfo>
            <FontAwesomeIcon icon={faCalendarDay} />
            <span>há 1 dia</span>
          </Eachinfo>
          <Eachinfo>
            <FontAwesomeIcon icon={faComment} />
            <span>0 comentarios</span>
          </Eachinfo>
        </ContactInfo>
      </PostInfoContainer>
    </div>
  )
}
