import styled from 'styled-components'

export const PostInfoContainer = styled.div`
  width: 64rem;
  height: 13.25rem;
  background: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  padding: 2rem 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const HeaderOptions = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    text-decoration: none;
    display: flex;
    gap: 0.5rem;
    color: ${(props) => props.theme.blue};
    font-size: 0.75rem;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
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
