import React from 'react';
import styled from 'styled-components';

import './Palette.css';

const Color = ({ color, active, onClick }) => {
    return (
        <ColorIcon className={`color ${active && 'active'}`} style={{ background: color}} onClick={onClick}>
        
        </ColorIcon>
      )
};
  
const Palette = ({colors, selected, onSelect}) => {
    const colorList = colors.map(
        (color) => (<Color color={color} active={selected===color} onClick={() => onSelect(color)} key={color}/>)
      );
      return (
        <PaletteSection className="palette">
          {colorList}
        </PaletteSection>
      );
};
  
const PaletteSection = styled.div`
display: flex;
justify-content: center;
`;

const ColorIcon = styled.div`
width: 2rem;
height: 2rem;
opacity: 0.5;
transition: all 0.2s;
cursor: pointer;
&:hover {
    opacity: 0.75;
}
&.active {
    opacity: 1;
`

export default Palette;