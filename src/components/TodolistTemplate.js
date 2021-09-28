import React from 'react';
import styled from 'styled-components';

const TodolistTemplate = ({ form, palette, children }) => {
    return (
        <Container>
            <Title>
                오늘 할 일
            </Title>

            <Section>
                { palette }
            </Section>

            <Section1>
                { form }
            </Section1>

            <Section2>
                { children }
            </Section2>

        </Container>
    );
};

const Title = styled.div`
padding: 2rem;
font-size: 2.5rem;
text-align: center;
font-weight: 100;
background: #22b8cf;;
color: white;
`;

const Container = styled.section`
background: white;
width: 512px;
box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23); /* 그림자 */ 
margin: 0 auto; /* 페이지 중앙 정렬 */
margin-top: 4rem;
`;

const Section = styled.section`
padding: 1rem;
background: #f1f3f5;
`;

const Section1 = styled.section`
padding: 1rem;
border-bottom: 1px solid #22b8cf;
`;

const Section2 = styled.section`
min-height: 5rem;
`;

export default TodolistTemplate;