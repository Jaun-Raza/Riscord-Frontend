import React from 'react'
import styled from 'styled-components'
import Layout from '../components/partials/Layout';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ProfileWithStatus from '../components/partials/ProfileWithStatus';

const AllFriends = () => {

    const AllFriendContent = () => {
        return (
            <AllFriendsWrapper>
                <h1>All Friends - 34</h1>
                <div className="midBottom">
                    <input type="search" placeholder='Search....' />
                    <div className="users">
                        <ProfileWithStatus />
                    </div>
                </div>
            </AllFriendsWrapper>
        )
    }

    return (
        <Layout Content={<AllFriendContent />} />
    );
}

const AllFriendsWrapper = styled.section`
    .midBottom {
        input {
            width: 50%;
            padding: 0.7rem;
            font-size: 1rem;
            font-weight: 400;
            color: #fff;
            background-color: #43444b;
            border: none;
            outline: none;
            margin-top: 1rem;
            border-radius: 0.5rem;
        }

        ::-webkit-scrollbar {
            display: none;
          }

        .users {
            width: 70%;
            margin: 2rem auto;
            overflow-y: auto;
            height: 100vh; 
        }
    }
`;

export default AllFriends