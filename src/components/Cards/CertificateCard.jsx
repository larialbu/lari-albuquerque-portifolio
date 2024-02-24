import React from 'react';
import styled from 'styled-components';


const Card = styled.div`
    width: 250px;
    height: 350px;
    background-color: ${({ theme }) => theme.card};
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0 0 12px 4px rgba(0,0,0,0.4);
    overflow: hidden;
    padding: 20px;
    margin: 20px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    transition: all 0.5s ease-in-out;
    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 0 50px 4px rgba(0,0,0,0.6);
        filter: brightness(1.1);
    }

`

const Image = styled.img`
    max-width: 150px;
    max-height: 150px;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 0 16px 2px rgba(0,0,0,0.3);
`

const Title = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};
    text-align: center;
`

const Button = styled.a`
    width: 100%;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    padding: 12px 16px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.primary};
    ${({ dull, theme }) => dull && `
        background-color: ${theme.bgLight};
        color: ${theme.text_secondary};
        &:hover {
            background-color: ${({ theme }) => theme.bg + 99};
        }
    `}
    cursor: pointer;
    text-decoration: none;
    transition: all 0.5s ease;
    &:hover {
        background-color: ${({ theme }) => theme.primary + 99};
    }
    @media only screen and (max-width: 600px) {
        font-size: 12px;
    }
`;

const CertificateCard = ({ certificate,setOpenModal }) => {
    return (
        <Card onClick={() => setOpenModal({state: true, certificate: certificate})}>
            <Image src={certificate.img}/>
                <Title>{certificate.title}</Title>
                <Button href={certificate.certificateUrl} target="_blank" rel="noopener noreferrer">Ver certificado</Button>
        </Card>

    )
}


export default CertificateCard;
