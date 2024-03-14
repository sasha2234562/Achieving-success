import {FC, useState} from 'react'
import exitIcon from '@/assets/images/exit.svg'
import pointer from '@/assets/images/pointerWhite.png'
import {useFormik} from 'formik'
import {FreeConsultationButton, FreeConsultationPointer, FreeConsultationText,} from '../Content/Content.style'
import * as SC from './Form.style'
import {FormikErrorType, FormProps} from "@/components/Form/Form.type";

const Form: FC<FormProps> = ({exit, openWindow}) => {
    const [formResult, setFormResult] = useState(false)
    const formik = useFormik({
        initialValues: {
            chacked: false,
            name: '',
            phone: '',
        },
        onSubmit: value => {
            localStorage.setItem('name', value.name)
            localStorage.setItem('phone', value.phone)
            localStorage.setItem('chacked', `${value.chacked}`)
            setFormResult(true)
        },
        validate: value => {
            const errors: FormikErrorType = {}

            if (!value.name) {
                errors.name = 'Поле не должно быть пустым'
            }
            if (value.phone.length === 0) {
                errors.phone = 'Поле не должно быть пустым'
            }

            return errors
        },
    })
    const close = () => {
        setFormResult(false)
        exit()
    }

    return (
        <SC.FormContainer openWindow={openWindow}>
            <SC.FormContent openWindow={openWindow}>
                <SC.ExitIcon alt={'exit'} onClick={close} src={exitIcon}/>
                {!formResult ? (
                    <SC.FormStyle onSubmit={formik.handleSubmit}>
                        <SC.FormTitle>
                            Закажите <br/> обратный звонок
                        </SC.FormTitle>
                        <SC.InputContainer>
                            <SC.InputWrapper>
                                <SC.Input placeholder={'ИМЯ'} type={'text'} {...formik.getFieldProps('name')} />
                                {formik.touched.name && formik.errors.name && <SC.Error>{formik.errors.name}</SC.Error>}
                            </SC.InputWrapper>
                            <SC.InputWrapper>
                                <SC.Input placeholder={'ТЕЛЕФОН'} type={'text'} {...formik.getFieldProps('phone')} />
                                {formik.touched.phone && formik.errors.phone && (
                                    <SC.Error>{formik.errors.phone}</SC.Error>
                                )}
                            </SC.InputWrapper>
                        </SC.InputContainer>
                        <SC.CheckboxContainer>
                            <SC.WrapperCheckbox className={'container-checkbox'}>
                                <SC.Checkbox
                                    className={'container-checkbox__input'}
                                    type={'checkbox'}
                                    {...formik.getFieldProps('chacked')}
                                />
                                <span className={'container-checkbox__icon'}></span>
                                <SC.CheckboxLabel>
                                    Согласен на сохранение и обработку персональных данных
                                </SC.CheckboxLabel>
                            </SC.WrapperCheckbox>
                        </SC.CheckboxContainer>
                        <FreeConsultationButton type={'submit'}>
                            <FreeConsultationText>Заказать обратный звонок</FreeConsultationText>
                            <FreeConsultationPointer alt={'pointerWhite'} src={pointer}/>
                        </FreeConsultationButton>
                    </SC.FormStyle>
                ) : (
                    <SC.FormResult>
                        <SC.FormTitle>
                            Спасибо <br/>
                            за заявку
                        </SC.FormTitle>
                        <SC.Feedback>
                            Я обязательно <br/> свяжусь с вами <br/> в ближайшее время.
                        </SC.Feedback>
                    </SC.FormResult>
                )}
            </SC.FormContent>
        </SC.FormContainer>
    )
}

export default Form
