// import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";

import './App.css';
import rgb from "./rbg.jpeg";
import logo from "./logo.png";
// import MaterialIcons from "react-native-vector-icons/MaterialIcons";
// import Ionicons from "react-native-vector-icons/Ionicons";
// import { Left } from "native-base";
// import { setUserMobile, setUserDetails } from "../../reducers/Action";
// import { connect } from "react-redux";

const Home = props => {
  const { navigation } = props;
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOTP] = useState("");
  const [userDetails, setUserDetails] = useState(null);




  return (
    <div
      class="bg_image"
      style={{
        backgroundImage: 'url(' + rgb + ')',
        backgroundSize: "cover",
        height: "100vh",
        color: "#f5f5f5",
        width: "80%"
      }}
    >
      <img
        src={logo}
        resizeMode={'cover'}
        height={40}
        style={{ marginLeft: 10, border: '0.4px solid rgba(255,255,255, .7)', borderRadius: 3 }}
      />
      {/* <h1>This is Text on top</h1> */}
    </div>

  );
};

export default Home;

// export default Login;
