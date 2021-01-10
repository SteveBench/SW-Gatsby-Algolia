
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
  const appId = "LRDB3IFCF0";
  const searchKey = "0969668003a9459920213920ffc4b6ad"
  const searchClient = algoliasearch(appId, searchKey);
const Searchmodule= () => (

  <InstantSearch
    searchClient={searchClient}
    indexName="JR_PRD_variant_index_copy"

  >

    <Configure
    hitsperpage={props.numberOfProducts}
    // attributesToSnippet={}
    facetFilters={props.category}
    filters={[["web:true"],["outletOnly:false"]]} 
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
