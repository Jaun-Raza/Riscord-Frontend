import { createSlice } from '@reduxjs/toolkit';
import { useGetUserDataQuery } from '../../RTK/ApiRequests';

const initialState = {
    user: {}
};

const User = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addInfo: (state, action) => {
            const data = action.payload;

            state.user = {
                ...state.user,
                username: data.username,
                email: data.email,
                bio: data.bio,
                joinedAt: data.createdAt,
                theme: data.theme,
                friends: data.friends,
                notifications: data.notifications,
                blockedFriends: data.blockedFriends,
            }
        },
    },
});

export const { addInfo } = User.actions;

export default User.reducer;
