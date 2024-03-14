import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  position: relative;
  max-width: 1920px;
  overflow: hidden;
  width: 100%;
  min-height: 100vh;
  background-image: linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
    linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
    linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
    linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px);
  background-position: 17%, 37%, 61.5%, 83%;
  background-repeat: no-repeat;
  background-size: 2px 100%;
`
export const ContentWrapper = styled.div`
  width: 100%;
`
