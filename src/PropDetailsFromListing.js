import React, { Component, useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity
} from "react-native";
import {
  Container,
  AppBar,
  CssBaseline,
  Typography,
  createMuiTheme,
  TextField,
  withStyles,
  Button,
  Radio,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  FormControl
} from '@material-ui/core';
import Slideshow from "./components/Slideshow";
import { numDifferentiation } from "./util/methods";
import axios from "axios";
import { SERVER_URL } from "./util/constant";
// import Feather from "react-native-vector-icons/Feather";
// import { connect } from "react-redux";

const PropDetailsFromListing = props => {
  const { agentId, propId, propType } = props;
  const [item, setItem] = useState(null)
  console.log("item:  ", props.agentId);


  useEffect(() => {
    getPropertyDetailsByIdToShare();
  }, [agentId, propId, propType]);

  const getPropertyDetailsByIdToShare = () => {
    const user = {
      agent_id: agentId,
      property_id: propId,
      property_type: propType
    };
    console.log(JSON.stringify(user));
    axios(SERVER_URL + "/getPropertyDetailsByIdToShare", {
      method: "POST",
      // headers: {
      //   "Content-type": "Application/json",
      //   Accept: "Application/json"
      // },
      data: user
    }).then(
      response => {
        console.log(response.data[0]);
        setItem(response.data)
        // setData(response.data);
        // props.setResidentialCustomerList(response.data);
      },
      error => {
        // console.log(error);
      }
    );
  }

  return (
    item ? <Container maxWidth="xs">
      {/* <AppBar color="inherit">
      <Typography variant="h6" style={{ textAlign: 'center', fontSize: 32, fontWeight: '600' }}>
        Realto
      </Typography>
    </AppBar> */}
      <ScrollView >
        <View style={[styles.headerContainer]}>
          <Text style={[styles.title]}>
            Rent {item.property_address.building_name},{" "}
            {item.property_address.landmark_or_street}
          </Text>
          <Text style={[StyleSheet.subTitle]}>
            {item.property_address.formatted_address}
          </Text>
        </View>
        {/* <Image
      source={require("../../assets/images/p1.jpg")}
      resizeMode={"stretch"}
      resizeMethod={"resize"}
      style={{ width: "100%", height: 200 }}
    /> */}
        <Slideshow
          dataSource={item.image_urls}
        />
        <View style={[styles.detailsContainer]}>
          <View style={[styles.details]}>
            <View style={[styles.subDetails]}>
              <Text style={[styles.subDetailsValue, { paddingTop: 5 }]}>
                {item.property_details.bhk_type}
              </Text>
              {/* <Text style={[styles.subDetailsTitle]}>BHK</Text> */}
            </View>
            <View style={styles.verticalLine}></View>
            <View style={[styles.subDetails]}>
              <Text style={[styles.subDetailsValue]}>
                {numDifferentiation(item.rent_details.expected_rent)}
              </Text>
              <Text style={[styles.subDetailsTitle]}>Rent</Text>
            </View>
            <View style={styles.verticalLine}></View>
            <View style={[styles.subDetails]}>
              <Text style={[styles.subDetailsValue]}>
                {numDifferentiation(item.rent_details.expected_deposit)}
              </Text>
              <Text style={[styles.subDetailsTitle]}>Deposit</Text>
            </View>
            <View style={styles.verticalLine}></View>
            <View style={[styles.subDetails]}>
              <Text style={[styles.subDetailsValue]}>
                {item.property_details.furnishing_status}
              </Text>
              <Text style={[styles.subDetailsTitle]}>Furnishing</Text>
            </View>
            <View style={styles.verticalLine}></View>
            <View style={[styles.subDetails]}>
              <Text style={[styles.subDetailsValue]}>
                {item.property_details.property_size}sqft
              </Text>
              <Text style={[styles.subDetailsTitle]}>Buildup</Text>
            </View>
          </View>
        </View>

        <View style={styles.margin1}></View>
        {/* property details */}
        <View style={styles.overviewContainer}>
          <View style={styles.overview}>
            <View
              style={{ justifyContent: "space-between", flexDirection: "row" }}
            >
              <Text>Details</Text>
              <TouchableOpacity
                // onPress={() => toggleBottomNavigationView()}
                style={styles.fabIcon2}
              >
                {/* <Feather
              name="edit"
              // color={"#ffffff"}
              size={20}
            /> */}
              </TouchableOpacity>
            </View>
            <View style={styles.horizontalLine}></View>
          </View>
          <View style={styles.overviewColumnWrapper}>
            <View style={styles.overviewLeftColumn}>
              <View style={[styles.subDetails]}>
                <Text style={[styles.subDetailsValue]}>
                  {item.property_details.washroom_numbers}
                </Text>
                <Text style={[styles.subDetailsTitle]}>Bathroom</Text>
              </View>
              <View style={[styles.subDetails]}>
                <Text style={[styles.subDetailsValue]}>
                  {item.rent_details.available_from}
                </Text>
                <Text style={[styles.subDetailsTitle]}>Possession</Text>
              </View>
              <View style={[styles.subDetails]}>
                <Text style={[styles.subDetailsValue]}>
                  {item.rent_details.preferred_tenants}
                </Text>
                <Text style={[styles.subDetailsTitle]}>Preferred Tenant</Text>
              </View>
              <View style={[styles.subDetails]}>
                <Text style={[styles.subDetailsValue]}>
                  {item.property_details.lift}
                </Text>
                <Text style={[styles.subDetailsTitle]}>Lift</Text>
              </View>
            </View>
            <View style={styles.overviewRightColumn}>
              <View style={[styles.subDetails]}>
                <Text style={[styles.subDetailsValue]}>
                  {item.property_details.parking_number}{" "}
                  {item.property_details.parking_type}
                </Text>
                <Text style={[styles.subDetailsTitle]}>Parking</Text>
              </View>
              <View style={[styles.subDetails]}>
                <Text style={[styles.subDetailsValue]}>
                  {item.property_details.floor_number}/
                  {item.property_details.total_floor}
                </Text>
                <Text style={[styles.subDetailsTitle]}>Floor</Text>
              </View>
              <View style={[styles.subDetails]}>
                <Text style={[styles.subDetailsValue]}>
                  {item.rent_details.non_veg_allowed}
                </Text>
                <Text style={[styles.subDetailsTitle]}>NonVeg</Text>
              </View>
              <View style={[styles.subDetails]}>
                <Text style={[styles.subDetailsValue]}>
                  {item.property_details.property_age} years
                </Text>
                <Text style={[styles.subDetailsTitle]}>Age of Building</Text>
              </View>
            </View>
          </View>
        </View>
        {/* owner details */}
        <View style={styles.margin1}></View>
        <View style={styles.overviewContainer}>
          <View style={styles.overview}>
            <Text>Owner</Text>
            <View style={styles.horizontalLine}></View>
            <View style={styles.ownerDetails}>
              <Text>{item.owner_details.name}</Text>
              <Text>{item.owner_details.address}</Text>
              <Text>{item.owner_details.mobile1}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </Container> : <View>
      <Text>
        NO REsuLT
      </Text>
    </View>



  );
};

const styles = StyleSheet.create({
  container: {

  },
  card: {
    shadowOpacity: 0.0015 * 5 + 0.18,
    shadowRadius: 0.54 * 5,
    shadowOffset: {
      height: 0.6 * 5
    },
    backgroundColor: "#ffffff",

  },
  cardImage: {
    alignSelf: "stretch",
    marginBottom: 16,
    justifyContent: "center",
    alignItems: "stretch"
  },
  headerContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    paddingRight: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    paddingTop: 16,
    backgroundColor: "#d1d1d1"
  },
  title: {
    fontSize: 16,
    fontWeight: "600"
  },
  subTitle: {
    fontSize: 14,
    fontWeight: "400",
    color: "rgba(255 ,255 ,255 , 0.87)"
  },
  detailsContainer: {
    // borderBottomWidth: 1,
    height: 60,
    borderTopWidth: 1,
    borderTopColor: "#C0C0C0",
    backgroundColor: "rgba(220,220,220, 0.80)"
  },

  details: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  subDetails: {
    paddingBottom: 20
  },
  subDetailsTitle: {
    fontSize: 12,
    fontWeight: "400"
  },
  subDetailsValue: {
    fontSize: 14,
    fontWeight: "600"
  },
  verticalLine: {
    height: 40,
    width: 1,
    backgroundColor: "#909090"
  },

  horizontalLine: {
    borderBottomColor: "#E0E0E0",
    borderBottomWidth: 1,
    marginLeft: 5,
    marginRight: 5,
    paddingTop: 10
  },
  overviewContainer: {
    shadowOpacity: 0.0015 * 5 + 0.18,
    shadowRadius: 0.54 * 5,
    shadowOffset: {
      height: 0.6 * 5
    },
    backgroundColor: "white"
  },
  overview: {
    padding: 10
  },
  overviewSubDetailsRow: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 15
  },

  overviewColumnWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10
  },
  overviewLeftColumn: {
    flexDirection: "column",
    justifyContent: "center"
  },
  overviewRightColumn: {
    flexDirection: "column",
    justifyContent: "center"
  },
  margin1: {
    marginTop: 2
    // paddingTop: 5
  },
  ownerDetails: {
    paddingTop: 10,
    paddingBottom: 10
  }
});


export default PropDetailsFromListing;



// const item = {
//   "_id": "6048804a443786425cd89d04",
//   "agent_id": "15476a82-997a-4bef-bf1b-b1236f6c177e",
//   "create_date_time": "2021-03-10T08:16:10.763Z",
//   "image_urls": [
//     "vichi1",
//   ],
//   "owner_details": {
//     "address": "V",
//     "mobile1": "v",
//     "mobile2": "v",
//     "name": "V",
//   },
//   "property_address": {
//     "building_name": "B",
//     "city": "B",
//     "flat_number": "B",
//     "landmark_or_street": "B",
//     "location_area": "B",
//     "pin": "123",
//   },
//   "property_details": {
//     "bhk_type": "2BHK",
//     "floor_number": "9",
//     "furnishing_status": "Semi",
//     "house_type": "Apartment",
//     "lift": "Yes",
//     "parking_number": "2",
//     "parking_type": "Car",
//     "property_age": "20+",
//     "property_size": "900",
//     "total_floor": "43",
//     "washroom_numbers": "2",
//   },
//   "property_for": "Rent",
//   "property_id": "92ed6b23-0861-4419-b777-0cbe5bbc7190",
//   "property_type": "Residential",
//   "reminders": [
//     "c98e168d-03fe-4c14-aced-ecbec5db42f4",
//     "4f3a9475-7680-48ff-9a93-a5905479ddde",
//     "6edd27eb-dc4e-4e86-acac-bb549a09a4e9",
//     "128a9d24-f609-4287-a7f1-9c571665c853",
//     "4bba562e-8771-433a-97c7-97882029c1a2",
//     "f4f3a33d-2eb0-4024-8d48-31019a0dc0c7",
//     "9f4d0d77-da72-4d99-9bae-0104a333b76b",
//     "e1e6a422-c582-47ac-92c5-3e413eb3945e",
//     "6b28275c-cdcf-4c92-bd7d-10d4c9a7aed4",
//     "91808e48-ac36-4680-b964-47289fbea122",
//     "5d0db1ed-b017-4022-aec1-a75d02946d7a",
//     "959395ae-d488-46d6-ab13-7d0e3e1bf39f",
//     "ab98cc49-8608-4a56-a0e0-b57ea88f613e",
//     "1b7b7b6b-cdb9-4aa3-8aa9-ecb2a82d7c16",
//     "47334ea8-fbc8-488b-ace5-8bead8f26272",
//     "46788539-f1e9-44b8-9288-a2d65abcd6e9",
//     "c7428911-32f3-4a43-9e79-b12ea8bc76a8",
//     "7a88d9ce-affb-47d2-bcb1-e40c6a43de5d",
//     "5aa8afff-08e3-4bc0-8252-111bbc5a3b8c",
//     "73f394a3-51be-4948-9c36-741516a7e9c2",
//     "18263cbc-f512-46ca-aab5-04d1b419b7f0",
//     "4f020df8-f65b-4de0-bd69-a91c12e239ec",
//     "a954b503-19e5-42c3-98b5-6e9d3a23eed2",
//     "73e115d7-fac8-4580-bdfe-91b63abae4c6",
//     "2c2b6ee8-1862-49a7-97af-c52cf73fd9fa",
//     "cf9d4412-1fd1-4147-82bd-9c0a8fbac29d",
//     "9a1aa784-7f2c-4f9a-9140-d59d8f0fe0f8",
//     "28059265-257d-4eb1-987f-6851526867ab",
//     "67ce1c7d-0f1b-4014-a722-9bb4646d9ae8",
//     "131e28d3-6615-434a-ba21-69c7c1ea81cb",
//     "85269ade-674b-40ad-b546-84b842772e8b",
//     "55513860-f3d0-4e62-82b4-e351f6b4ba44",
//     "d9954a36-757b-4b15-ac4c-f9c70e899a56",
//   ],
//   "rent_details": {
//     "available_from": "Wed Mar 10 2021",
//     "expected_deposit": "658888",
//     "expected_rent": "43333",
//     "non_veg_allowed": "Yes",
//     "preferred_tenants": "Bachelors",
//   },
//   "update_date_time": "2021-03-10T08:16:10.763Z",
// }
