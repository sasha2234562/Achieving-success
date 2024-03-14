import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-evenly;
  height: fit-content;
  max-width: 68%;
  margin: 2.6875rem auto;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
  @media screen and (max-width: 700px) {
    width: 90%;
    display: none;
  }
`
export const Links = styled.div`
  display: flex;
  gap: 1.875rem;
`
export const Phone = styled.div`
  display: flex;
  gap: 0.9rem;
  align-items: center;
`
export const PhoneImage = styled.img`
  width: 1.2rem;
  height: 1.2rem;
  border: 1px solid #ffffff;
  border-radius: 50%;
  padding: 0.625rem;
`
export const PhoneNumber = styled.span`
  color: rgb(255, 255, 255);
  font-family: Montserrat, sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 122.8%;
  letter-spacing: 2%;
  text-align: left;
  height: 18px;
`
export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`

export const Line = styled.hr`
  width: 100%;
  height: 1px;
  background-color: #fff;
`
export const HeaderAdaptive = styled.div`
  display: none;
  margin: 1rem;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 700px) {
    display: flex;
  }
`
export const Menu = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: 1rem;
  gap: 10px;
`
export const BurgerIconContainer = styled.span`
  max-width: 40px;
  border: 1px solid var(--color-light-100);
  border-radius: 50%;
  padding: 11px 10px 3px 10px;
`
