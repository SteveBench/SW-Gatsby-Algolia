import React from 'react';
import styled from 'styled-components'
import { connectHits } from 'react-instantsearch-dom';
import Slider from "react-slick";

import "../styles/slick/slick.css"; 
import "../styles/slick/slick-theme.css";
import "../styles/microSearch/microSearch.css";

const SearchBoxStyle = styled.input `
  color: black;
`

const Dropdown = styled.div `
     color: black;
     position: absolute;
     background-color: white;
     width: 100vw;
     left: 0;
     padding: 20px;
     margin-top: 26px;
     box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`
const DropdownCont = styled.ul `
width 1200px; /* this is a quick fix */
margin: 0 auto; /* this is a quick fix */
`

const DropdownResults = styled.h2 `
font-size: 20px;
margin-bottom:20px;
`

const DropdownText = styled.p `
font-size: 12px;
margin-top:20px;
text-align: center;
`



const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6
  };



const Hits = ({ hits }) => (
    <Slider {...settings}>

              {hits.map(hit => (
            
              <div><img src={hit.media.scoopImage} alt={hit.range}/><DropdownText>{hit.range}</DropdownText></div>
            ))}</Slider>
  );
  
  const CustomHits = connectHits(Hits);
  export default CustomHits;