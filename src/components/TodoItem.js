import React, { Component } from 'react';
import styled from 'styled-components';

class TodoItem extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.checked !== nextProps.checked;
    }

    render() {
        const { text, checked, id, color, onToggle, onRemove } = this.props;

        return (
            <Item onClick={() => onToggle(id)}>
                <Delete onClick={(e) => {
                    e.stopPropagation(); // onToggle 실행 못하게
                    onRemove(id)
                }}>&times;
                </Delete>
                <Text style={{color}} className={`${checked && 'checkedline' }`}>
                        { text }
                </Text>
                {
                    checked && (<Checkmark>✓</Checkmark>)
                }
            </Item>
        );
    }
}

const Delete = styled.div`
margin-right: 1rem;
  color: #e64980;
  font-weight: 600;
  opacity: 0;
`;

const Item = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center; /* 세로 가운데 정렬 */
  cursor: pointer;
  transition: all 0.15s;
  user-select: none;
  border-top: 1px solid #f1f3f5;
  &:hover {
      background-color:#e3fafc;
      ${Delete} {
        opacity: 1;
      };
  }
`;



const Text = styled.div`
  flex: 1; /* 체크, 엑스를 제외한 공간 다 채우기 */
  word-break: break-all;

  &.checkedline {
    text-decoration: line-through;
    color: #adb5bd;
}
`;

const Checkmark = styled.div`
font-size: 1.5rem;
line-height: 1rem;
margin-left: 1rem;
color: #3bc9db;
font-weight: 800;
`;


export default TodoItem;