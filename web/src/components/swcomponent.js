
          import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, Pagination } from 'react-instantsearch-dom';
import React from 'react';
import HitList from './hits';



const appId = "1CL1G2ARPW";
const searchKey = "ae8f036daa5fee12150f23c86673fbb4"
const searchClient = algoliasearch(appId, searchKey);
const Swcomponent = () => (
  <InstantSearch
    searchClient={searchClient}
    indexName="production"

  >
    <SearchBox />
    <Hits hitComponent={HitList} />
  </InstantSearch>
);
export default Swcomponent;

