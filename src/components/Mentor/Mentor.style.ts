import styled from 'styled-components'

export const MentorImg = styled.img`
    bottom: 0;
    height: 82%;
    position: absolute;
    right: 8.235%;
    min-width: 260px;
    @media (max-width: 1520px) {
        right: 0;
    }
    @media (max-width: 1320px) {
        right: -10rem;
        min-height: 432px;
    }
    @media (max-width: 480px) {
        right: -7.2rem;
        height: 66%;
    }
`
