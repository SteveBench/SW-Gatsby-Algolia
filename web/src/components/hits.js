import React from 'react';

const HitList = ({ hit }) => {
    return (
        <article>
    <img src={hit.image} alt={hit.name}/>
          <small>{hit.name}</small>
       
        </article>
      )
};
export default HitList;