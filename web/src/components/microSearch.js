import React, { Component, useState } from 'react';
import { InstantSearch, connectAutoComplete} from 'react-instantsearch-dom';
import algoliasearch from 'algoliasearch/lite';
import styled from 'styled-components'
import Slider from "react-slick";

import "../styles/slick/slick.css"; 
import "../styles/slick/slick-theme.css";
import "../styles/microSearch/microSearch.css";

const appId = "IX6I8WO920";
const searchKey = "a48810c75be34808dd19a4afa097cc2f"
const searchClient = algoliasearch(appId, searchKey);

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
  

  export default class MicroSearch extends Component {
    constructor(props) {
      super(props);
      this.state = {
        searchActive: '' ,
       
      
      };
      this.activateSearch = this.activateSearch.bind(this);
    }
    
    activateSearch = () => {
      this.setState(prevState => ({
        searchActive: !prevState.searchActive,
      }));
    };
  
    render( ) {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6
      };

      const Autocomplete = ({ hits, currentRefinement, refine }) => (
        
        <InstantSearch
          searchClient={searchClient}
          indexName="production"
          setTitle
          currentRefinement
          >
        <ul>
            <li>
     
              <input
                type="search"
                value={currentRefinement}
        
                onChange={event => refine(event.currentTarget.value)}
              />
            </li>

            
          
           
              
               
            {currentRefinement ? <li><Dropdown><DropdownCont>
              <DropdownResults >Showing Results for: {currentRefinement}</DropdownResults >
              <Slider {...settings}>

              {hits.map(hit => (
            
              <div><img src={hit.image} alt={hit.name}/><DropdownText>{hit.name}</DropdownText></div>
            ))}</Slider></DropdownCont></Dropdown></li>
            : ''
            }

             </ul>
            
    
        
          </InstantSearch>
      
        );

        const CustomAutocomplete = connectAutoComplete(Autocomplete);
      return (
       <CustomAutocomplete />

        );

  }
}
