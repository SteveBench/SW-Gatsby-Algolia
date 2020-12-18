
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


const appId = "IX6I8WO920";
const searchKey = "a48810c75be34808dd19a4afa097cc2f"
const searchClient = algoliasearch(appId, searchKey);
const Swcomponent = () => (
<>
   
  <InstantSearch
    searchClient={searchClient}
    indexName="production"

  >

    <SearchBox />

    <Hits hitComponent={HitList} />

  </InstantSearch>
  </>
);
export default Swcomponent;

