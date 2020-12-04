import React from 'react';
import styled from 'styled-components'

const StyledHit = styled.article `
display: flex;
`



const HitList = ({ hit }) => {
    return (
      
        <article>
    <img src={hit.image} alt={hit.name}/>
          <small>{hit.name}</small>
       
        </article>
     
      )
};
export default HitList;