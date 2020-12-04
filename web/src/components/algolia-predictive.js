import React from 'react';
import { InstantSearch, connectAutoComplete} from 'react-instantsearch-dom';
import algoliasearch from 'algoliasearch/lite';

const appId = "1CL1G2ARPW";
const searchKey = "ae8f036daa5fee12150f23c86673fbb4"
const searchClient = algoliasearch(appId, searchKey);

const Autocomplete = ({ hits, currentRefinement, refine }) => (
  <InstantSearch
    searchClient={searchClient}
    indexName="production"
    >
  <ul>
      <li>
        <input
          type="search"
          value={currentRefinement}
          onChange={event => refine(event.currentTarget.value)}
        />
      </li>
      {hits.map(hit => (
        <li key={hit.objectID}>{hit.name}</li>
      ))}
    </ul>
    </InstantSearch>

  );
  const CustomAutocomplete = connectAutoComplete(Autocomplete);

  
  
  export default CustomAutocomplete;