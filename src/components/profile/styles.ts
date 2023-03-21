import styled from 'styled-components'

export const ProfileContainer = styled.div`
  margin-top: 15rem;
  width: 64rem;
  height: 13.25rem;
  background: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  padding: 2rem 2.5rem;
  display: flex;
  justify-content: center;

  gap: 2rem;
  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }
`

export const ContenteProfile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h2 {
    color: ${(props) => props.theme['base-title']};
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 130%;
  }

  span {
    line-height: 160%;
  }
`
export const HeaderProfile = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme.blue};
    font-size: 0.75rem;
  }
`

export const ContactInfo = styled.div`
  display: flex;
  margin-top: 1rem;
  gap: 1.5rem;
`

export const Eachinfo = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
`
