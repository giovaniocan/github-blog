import styled from 'styled-components'

export const BlogContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 24rem 18rem 0 18rem;
`
export const ListofPosts = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 3rem;
  gap: 2rem;
`

export const PostsContainer = styled.button`
  border: 0;
  width: 100%;
  height: 16.25rem;
  background: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 1.25rem;
  cursor: pointer;

  &:hover {
    border: 1px solid ${(props) => props.theme['base-label']};
  }
`

export const HeaderPost = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6rem;

  h1 {
    font-size: 1.25rem;
    line-height: 160%;
    font-weight: bold;
    color: ${(props) => props.theme['base-title']};
  }

  span {
    font-size: 0.875rem;
    line-height: 160%;
    color: ${(props) => props.theme['base-span']};
  }
`

export const ContentPost = styled.div`
  color: ${(props) => props.theme['base-text']};
  text-align: justify;
  line-height: 160%;
  overflow: hidden; // Removendo barra de rolagem
  text-overflow: ellipsis; // Adicionando "..." ao final
  display: -webkit-box;
  -webkit-line-clamp: 5; // Quantidade de linhas
  -webkit-box-orient: vertical;
`
