
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, Configure, Pagination } from 'react-instantsearch-dom';
import React from 'react';
import HitList from './hits';
import styled from 'styled-components'
import './algolia.css';
import CustomAutocomplete from './microSearch'




// const Styledgrid = styled.div `
//     display: flex; border:1px solid red;
// `






function Swcomponent(props) {
  const appId = "CIBIQR9HO1";
  const searchKey = "57c22ea832a7582222414dd12456ceac"
  const searchClient = algoliasearch(appId, searchKey);
  const facets = '[["' + props.facets + '"]]';
  const Searchmod = () => (
  <>
    
    <InstantSearch
      searchClient={searchClient}
      indexName="production"

    >

    <Configure
            hitsPerPage={props.numberOfProducts}          
            facetFilters={facets}
            //filters={props.facets}
    />

      <SearchBox />

      <Hits hitComponent={HitList} />

    </InstantSearch>
    </>
  );
  return (
      <Searchmod />
  );
}


export default Swcomponent;

