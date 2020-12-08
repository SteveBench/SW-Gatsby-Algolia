import { Link } from "gatsby";
import React from "react";
import CTALink from "./CTALink";
import logo from "../images/Sofology-Logo-Standard.png";
import styled from 'styled-components';
import AlgoliaMicroSearch from './algolia-predictive';
import algoliasearch from 'algoliasearch/lite';

import { InstantSearch} from 'react-instantsearch-dom';

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

  const appId = "1CL1G2ARPW";
  const searchKey = "ae8f036daa5fee12150f23c86673fbb4"
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
                 indexName="production"
                >

                <AlgoliaMicroSearch />
                </InstantSearch>
                
                </li>
            </ul>
            
     
          </div>
        )}
      </div>

      <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
    </NavStyles>
  );
};

export default Header;
