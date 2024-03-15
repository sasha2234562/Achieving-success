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
                    <SC.Link>Обо мне</SC.Link>
                    <SC.Link>Наставничество</SC.Link>
                    <SC.Link>Мероприятия</SC.Link>
                    <SC.Link>Кейсы</SC.Link>
                    <SC.Link>Отзывы</SC.Link>
                    <SC.Link>Контакты</SC.Link>
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
