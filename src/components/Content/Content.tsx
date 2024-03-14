import {FC} from 'react'
import pointerWhite from '@/assets/images/pointer.png'
import pointer from '@/assets/images/pointerWhite.png'
import * as SC from './Content.style'
import CurrencyConverter from '@/components/CurrencyConverter/CurrencyConverter'
import {ContentProps} from "@/components/Content/Content.type";

const Content: FC<ContentProps> = ({open}) => {
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
        <SC.ContentContainer>
            <SC.Title>Создаю условия для вашего успеха</SC.Title>
            <SC.Text>
                <SC.TextSpan>
                    Когда ваше время и энергия лучше сфокусированы, стремление к новым возможностям становится
                    реальностью,
                </SC.TextSpan>
                <span>ваш успех зависит от ваших действий</span>
            </SC.Text>
            <SC.ButtonContainer>
                <SC.ButtonContentWrapper>
                    <SC.SignUpContainer onClick={open}>
                        <SC.SignUpText>
                            Записаться
                            <span> на консультацию</span>
                        </SC.SignUpText>
                        <SC.SignUpPointer alt={'pointer'} src={pointerWhite}/>
                    </SC.SignUpContainer>
                    <SC.Count>
                        <SC.Counter>{result}+</SC.Counter>
                        <SC.TextCount>
                            техник для <br/> достижения целей
                        </SC.TextCount>
                    </SC.Count>
                </SC.ButtonContentWrapper>
                <SC.ButtonContentWrapper>
                    <SC.FreeConsultationButton onClick={open}>
                        <SC.FreeConsultationText>
                            <span>Бесплатная консультация</span>
                            <span>Заказать звонок</span>
                        </SC.FreeConsultationText>
                        <SC.FreeConsultationPointer alt={'pointerWhite'} src={pointer}/>
                    </SC.FreeConsultationButton>
                    <SC.Count>
                        <SC.Counter>
                            <CurrencyConverter/>%
                        </SC.Counter>
                        <SC.TextCount>
                            увеличение личной <br/> продуктивности
                        </SC.TextCount>
                    </SC.Count>
                </SC.ButtonContentWrapper>
            </SC.ButtonContainer>
            <SC.CountContainerAdaptive>
                <SC.CountAdaptive>
                    <SC.Counter>{result}+</SC.Counter>
                    <SC.TextCount>техники</SC.TextCount>
                </SC.CountAdaptive>
                <SC.CountAdaptive>
                    <SC.Counter>
                        <CurrencyConverter/>%
                    </SC.Counter>
                    <SC.TextCount>продуктивности</SC.TextCount>
                </SC.CountAdaptive>
            </SC.CountContainerAdaptive>
        </SC.ContentContainer>
    )
}

export default Content
