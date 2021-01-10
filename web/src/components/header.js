import { Link } from "gatsby";
import React from "react";
import CTALink from "./CTALink";
import logo from "../images/Sofology-Logo-Standard.png";
import styled from 'styled-components';
import MicroSearch from './microSearch';
import algoliasearch from 'algoliasearch/lite';

import { InstantSearch, connectStateResults} from 'react-instantsearch-dom';



const NavStyles = styled.nav `
  background: black;
`;






const Header = ({ showNav, siteTitle, scrolled, navMenuItems = [], textWhite = true }) => {
  let headerClass = "fixed w-full z-30 top-0 text-white headerStyles";
  headerClass += scrolled ? "shadow" : "";

  let navActionClass =
    "mx-auto lg:mx-0 hover:underline font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75";
  navActionClass += !textWhite || !scrolled ? " " : "";
  navActionClass += textWhite || scrolled ? "text-white" : "";

  let navContentClass =
    "w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 text-white p-4 lg:p-0 z-20";
  navContentClass += !textWhite || !scrolled ? " lg:bg-transparent bg-gray-100" : "";
  navContentClass += textWhite || scrolled ? " " : "";

  let titleClass = "toggleColour no-underline hover:no-underline font-bold text-2xl lg:text-4xl";
  titleClass += !textWhite || scrolled ? " text-gray-800" : "";
  titleClass += textWhite || !scrolled ? " text-white" : "";

  const appId = "LRDB3IFCF0";
  const searchKey = "0969668003a9459920213920ffc4b6ad"
  const searchClient = algoliasearch(appId, searchKey);
  
  


  return (
    <NavStyles id="header" className={headerClass}>
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="pl-4 flex items-center">
          <Link id="siteTitle" className={titleClass} to="/">
          <img src={logo} alt="siteTitle" />
          
          </Link>
        </div>

        {showNav && navMenuItems && (
          <div className={navContentClass} id="nav-content">
            <ul className="list-reset lg:flex justify-end flex-1 items-center">
              {navMenuItems.map((i) => (
                <li className="mr-3">
                  <CTALink {...i} buttonActionClass={navActionClass} />
                </li>
              ))}

              <li>
                <InstantSearch
                 searchClient={searchClient}
                 indexName="JR_PRD_variant_index_copy"
                >

                <MicroSearch   />
                </InstantSearch>
                
                </li>
            </ul>
            
     
          </div>
        )}
      </div>

    </NavStyles>
  );
};

export default Header;
