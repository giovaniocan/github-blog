import styled from 'styled-components'

export const SearchIssuesCotnainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-top: 4.5rem;
  gap: 0.75rem;
`

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  line-height: 160%;

  h2 {
    font-weight: bold;
    font-size: 1.125rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-span']};
  }
`

export const Formcontainer = styled.form`
  input {
    width: 100%;
    border-radius: 6px;
    border: 0;
    background: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};
    padding: 0.75rem;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`
