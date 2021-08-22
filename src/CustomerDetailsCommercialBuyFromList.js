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
import { numDifferentiation, dateFormat } from "./util/methods";
import axios from "axios";
import { SERVER_URL } from "./util/constant";
import { Avatar } from "react-native-elements";




const CustomerDetailsCommercialBuyFromList = props => {
  const { agentId, customerId, propType } = props;
  const [item, setItem] = useState(null)
  // console.log("item:  ", props.agentId);


  useEffect(() => {
    getCustomerDetailsByIdToShare();
  }, [agentId, customerId, propType]);

  const getCustomerDetailsByIdToShare = () => {
    const user = {
      agent_id: agentId,
      customer_id: customerId,
      property_type: "commercial"
    };
    console.log(JSON.stringify(user));
    axios(SERVER_URL + "/getCustomerDetailsByIdToShare", {
      method: "POST",
      // headers: {
      //   "Content-type": "Application/json",
      //   Accept: "Application/json"
      // },
      data: user
    }).then(
      response => {
        console.log(response.data);
        setItem(response.data)
        // setItem(response.data)
        // setData(response.data);
        // props.setResidentialCustomerList(response.data);
      },
      error => {
        // console.log(error);
      }
    );
  }

  // // console.log(item);
  return (
    item ? <Container maxWidth="xs">
      <ScrollView style={[styles.container]}>
        <View
          style={[
            {
              flexDirection: "row",
              alignItems: "flex-start",
              paddingRight: 16,
              // paddingLeft: 16,
              // paddingBottom: 16,
              // paddingTop: 16,
              width: "100%",
              backgroundColor: "#ffffff"
            }
            // { backgroundColor: "rgba(245,245,245, 0.8)" }
          ]}
        >
          <Avatar
            square
            size={60}
            title={
              item.customer_details.name && item.customer_details.name.slice(0, 2)
            }
            activeOpacity={0.7}
            titleStyle={{ color: "rgba(105,105,105, .9)" }}
            // source={{
            //   uri: item.photo
            // }}
            avatarStyle={{
              borderWidth: 1,
              borderColor: "rgba(127,255,212, .9)",
              // borderTopLeftRadius: 1,
              borderStyle: "solid"
            }}
          />
          <View style={{ paddingLeft: 20, paddingTop: 10 }}>
            <Text style={[styles.title]}>{item.customer_details.name}</Text>
            <Text style={[StyleSheet.subTitle]}>
              {item.customer_details.mobile1}
            </Text>
            <Text style={[StyleSheet.subTitle]}>
              {item.customer_details.address}
            </Text>
          </View>
        </View>

        {/* <Image
        source={require("../../assets/images/p1.jpg")}
        resizeMode={"stretch"}
        resizeMethod={"resize"}
        style={{ width: "100%", height: 200 }}
      /> */}

        <View style={[styles.detailsContainer, { backgroundColor: "#ffffff" }]}>
          <View style={[styles.details]}>
            <View style={[styles.subDetails]}>
              <Text style={[styles.subDetailsValue]}>
                {item.customer_property_details.property_used_for}
              </Text>
              <Text style={[styles.subDetailsTitle]}>Prop Type</Text>
            </View>
            <View style={styles.verticalLine}></View>
            <View style={[styles.subDetails]}>
              <Text style={[styles.subDetailsValue]}>
                {numDifferentiation(item.customer_buy_details.expected_buy_price)}
              </Text>
              <Text style={[styles.subDetailsTitle]}>Buy</Text>
            </View>
            <View style={styles.verticalLine}></View>
            <View style={[styles.subDetails]}>
              <Text style={[styles.subDetailsValue]}>
                {item.customer_property_details.building_type}
              </Text>
              <Text style={[styles.subDetailsTitle]}>Building Type</Text>
            </View>
            {/* <View style={styles.verticalLine}></View>
          <View style={[styles.subDetails]}>
            <Text style={[styles.subDetailsValue]}>
              {item.customer_property_details.furnishing_status}
            </Text>
            <Text style={[styles.subDetailsTitle]}>Furnishing</Text>
          </View> */}
            {/* <View style={styles.verticalLine}></View> */}
            {/* <View style={[styles.subDetails]}>
            <Text style={[styles.subDetailsValue]}>
              {item.customer_property_details.property_size}sqft
            </Text>
            <Text style={[styles.subDetailsTitle]}>Buildup</Text>
          </View> */}
          </View>
        </View>

        <View style={styles.margin1}></View>
        {/* property details */}
        <View style={styles.overviewContainer}>
          <View style={styles.overview}>
            <Text>Details</Text>
            <View style={styles.horizontalLine}></View>
          </View>
          <View style={styles.overviewColumnWrapper}>
            <View style={styles.overviewLeftColumn}>
              <View style={[styles.subDetails]}>
                <Text style={[styles.subDetailsValue]}>
                  {item.customer_locality.city}
                </Text>
                <Text style={[styles.subDetailsTitle]}>City</Text>
              </View>

              <View style={{ paddingBottom: 20, width: "70%" }}>
                <Text style={[styles.subDetailsValue]}>
                  {/* {location.join(', ')} */}
                </Text>
                <Text style={[styles.subDetailsTitle]}>Locations</Text>
              </View>

              <View style={[styles.subDetails]}>
                <Text style={[styles.subDetailsValue]}>
                  {item.customer_buy_details.negotiable}
                </Text>
                <Text style={[styles.subDetailsTitle]}>Negotiable</Text>
              </View>

              {/* <View style={[styles.subDetails]}>
              <Text style={[styles.subDetailsValue, { width: 200 }]}>
                {item.customer_property_details.ideal_for.join(", ")}
              </Text>
              <Text style={[styles.subDetailsTitle]}>Ideal For</Text>
            </View> */}
            </View>
            <View style={styles.overviewRightColumn}>
              <View style={[styles.subDetails]}>
                <Text style={[styles.subDetailsValue]}>
                  {dateFormat(item.customer_buy_details.available_from)}
                </Text>
                <Text style={[styles.subDetailsTitle]}>Possession</Text>
              </View>
              <View style={[styles.subDetails]}>
                <Text style={[styles.subDetailsValue]}>
                  {item.customer_property_details.parking_type}
                </Text>
                <Text style={[styles.subDetailsTitle]}>Parking</Text>
              </View>
              {/* <View style={[styles.subDetails]}>
              <Text style={[styles.subDetailsValue]}>Shop</Text>
              <Text style={[styles.subDetailsTitle]}>Last used for</Text>
            </View> */}

              {/* <View style={[styles.subDetails]}>
              <Text style={[styles.subDetailsValue]}>
                {item.customer_property_details.property_age} years
              </Text>
              <Text style={[styles.subDetailsTitle]}>Age of Building</Text>
            </View> */}
              {/* <View style={[styles.subDetails]}>
              <Text style={[styles.subDetailsValue]}>
                {item.customer_property_details.power_backup}
              </Text>
              <Text style={[styles.subDetailsTitle]}>Power backup</Text>
            </View> */}
            </View>
          </View>
        </View>
        {/* owner details */}
        <View style={styles.margin1}></View>
        {/* <View style={styles.overviewContainer}>
        <View style={styles.overview}>
          <Text>Owner</Text>
          <View style={styles.horizontalLine}></View>
          <View style={styles.ownerDetails}>
            <Text>{item.owner_details.name}</Text>
            <Text>{item.owner_details.address}</Text>
            <Text>+91 {item.owner_details.mobile1}</Text>
          </View>
        </View>
      </View> */}
      </ScrollView>
    </Container> : <View>
      <Text>
        NO REsuLT
      </Text>
    </View>);
};

const styles = StyleSheet.create({
  container: {},
  card: {
    shadowOpacity: 0.0015 * 5 + 0.18,
    shadowRadius: 0.54 * 5,
    shadowOffset: {
      height: 0.6 * 5
    },
    backgroundColor: "#ffffff"
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
    height: 60
    // borderTopWidth: 1,
    // borderTopColor: "#C0C0C0",
    // backgroundColor: "rgba(220,220,220, 0.80)"
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
    height: "70%",
    width: 1,
    backgroundColor: "#909090"
  },

  horizontalLine: {
    borderBottomColor: "#ffffff",
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
    backgroundColor: "#E0E0E0"
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


export default CustomerDetailsCommercialBuyFromList;
