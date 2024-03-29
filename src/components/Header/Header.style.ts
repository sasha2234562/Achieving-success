import styled from 'styled-components'
import {font} from "@/components/common";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-evenly;
    height: fit-content;
    max-width: 68%;
    margin: 2.6875rem auto;
    align-items: center;
    flex-wrap: wrap;

    @media screen and (max-width: 814px) {
        width: 90%;
        display: none;
    }
`
export const Links = styled.div`
    display: flex;
    gap: 1.875rem;
`
export const Link = styled.span`
    font-family: Montserrat, sans-serif;
    ${font({Fmax: 14, Fmin: 8, weight: 400, lineHeight: 1.23})}
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
    font-family: Montserrat, sans-serif;
    ${font({Fmax: 18, Fmin: 14, weight: 600, lineHeight: 1.23})}
    letter-spacing: 2px;
    height: 1.125rem;
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
    @media screen and (max-width: 814px) {
        display: flex;
    }
`
export const Menu = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    margin: 1rem;
    gap: 0.625rem;
`
export const BurgerIconContainer = styled.span`
    max-width: 2.5rem;
    border: 1px solid var(--color-light-100);
    border-radius: 50%;
    padding: 0.688rem 0.625rem 0.188rem 0.625rem;
`
