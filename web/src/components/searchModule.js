
import React from "react";
import PortableText from "./portableText";
import clientConfig from "../../client-config";
import CTALink from "./CTALink";
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, Pagination, Configure } from 'react-instantsearch-dom';
import HitList from './hits';

import { getFluidGatsbyImage } from "gatsby-source-sanity";
import { searchModule} from '../../../studio/schemas/plugs';
const maybeImage = illustration => {
  let img = null;
  if (illustration && illustration.image && illustration.image.asset && !illustration.disabled) {
    const fluidProps = getFluidGatsbyImage(
      illustration.image.asset._id,
      { maxWidth: 960 },
      clientConfig.sanity
    );

    img = (
      <img className="w-full md:w-4/5 z-50" src={fluidProps.src} alt={illustration.image.alt} />
    );
  }
  return img; 
};

function SearchModule(props) {
  const img = maybeImage(props.illustration);
  const appId = "CIBIQR9HO1";
const searchKey = "57c22ea832a7582222414dd12456ceac"
const searchClient = algoliasearch(appId, searchKey);
const Searchmodule= () => (

  <InstantSearch
    searchClient={searchClient}
    indexName="production"

  >

    <Configure
    hitsperpage={props.numberOfProducts}
    // attributesToSnippet={}
    facetFilters={props.category}
    // filters={}
></Configure>
    

    <SearchBox />

    <Hits hitComponent={HitList} />

  </InstantSearch>
  
);
  return (
  <>
    <h1>HELLO</h1>
    <searchModule />
  </>
  );
}

export default SearchModule;
