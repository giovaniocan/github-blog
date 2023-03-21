import {
  ProfileContainer,
  ContenteProfile,
  ContactInfo,
  Eachinfo,
  HeaderProfile,
} from './styles'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
export function Profile() {
  return (
    <ProfileContainer>
      <img src="https://github.com/giovaniocan.png" alt="" />
      <ContenteProfile>
        <HeaderProfile>
          <h2>Giovani Apolinario </h2>
          <a href="https://github.com/giovaniocan">
            <h3>GITHUB</h3>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </HeaderProfile>

        <span>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </span>
        <ContactInfo>
          <Eachinfo>
            <FontAwesomeIcon icon={faGithub} />
            <span>giovaniocan</span>
          </Eachinfo>
          <Eachinfo>
            <FontAwesomeIcon icon={faBuilding} />
            <span>rocketseat</span>
          </Eachinfo>
          <Eachinfo>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>0 seguidores</span>
          </Eachinfo>
        </ContactInfo>
      </ContenteProfile>
    </ProfileContainer>
  )
}
