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
import { BlogContext } from '../../contexts/blogContext'
import { useContextSelector } from 'use-context-selector'
export function Profile() {
  const userData = useContextSelector(BlogContext, (context) => {
    return context.userData
  })

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

        <span>{userData.bio}</span>
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
