
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, Configure, Pagination } from 'react-instantsearch-dom';
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



  const appId = "CIBIQR9HO1";
  const searchKey = "57c22ea832a7582222414dd12456ceac"
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
      indexName="production"

    >

    <Configure
            hitsPerPage={props.numberOfProducts}          
            facetFilters={facets}
            //filters={props.facets}
    />
    {props.showSearch ?
      <SearchBox />
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

