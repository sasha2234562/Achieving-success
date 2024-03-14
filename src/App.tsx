import { useState } from 'react'

import { Container, ContentWrapper } from '@/App.style'
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
    <Container>
      <ContentWrapper>
        <Header />
        <Content open={open} />
      </ContentWrapper>
      <Mentor />
      <Form exit={exit} openWindow={openWindow} />
    </Container>
  )
}

export default App
