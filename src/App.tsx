import {useState} from 'react'
import * as SC from '@/App.style'
import Content from '@/components/Content/Content'
import Form from '@/components/Form/Form'
import Header from '@/components/Header/Header.'
import Mentor from '@/components/Mentor/Mentor'
import './App.css'

function App() {
    const [openWindow, setOpenWindow] = useState(false)
    const exit = () => setOpenWindow(false)
    const open = () => {
        setOpenWindow(true)
    }

    return (
        <SC.Container>
            <SC.ContentWrapper>
                <Header/>
                <Content open={open}/>
            </SC.ContentWrapper>
            <Mentor/>
            <Form exit={exit} openWindow={openWindow}/>
        </SC.Container>
    )
}

export default App
