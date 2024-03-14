import logo from '@/assets/images/logo.svg'
import phone from '@/assets/images/phone.svg'
import * as SC from '@/components/Header/Header.style'
import burger from '../../assets/images/burger-menu.svg'

const Header = () => {
    return (
        <>
            <SC.HeaderContainer>
                <SC.LogoContainer>
                    <SC.Line/>
                    <img alt={'logo'} src={logo}/>
                    <SC.Line/>
                </SC.LogoContainer>
                <SC.Links>
                    <span>Обо мне</span>
                    <span>Наставничество</span>
                    <span>Мероприятия</span>
                    <span>Кейсы</span>
                    <span>Отзывы</span>
                    <span>Контакты</span>
                </SC.Links>
                <SC.Phone>
                    <SC.PhoneImage alt={'phone'} src={phone}/>
                    <SC.PhoneNumber>8-345-123-34-45</SC.PhoneNumber>
                </SC.Phone>
            </SC.HeaderContainer>
            <SC.HeaderAdaptive>
                <SC.LogoContainer>
                    <SC.Line/>
                    <img alt={'logo'} src={logo}/>
                    <SC.Line/>
                </SC.LogoContainer>
                <SC.Menu>
                    <SC.BurgerIconContainer>
                        <img alt={'burger-menu'} src={burger}/>
                    </SC.BurgerIconContainer>
                    <SC.PhoneImage alt={'phone'} src={phone}/>
                </SC.Menu>
            </SC.HeaderAdaptive>
        </>
    )
}

export default Header
