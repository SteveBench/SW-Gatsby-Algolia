import React, { Component } from 'react';
import { InstantSearch, connectAutoComplete} from 'react-instantsearch-dom';
import algoliasearch from 'algoliasearch/lite';
import styled from 'styled-components';
import Slider from "react-slick";

import "../styles/slick/slick.css"; 
import "../styles/slick/slick-theme.css";
import "../styles/microSearch/microSearch.css";

const appId = "LRDB3IFCF0";
const searchKey = "0969668003a9459920213920ffc4b6ad"
const searchClient = algoliasearch(appId, searchKey);

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
     margin-top: 20px;
     box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`
const DropdownCont = styled.ul `
max-width 1600px; /* this is a quick fix */
margin: 0 auto; /* this is a quick fix */
padding: 20px;
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
        searchCriteria: '',
       
      
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

      const Micro = ({ hits, currentRefinement, refine }) => (
      
        <InstantSearch
        searchClient={searchClient}
        indexName="JR_PRD_variant_index_copy"
       
          >
        <ul>
            <li>
     
              <SearchBoxStyle
                type="search"
                value={currentRefinement}
                onChange={event => refine(event.currentTarget.value )}
              ></SearchBoxStyle>
            </li>

            
          
           
              
               
            {currentRefinement ? <li><Dropdown><DropdownCont>
              <DropdownResults >Showing Results for: {currentRefinement}</DropdownResults >
              <Slider {...settings}>

              {hits.map(hit => (
           
              <div><img src={hit.media.scoopImage} alt={hit.range}/><DropdownText>{hit.range}</DropdownText></div>
            ))}</Slider></DropdownCont>
            <div className="element-viewAll"><a href={"/search/?Search-term=" + currentRefinement}>View all results</a></div>
            </Dropdown></li>
            : ''
            }


              <li>
                

              </li>
             </ul>
            
    
        
          </InstantSearch>
          
      
        );

        const CustomMicro = connectAutoComplete(Micro);
      return (
       <CustomMicro  />

        );

  }
}
