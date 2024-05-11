import React from 'react'
import Layout from '../components/partials/Layout';


const AddFriend = () => {

    const AddFriendContent = () => {
        return (
            <h1>Hello Friend</h1>
        )
    }

    return (
        <Layout Content={<AddFriendContent />} />
    );
}

export default AddFriend