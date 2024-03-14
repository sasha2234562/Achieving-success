import logo from '@/assets/images/logo.svg'
import phone from '@/assets/images/phone.svg'
import {
  BurgerIconContainer,
  HeaderAdaptive,
  HeaderContainer,
  Line,
  Links,
  LogoContainer,
  Menu,
  Phone,
  PhoneImage,
  PhoneNumber,
} from '@/components/Header/Header.style'

import burger from '../../assets/images/burger-menu.svg'

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <LogoContainer>
          <Line />
          <img alt={'logo'} src={logo} />
          <Line />
        </LogoContainer>
        <Links>
          <span>Обо мне</span>
          <span>Наставничество</span>
          <span>Мероприятия</span>
          <span>Кейсы</span>
          <span>Отзывы</span>
          <span>Контакты</span>
        </Links>
        <Phone>
          <PhoneImage alt={'phone'} src={phone} />
          <PhoneNumber>8-345-123-34-45</PhoneNumber>
        </Phone>
      </HeaderContainer>
      <HeaderAdaptive>
        <LogoContainer>
          <Line />
          <img alt={'logo'} src={logo} />
          <Line />
        </LogoContainer>
        <Menu>
          <BurgerIconContainer>
            <img alt={'burger-menu'} src={burger} />
          </BurgerIconContainer>
          <PhoneImage alt={'phone'} src={phone} />
        </Menu>
      </HeaderAdaptive>
    </>
  )
}

export default Header
