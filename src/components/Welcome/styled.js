import styled from 'styled-components'

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 27rem;
  gap: 5rem;
  margin: 4rem 0 8rem;
`

export const TextWrapper = styled.section`
  display: grid;
  align-content: center;
  gap: 2rem;
`

export const Lead = styled.p`
  margin: 0;
`

export const ButtonsWrapper = styled.div`
  button {
    margin-right: 2rem;

    &:last-child {
      margin: 0;
    }
  }
`