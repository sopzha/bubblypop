import React, { useState, useEffect } from "react";
import TestCard from "../modules/TestCard.js";
import "./Home.css";

import { get } from "../../utilities";

// Thanks to Momika Shrestha, "Pure CSS animated
//bubble background" @ Codepen, for inspiring our bubble code!

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    get("/api/users").then((userObjs) => {
      setUsers(userObjs);
    });
  }, []);

  let usersList = null;
  const hasUsers = users.length !== 0;
  if (hasUsers) {
    usersList = users.map((userObj) => (
      <TestCard
        key={`TestCard_${userObj._id}`}
        _id={userObj._id}
        googleid={userObj.googleid}
        name={userObj.name}
      />
    ));
  } else {
    usersList = <div>No users!</div>;
  }

  return (
    <>
      <div className = "homeBackground">
        <div className = "homeContainer">
          <div className = "homeTitle"> welcome to bubblypop</div>
          <div className = "homeTextContainer"> 
            <div className = "homeText">
              a fast-growing platform combining the best of 
              social media and gaming in a highly satisfying, bubbly experience!
              {/* join our {usersList.length} other users today! */}
            </div>            
            </div>
          </div>
          <div className = "bubbles">
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
          </div>
    </div>
    </>
  );
};

export default Home;
