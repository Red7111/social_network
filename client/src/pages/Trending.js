import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { UidContext } from './../components/AppContext';
import LeftNav from "../components/LeftNav";
import Card from './../components/Post/Card';
import { isEmpty } from "../components/Utils";
import Trends from "../components/Trends";
import FriendsHint from "../components/Profil/FriendsHint";

const Trending = () => {
    const uid = useContext(UidContext);
    const trendLists = useSelector((state) => state.trendingReducer)

    return (
        <div className="trending-page">
            <LeftNav />
            <div className="main">
                <ul>
                    {!isEmpty(trendLists[0]) && trendLists.map((post) => <Card post={post} key={post._id} />)}
                </ul>
            </div>
            <div className="right-side">
                <div className="right-side-container">
                    <Trends />
                    {uid && <FriendsHint />}
                </div>
            </div>
        </div>
    );
};

export default Trending;