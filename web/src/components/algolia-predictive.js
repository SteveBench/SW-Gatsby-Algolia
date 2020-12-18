import React, { Component, useState } from 'react';
import { InstantSearch, connectAutoComplete} from 'react-instantsearch-dom';
import algoliasearch from 'algoliasearch/lite';
import styled from 'styled-components'

const appId = "IX6I8WO920";
const searchKey = "a48810c75be34808dd19a4afa097cc2f"
const searchClient = algoliasearch(appId, searchKey);

const Dropdown = styled.div `
     color: black;
     position: absolute;
     background-color: white;
     border: 1px solid black;
     width: 100vw;
     left: 0;
`
const DropdownCont = styled.ul `
    display: flex;
`
  

  export default class AlgoliaMicroSearch extends Component {
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
  // test = event => refine(event.currentTarget.value);
  
    render( ) {
      

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

            
          
           
              
               
            {currentRefinement ? <li><Dropdown><DropdownCont>{hits.map(hit => (
              <li key={hit.objectID}><div><img src={hit.image} alt={hit.name}/>{hit.name}</div></li>
            ))}</DropdownCont></Dropdown></li>
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
