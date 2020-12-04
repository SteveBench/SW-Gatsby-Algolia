
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, Pagination } from 'react-instantsearch-dom';
import React from 'react';
import HitList from './hits';
import styled from 'styled-components'
import './algolia.css';
import CustomAutocomplete from './algolia-predictive'




// const Styledgrid = styled.div `
//     display: flex; border:1px solid red;
// `


const appId = "1CL1G2ARPW";
const searchKey = "ae8f036daa5fee12150f23c86673fbb4"
const searchClient = algoliasearch(appId, searchKey);
const Swcomponent = () => (
<>
   
  <InstantSearch
    searchClient={searchClient}
    indexName="production"

  >
       <CustomAutocomplete />

    <SearchBox />

    <Hits hitComponent={HitList} />

  </InstantSearch>
  </>
);
export default Swcomponent;

