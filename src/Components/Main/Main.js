import React, { useState } from 'react';
import FakeUsers from '../FakeData/FakeDetails.json';
import Profiles from '../Profiles/Profiles';
import Header from '../Header/Header';
import Statusbar from '../Statusbar/Statusbar';
import './Main.css'
const Main = () => {
    const fakeData = FakeUsers;
    const [users]= useState(fakeData);
    const [status, setStatus]= useState([]);
    const hendleAddFriend = (user) => {
        const newStatus = [...status, user];
        setStatus(newStatus);
    }

    return (
        <div className="usersContainer">
            <Header></Header>
            {
                users.map(userData => <Profiles userData = {userData} hendleAddFriend={hendleAddFriend}></Profiles>)
            }
            <div className="statusBar">
                <Statusbar status = {status}></Statusbar>
            </div>
        </div>
    );
};

export default Main;
