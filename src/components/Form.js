import React from 'react';
import styled from 'styled-components';

const Form = ({ value, onChange, onCreate, onKeyPress, color }) => {
    return (
        <Container>
            <Input value={value} onChange={onChange} onKeyPress={onKeyPress} style={{color}} />
            <Add onClick={onCreate}>
                추가
            </Add>
        </Container>
    );
};

const Container = styled.div`
display: flex;
`;

const Input = styled.input.attrs({
    required: true
  })`
flex: 1; /* 버튼을 뺀 빈 공간을 모두 채워줍니다 */
font-size: 1.25rem;
outline: none;
border: none;
border-bottom: 1px solid #c5f6fa;
`;

const Add = styled.div`
padding-top: 0.5rem;
padding-bottom: 0.5rem;
padding-left: 1rem;
padding-right: 1rem;
margin-left: 1rem;
background: #22b8cf;
border-radius: 3px;
color: white;
font-weight: 600;
cursor: pointer;
&:hover {
    background-color: #3bc9db;
}
`;

export default Form;