import React from 'react';
import styled from 'styled-components'

const StyledHit = styled.article `
display: flex;
`



const HitList = ({ hit }) => {
    return (
      
        <article>
    <img src={hit.media.scoopImage} alt={hit.range}/>
          <small>{hit.range}</small>
       
        </article>
     
      )
};
export default HitList;