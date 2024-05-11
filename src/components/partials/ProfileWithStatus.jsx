import React from 'react'
import style from 'styled-components'
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';

// Icons 
import QuestionAnswerRoundedIcon from '@mui/icons-material/QuestionAnswerRounded';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';

const ProfileWithStatus = ({ socketId, pfp, username, status }) => {

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            backgroundColor: '#44b700', // #3e413b
            color: '#44b700', // #000
            boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
            '&::after': {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                animation: 'ripple 1.2s infinite ease-in-out',
                border: '1px solid currentColor',
                content: '""',
            },
        },
        '@keyframes ripple': {
            '0%': {
                transform: 'scale(.8)',
                opacity: 1,
            },
            '100%': {
                transform: 'scale(2.4)',
                opacity: 0,
            },
        },
    }));


    return (
        <ProfileWithStatusWrapper>
            <div className="left">
                <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    variant="dot"
                >
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </StyledBadge>
                <h3>Jaun-Ceo</h3>
            </div>
            <div className="right">
                <QuestionAnswerRoundedIcon />
                <PersonRemoveIcon style={{color: '#e00000'}} />
            </div>
        </ProfileWithStatusWrapper>
    )
}

const ProfileWithStatusWrapper = style.section`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;

    .left {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .right {
        display: flex;
        gap: 1rem;

        svg {
            font-size: 1.6rem;
        
            &:hover {
                background-color: inherit;
                cursor: pointer;
            }
        }
    }
`;

export default ProfileWithStatus