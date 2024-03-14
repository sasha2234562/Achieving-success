import styled from 'styled-components'
import {font} from '../common'

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    margin-left: 17%;
    margin-top: 8.28rem;
    gap: 4rem;
    @media (max-width: 700px) {
        margin-top: 4.0625rem;
        margin-left: 1rem;
        gap: 2.25rem;
    }
`
export const Title = styled.h1`
    display: flex;
    flex-wrap: wrap;
    width: 49%;
    ${font({Fmax: 65, Fmin: 25, weight: 600, lineHeight: 1.353})}
    text-align: left;
    text-transform: uppercase;
`
export const Text = styled.p`
    display: flex;
    flex-wrap: wrap;
    width: 49%;
    ${font({Fmax: 16, Fmin: 8, weight: 400, lineHeight: 1.5})};
    padding-left: 1.5rem;
    border-left: 1px solid var(--color-light-100);
    color: var(--color-dark-100);
    text-align: left;
    @media (max-width: 910px) {
        span:first-letter {
            text-transform: capitalize;
        }
    }
`
export const TextSpan = styled.span`
    @media (max-width: 910px) {
        display: none;
    }
`
export const ButtonContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 992px;
    gap: 3rem;
    @media (max-width: 1770px) {
        width: fit-content;
        flex-direction: column;
        gap: 1rem;
    }
`
export const SignUpContainer = styled.button`
    box-sizing: border-box;
    display: flex;
    gap: 2px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    min-width: 126px;
    width: fit-content;
`
export const SignUpText = styled.span`
    background: var(--color-light-100);
    padding: 1.5rem 1.75rem 1.5rem 1.5rem;
    color: var(--color-info-500);
    border: 1px solid var(--color-light-100);
    font-size: 18px;
    font-weight: 600;
    line-height: 122.8%;
    text-align: left;
    @media (max-width: 1000px) {
        font-size: 14px;
        padding: 10px 22px 11px 20px;
    }
    @media (max-width: 530px) {
        span {
            display: none;
        }
    }
`
export const SignUpPointer = styled.img`
    background: var(--color-light-100);
    display: flex;
    padding: 2.24rem 0.75rem 0.75rem 2.24rem;
    border: 1px solid var(--color-light-100);
    @media (max-width: 1000px) {
        padding: 17px 6px 6px 14px;
        width: 15px;
    }
    @media (max-width: 530px) {
        font-size: 10px;
        padding: 17px 6px 6px 14px;
    }
    @media (max-width: 320px) {
        padding: 16px 6px 6px 14px;
        width: 15px;
    }
`
export const FreeConsultationButton = styled.button`
    box-sizing: border-box;
    display: flex;
    background-color: transparent;
    border: none;
    cursor: pointer;
`
export const FreeConsultationText = styled.span`
    border: 1px solid var(--color-light-100);
    padding: 1.5rem;
    color: var(--color-light-100);
    line-height: 122.8%;
    letter-spacing: 0;
    text-align: left;
    font-size: 18px;
    font-weight: 600;
    line-height: 122.8%;

    :nth-child(2) {
        display: none;
    }

    @media (max-width: 1770px) {
        width: 100%
    }
    @media (max-width: 1000px) {
        font-size: 14px;
        padding: 10px 22px 10px 20px;
    }
    @media (max-width: 530px) {
        padding: 10px 10px;
        :first-child {
            display: none;
        }

        :nth-child(2) {
            display: block;
        }
    }
`
export const FreeConsultationPointer = styled.img`
    border: 1px solid var(--color-light-100);
    display: flex;
    padding: 2.2rem 0.75rem 0.8rem 2.24rem;
    @media (max-width: 1000px) {
        padding: 16px 6px 7px 14px;
        width: 14px;
    }
`
export const ButtonContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 7rem;
`
export const Count = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    text-align: left;
    gap: 1.75rem;
    border-left: 1px solid var(--color-light-100);
    padding-left: 1.5rem;
    @media (max-width: 1770px) {
        display: none;
    }
`
export const CountContainerAdaptive = styled.div`
    display: none;
    gap: 4.38rem;
    @media (max-width: 1770px) {
        display: flex;
        width: max-content;
        margin-top: 70px;
        margin-bottom: 3rem;
    }
`
export const CountAdaptive = styled.div`
    display: none;
    flex-direction: column;
    justify-content: left;
    text-align: left;
    gap: 1.75rem;
    border-left: 1px solid var(--color-light-100);
    padding-left: 1.5rem;
    @media (max-width: 1770px) {
        display: flex;
        gap: 0.5rem;
    }
`
export const Counter = styled.span`
    ${font({Fmax: 40, Fmin: 16, weight: 600, lineHeight: 1.413})}
    width: fit-content;
    font-family: Montserrat, sans-serif;
    text-align: left;
    text-transform: uppercase;
    display: flex;
`
export const TextCount = styled.span`
    color: var(--color-dark-100);
    ${font({Fmax: 16, Fmin: 10, lineHeight: 1.228})}
    text-transform: lowercase;
`
