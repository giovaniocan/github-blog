import styled from 'styled-components'

export const PostContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 14rem 18rem 0 18rem;

  width: 64rem;
`

export const PostContent = styled.div`
  padding: 2.5rem 2rem;
  text-align: justify;
  color: ${(props) => props.theme['base-text']};
  line-height: 160%;
  font-size: 1rem;
`
