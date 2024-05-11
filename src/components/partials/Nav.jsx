import React from 'react';
import styled from 'styled-components';
import { NavLink, useLocation } from 'react-router-dom';

// Redux
import { useSelector, useDispatch } from 'react-redux';

// Icons 
import GroupIcon from '@mui/icons-material/Group';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';

const Nav = () => {

    const location = useLocation();
    const { theme } = useSelector((state) => state.toggleTheme);

    return (
        <Navbar theme={{theme}}>
            <NavLink className='blackNav' style={{
            }} to={'/'}><EmojiPeopleIcon /> Friends</NavLink>
            <NavLink style={{
                fontWeight: location.pathname === '/' ? '800' : '400',
                backgroundColor: location.pathname === '/' ? '#43444b' : 'transparent',
                color: location.pathname === '/' ? theme === 'light' ? '#fff' : '#fff' : null
            }} to="/">
                Online
            </NavLink>
            <NavLink style={{
                fontWeight: location.pathname === '/all-friends' ? '800' : '400',
                backgroundColor: location.pathname === '/all-friends' ? '#43444b' : 'transparent',
                color: location.pathname === '/all-friends' ? theme === 'light' ? '#fff' : '#fff' : null
            }} to="/all-friends">
                All
            </NavLink>
            <NavLink className='greenNav' style={{
            }} to={'/page2'}><GroupIcon /> Add Friends</NavLink>
        </Navbar>
    )
}

const Navbar = styled.section`
    display: flex;
    gap: 2rem;
    align-items: center;
    padding: 10px;

    a {
      color: inherit;
      font-size: 1.1rem;
      text-decoration: none;
      display: flex;
      align-items: center;
      flex-direction: row;
      gap: 0.5rem;
      padding: 1px 8px;
      border-radius: 3px;
    }

    .greenNav {
        display: flex;
        align-items: center;
        flex-direction: row;
        gap: 0.5rem;
        background-color: rgb(2, 105, 0);
        color: ${(({theme}) => theme === 'light' ? '#fff' : '#fff')};
        padding: 1px 8px;
        border-radius: 3px;
        font-weight: 400;
    }

    .blackNav {
        display: flex;
        align-items: center;
        flex-direction: row;
        gap: 0.5rem;
        background-color: #121212;
        color: ${(({theme}) => theme === 'light' ? '#fff' : '#fff')};
        padding: 2px 8px;
        border-radius: 3px;
        font-weight: 800;
    }
`;

export default Nav;
