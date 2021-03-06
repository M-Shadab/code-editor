import styled from "styled-components"

export const Nav = styled.nav`
  padding: 0.8rem 2rem 0.8rem 2rem;
  display: flex;
  justify-content: space-between;
  border-bottom: solid 2px rgba(255, 255, 255, 0.09);
`

export const LinkWrapper = styled.div`
  > a {
    vertical-align: -webkit-baseline-middle;
    :not(:last-child) {
      margin-right: 3rem;
      @media (max-width: 767.98px) {
        margin-right: 1.6rem;
      }
    }
  }
`
