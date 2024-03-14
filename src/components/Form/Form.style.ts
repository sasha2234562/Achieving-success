import { font } from '@/components/common'
import styled from 'styled-components'

interface OpenWindowStyle {
  openWindow: boolean
}

export const FormContainer = styled.div<OpenWindowStyle>`
  height: 100%;
  width: ${props => (!props.openWindow ? 0 : '100%')};
  background-color: ${props => (!props.openWindow ? 'transparent' : 'var(--color-info-700)')};
  position: absolute;
  transition: 1s;
`
export const FormContent = styled.div<OpenWindowStyle>`
  display: flex;
  padding-top: 6.625rem;
  width: 38.25rem;
  height: 100%;
  background-color: var(--color-info-900);
  z-index: 10;
  position: relative;
  left: ${props => (!props.openWindow ? '-139rem' : 0)};
  transition: 1s;
  @media (max-width: 768px) {
    width: 100%;
  }
`
export const ExitIcon = styled.img`
  position: absolute;
  top: 2.4rem;
  right: 2.5rem;
  cursor: pointer;
`
export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5.4375rem;
  width: 100%;
  padding: 0 4.6875rem 0 3.5625rem;
`
export const FormTitle = styled.h2`
  ${font({ Fmax: 50, Fmin: 20, weight: 600 })}
  line-height: 148.8%;
  text-align: left;
`
export const Input = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid var(--color-light-700);
  padding: 0 0 11px 2px;
  color: var(--color-light-700);
  font-family: Montserrat, sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 122.8%;
  text-align: left;

  &:focus,
  &:focus-visible {
    outline: none;
    border-bottom: 1px solid var(--color-light-700);
  }
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.0625rem;
`
export const Checkbox = styled.input`
  width: 1.875rem;
  height: 1.875rem;
  box-sizing: border-box;
  border: 1px solid rgb(255, 255, 255);
  position: absolute;
  z-index: -1;
  pointer-events: none;
  opacity: 0;
`
export const CheckboxLabel = styled.p`
  font-family: Montserrat, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 128.8%;
  letter-spacing: 3.5%;
  text-align: left;
`
export const CheckboxContainer = styled.div`
  display: flex;
  gap: 1.5rem;

  .container-checkbox__icon {
    width: 30px;
    height: 30px;
    box-sizing: border-box;
    border: 0.71px solid rgb(255, 255, 255);
    opacity: 0.7;

    position: relative;
    margin-right: 16px;
  }

  .container-checkbox__icon::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 36%;
    width: 18px;
    height: 18px;
    box-sizing: border-box;
    border: 0.71px solid rgb(255, 255, 255);
    opacity: 0.7;

    border-top: none;
    border-right: none;
    margin-top: -8px;
    margin-left: -7px;
    transform: rotate(-45deg) scale(0);
    transform-origin: 10% 10%;
    transition: transform 0.5s ease 0s;
  }

  .container-checkbox__input:checked ~ .container-checkbox__icon::after {
    transform: rotate(-45deg) scale(1);
  }
`
export const WrapperCheckbox = styled.label`
  margin-top: 30px;
  position: relative;
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 1.8;
  cursor: pointer;
`
export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: left;
`
export const Error = styled.p`
  position: absolute;
  color: red;
  bottom: -1.5rem;
`
export const Feedback = styled.p`
  font-size: 40px;
  font-weight: 600;
  line-height: 145%;
  text-align: center;
`
export const FormResult = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 98px;
  justify-content: center;
  margin: auto;
`
