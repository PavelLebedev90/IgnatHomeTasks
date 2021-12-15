import React, {useState} from 'react'


import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const Main = styled("div")`
  font-family: sans-serif;
/*  background: #f0f0f0;
  height: 100vh;*/
`;

const DropDownContainer = styled("div")`
  width: 10.5em;
  margin: 0 auto;
`;

const DropDownHeader = styled("div")`
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.3rem;
  color: #3faffa;
  background: #ffffff;
`;

const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
`;

type SelectedType = null | string

const options = ["pre-junior", "junior", "juniorplus"];
function Header() {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<SelectedType>(null);

    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked =  (value: SelectedType) => {
        setSelectedOption(value);
        setIsOpen(false);
        console.log(selectedOption);
    };

    return (


       /*   <span className={classes.NavLink}>
                <NavLink to={'/pre-junior'}>pre-junior </NavLink>
            </span>
            <span className={classes.NavLink}>
                <NavLink to={'/junior'}>junior </NavLink>
            </span>
            <span className={classes.NavLink}>
                <NavLink to={'/juniorplus'}>junior++</NavLink>
            </span>*/

            <div className="App">
                <Main>
                    <DropDownContainer>
                        <DropDownHeader onClick={toggling}>
                            {selectedOption || "SelectPage"}
                        </DropDownHeader>
                        {isOpen && (
                            <DropDownListContainer>
                                <DropDownList>
                                    {options.map(option => (
                                        <ListItem onClick={()=>onOptionClicked(option)} key={Math.random()}>
                                            <NavLink to={`/${option}`}>{option}</NavLink>
                                        </ListItem>
                                    ))}
                                </DropDownList>
                            </DropDownListContainer>
                        )}
                    </DropDownContainer>
                </Main>
            </div>
    )
}

export default Header
