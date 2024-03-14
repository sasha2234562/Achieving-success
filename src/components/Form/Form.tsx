import { FC, useState } from 'react'

import exitIcon from '@/assets/images/exit.svg'
import pointer from '@/assets/images/pointerWhite.png'
import { useFormik } from 'formik'

import {
  FreeConsultationButton,
  FreeConsultationPointer,
  FreeConsultationText,
} from '../Content/Content.style'
import {
  Checkbox,
  CheckboxContainer,
  CheckboxLabel,
  Error,
  ExitIcon,
  Feedback,
  FormContainer,
  FormContent,
  FormResult,
  FormStyle,
  FormTitle,
  Input,
  InputContainer,
  InputWrapper,
  WrapperCheckbox,
} from './Form.style'

interface FormProps {
  exit: () => void
  openWindow: boolean
}

interface FormikErrorType {
  name?: string
  phone?: string
}

const Form: FC<FormProps> = ({ exit, openWindow }) => {
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
    <FormContainer openWindow={openWindow}>
      <FormContent openWindow={openWindow}>
        <ExitIcon alt={'exit'} onClick={close} src={exitIcon} />
        {!formResult ? (
          <FormStyle onSubmit={formik.handleSubmit}>
            <FormTitle>
              Закажите <br /> обратный звонок
            </FormTitle>
            <InputContainer>
              <InputWrapper>
                <Input placeholder={'ИМЯ'} type={'text'} {...formik.getFieldProps('name')} />
                {formik.touched.name && formik.errors.name && <Error>{formik.errors.name}</Error>}
              </InputWrapper>
              <InputWrapper>
                <Input placeholder={'ТЕЛЕФОН'} type={'text'} {...formik.getFieldProps('phone')} />
                {formik.touched.phone && formik.errors.phone && (
                  <Error>{formik.errors.phone}</Error>
                )}
              </InputWrapper>
            </InputContainer>
            <CheckboxContainer>
              <WrapperCheckbox className={'container-checkbox'}>
                <Checkbox
                  className={'container-checkbox__input'}
                  type={'checkbox'}
                  {...formik.getFieldProps('chacked')}
                />
                <span className={'container-checkbox__icon'}></span>
                <CheckboxLabel>
                  Согласен на сохранение и обработку персональных данных
                </CheckboxLabel>
              </WrapperCheckbox>
            </CheckboxContainer>
            <FreeConsultationButton type={'submit'}>
              <FreeConsultationText>Заказать обратный звонок</FreeConsultationText>
              <FreeConsultationPointer alt={'pointerWhite'} src={pointer} />
            </FreeConsultationButton>
          </FormStyle>
        ) : (
          <FormResult>
            <FormTitle>
              Спасибо <br />
              за заявку
            </FormTitle>
            <Feedback>
              Я обязательно <br /> свяжусь с вами <br /> в ближайшее время.
            </Feedback>
          </FormResult>
        )}
      </FormContent>
    </FormContainer>
  )
}

export default Form
