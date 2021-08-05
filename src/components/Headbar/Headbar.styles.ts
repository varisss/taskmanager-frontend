import styled from "styled-components";

export const Wrapper = styled.header`
    padding: 0 20px;
    background-color: white;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: var(--maxWidth);
    margin: 0 auto;
    padding: 14px 0px;
    
    h2 {
        margin: 0 20px;
        font-size: var(--fontBig);

        @media screen and (max-width: 768px) {
            font-size: var(--fontMed);
        }
    };
`;

export const IconStyle = styled.img`
    width: 40px;
    height: auto;

    @media screen and (max-width: 768px) {
        width: 26px;
    }
`;
