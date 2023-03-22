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
import { useContext } from 'react'
import { BlogContext } from '../../contexts/blogContext'
export function Profile() {
  const { userData } = useContext(BlogContext)

  return (
    <ProfileContainer>
      <img src={userData.avatar_url} alt="" />
      <ContenteProfile>
        <HeaderProfile>
          <h2>{userData.name} </h2>
          <a href={userData.html_url}>
            <h3>GITHUB</h3>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </HeaderProfile>

        <span>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass. {/* ver o css sobre a bio */}
        </span>
        <ContactInfo>
          <Eachinfo>
            <FontAwesomeIcon icon={faGithub} />
            <span>{userData.name}</span>
          </Eachinfo>
          <Eachinfo>
            <FontAwesomeIcon icon={faBuilding} />
            <span>rocketseat</span>
          </Eachinfo>
          <Eachinfo>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>{userData.followers} seguidores</span>
          </Eachinfo>
        </ContactInfo>
      </ContenteProfile>
    </ProfileContainer>
  )
}
