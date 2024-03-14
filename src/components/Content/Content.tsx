import { FC } from 'react'

import pointerWhite from '@/assets/images/pointer.png'
import pointer from '@/assets/images/pointerWhite.png'
import {
  ButtonContainer,
  ButtonContentWrapper,
  ContentContainer,
  Count,
  CountAdaptive,
  CountContainerAdaptive,
  Counter,
  FreeConsultationButton,
  FreeConsultationPointer,
  FreeConsultationText,
  SignUpContainer,
  SignUpPointer,
  SignUpText,
  Text,
  TextCount,
  TextSpan,
  Title,
} from '@/components/Content/Content.style'
import CurrencyConverter from '@/components/CurrencyConverter/CurrencyConverter'

interface ContentProps {
  open: () => void
}

const Content: FC<ContentProps> = ({ open }) => {
  const currentDate = new Date()
  const dateString = currentDate.toLocaleDateString('en-US', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
  const arrNumbers = dateString.split('/').join('').split('')
  const result = arrNumbers.reduce((acc, item) => {
    return acc + +item
  }, 0)

  return (
    <ContentContainer>
      <Title>Создаю условия для вашего успеха</Title>
      <Text>
        <TextSpan>
          Когда ваше время и энергия лучше сфокусированы, стремление к новым возможностям становится
          реальностью,
        </TextSpan>
        <span>ваш успех зависит от ваших действий</span>
      </Text>
      <ButtonContainer>
        <ButtonContentWrapper>
          <SignUpContainer onClick={open}>
            <SignUpText>
              Записаться
              <span> на консультацию</span>
            </SignUpText>
            <SignUpPointer alt={'pointer'} src={pointerWhite} />
          </SignUpContainer>
          <Count>
            <Counter>{result}+</Counter>
            <TextCount>
              техник для <br /> достижения целей
            </TextCount>
          </Count>
        </ButtonContentWrapper>
        <ButtonContentWrapper>
          <FreeConsultationButton onClick={open}>
            <FreeConsultationText>
              <span>Бесплатная консультация</span>
              <span>Заказать звонок</span>
            </FreeConsultationText>
            <FreeConsultationPointer alt={'pointerWhite'} src={pointer} />
          </FreeConsultationButton>
          <Count>
            <Counter>
              <CurrencyConverter />%
            </Counter>
            <TextCount>
              увеличение личной <br /> продуктивности
            </TextCount>
          </Count>
        </ButtonContentWrapper>
      </ButtonContainer>
      <CountContainerAdaptive>
        <CountAdaptive>
          <Counter>{result}+</Counter>
          <TextCount>техники</TextCount>
        </CountAdaptive>
        <CountAdaptive>
          <Counter>
            <CurrencyConverter />%
          </Counter>
          <TextCount>продуктивности</TextCount>
        </CountAdaptive>
      </CountContainerAdaptive>
    </ContentContainer>
  )
}

export default Content
