
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, Configure, Pagination, CurrentRefinements } from 'react-instantsearch-dom';
import React from 'react';
import HitList from './hits';
import CustomHits from './hitsCarousel';
import styled from 'styled-components'
import './algolia.css';






// const Styledgrid = styled.div `
//     display: flex; border:1px solid red;
// `






function searchcomponent(props) {



  const StyledHeading = styled.h1 `
  font-size: 30px;
  text-align: center;
  margin: 20px 0;
  `

  let pathname = typeof window !== "undefined" ? window.location.search : ""
  const getSearch = new URLSearchParams(pathname);
  const searchVal = getSearch.get('Search-term');


  const appId = "LRDB3IFCF0";
  const searchKey = "0969668003a9459920213920ffc4b6ad"
  const searchClient = algoliasearch(appId, searchKey);
  const facets = '[["' + props.facets + '"]]';
  const Searchmod = () => (
  <div className="component-searchArea">
  {props.title ?
    <StyledHeading>{props.title}</StyledHeading>
  :
  ''
}



            

    <InstantSearch
      searchClient={searchClient}
      indexName="JR_PRD_variant_index_copy"

    >

    <Configure
            hitsPerPage={props.numberOfProducts}          
            
            
            facetFilters={facets}
            //filters={props.facets}
    />
    {props.showSearch ?
      <SearchBox  defaultRefinement={searchVal}/>
      :
      ''
  }
    

      {props.carousel ?
       <CustomHits />
        : 
      <Hits hitComponent={HitList} />
      }

      {props.showPagination ?
      <Pagination />
      :
      ''
      }

    </InstantSearch>
    </div>
  );
  return (
      <Searchmod />
  );
}


export default searchcomponent;

