"use client";
import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const SearchButton = styled.button`
  padding: 20px 20px;
  font-size: 16px;
  color: #FFFFFF; // Use your desired text color
  border: 2px solid #999; // Use your desired border color
  background-image: url('../public/images.png'); // Use your desired background color
  border-radius: 0 5px 5px 0; // Rounded right corners
  cursor: pointer;
  &:hover {
    background-color: #eee; // Use your desired hover color
  }
`;

const NavBarContainer = styled.div`
background-image: url('../public/images.png'); // Replace with the color you used
  display: flex;
  shadow: 0 2px 2px black;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: #faddc8; // Replace with the color you used
`;

// Define a flex container for the search bar and button
const SearchBarContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  background-color: #fb9e72; // Use your desired color
`;

// Update the SearchInput to allow space for the button
const SearchInput = styled.input`
  flex-grow: 1; // Allow the input to fill the space
  padding: 10px;
  font-size: 16px;
  color: #999999; // Use your desired text color
  border: 2px solid #999; // Use your desired border color
  border-radius: 5px 0 0 5px; // Rounded left corners
  margin-right: -2px; // Overlap border with button
`;

const NavigationLinks = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 10px 0;
  font-size: 20px;
  font-weight: 600;
   // Adjust as needed
`;

const NavItem = styled.li`
  padding: 10px 15px;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    border-bottom: 2px solid #faddc8; // Adjust hover style as needed
  }
`;

const NavBarNoScrollSec = ({ onSearch }: { onSearch: (searchTerm: string) => void }) => {
    const [searchTerm, setSearchTerm] = useState<string>('');

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSearch(searchTerm); // This will call the function passed from the parent component
    };
  
    return (
        <NavBarContainer>
        <form onSubmit={handleSearch}>

        <SearchBarContainer>
            <SearchInput type="search" placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
            <SearchButton type="submit">Search</SearchButton>
        </SearchBarContainer>
        </form>
        <NavigationLinks>
            <Link href="/" passHref><NavItem>Home</NavItem></Link>
            <Link href="/Motivation" passHref><NavItem>Motivation</NavItem></Link>
            {/* <Link href="/HomeWorkOut" passHref><NavItem>At Home Workouts</NavItem></Link> */}
            <Link href="/GymTechnique" passHref><NavItem>Technique</NavItem></Link>
        </NavigationLinks>
        </NavBarContainer>
    );
    };

export default NavBarNoScrollSec;



