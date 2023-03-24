import styled from 'styled-components'

export const PostContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 3rem 18rem 0 18rem;

  width: 64rem;
`

export const PostContent = styled.div`
  max-width: 100%;
  padding: 2.5rem 2rem;
  text-align: justify;
  color: ${(props) => props.theme['base-text']};
  line-height: 160%;
  word-wrap: break-word;
  font-size: 1rem;
  overflow-x: hidden; // Impede a barra de rolagem horizontal

  .markdown-paragraph {
    color: ${(props) => props.theme['base-text']};
    text-align: justify;
    line-height: 160%;
    overflow: hidden; // Removendo barra de rolagem
    text-overflow: ellipsis; // Adicionando "..." ao final
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
`
