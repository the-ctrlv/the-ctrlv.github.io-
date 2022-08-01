import styled from 'styled-components/macro';

import owl from '../../assets/images/owl.svg';

export const StyledNotification = styled.div`
    position: relative;
    padding: 4vw 0;
    h2   {
        font-size: 48px;
        line-height: 56px;
        @media (max-width: 1200px) { 
            font-size: 32px;
            line-height: 39px;
        }
    }
    h3 {
       margin-top: 32px;
       &.minimized {
        font-weight: 500;
        font-size: 20px;
        line-height: 28px;
        color: var(--text-purple);
       }
    }
    a {
        margin-top: 32px;
        background: #00B493;
        color: #fff;
        width: 100%;
        padding: 15px;
    }
    >div {
        z-index: 1;
        &.transformed {
            transform: translateY(-115%);
            h2 {
                max-width: 85%;
            }
        }
         &::before {
            content: '';
            position: absolute;
            top: -4vw;
            z-index: -1;
            left: -8vw;
            width: calc(100% + 16vw);
            height: calc(100% + 8vw);
            background-color: #E6FBF7;
            border-radius: 24px;
        }
        &::after {
            content: '';
            position: absolute;
            bottom: -60px;
            right: -140px;
            width: 160px;
            height: 160px;
            background: url(${owl}) center center/cover no-repeat;
            transform: translateY(55%);
        }
    }
`