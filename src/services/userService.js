import axios from "axios";

const API_URL = "http://localhost:3001/users/";
const addressSave = (stateData, zipData, cityData) => {
  return axios.post(API_URL+'addressSave', {
    state:stateData,
    zipcode:zipData,
    street:cityData
  });

};
const payMoney = () => {
  return axios.post(API_URL+'payment/stripe/get-client-secret', {
  });

};
const payUser = (paymentIntent, paymentMethod) => {
  return axios.post(API_URL+'payment/confirm', {
    paymentIntent:paymentIntent,
    paymentMethod:paymentMethod
  });

};
const orderSave = (nameData, phoneData, emailData, switchData, selectedData, comboData, keypadData, fixedTimeData, fromTimeData, toTimeData, checkData) => {
  return axios.post(API_URL+'orderSave', {
    firstName:nameData,
    phone: phoneData,
    email: emailData,
    isOccupied:switchData,
    accountVariant:selectedData,
    lockboxCombo:comboData,
    lockboxKeypad:keypadData,
    inspectionDate:fixedTimeData,
    inspectionWindowStartTime:fromTimeData,
    inspectionWindowEndTime:toTimeData,
    StripePaymentStatus:checkData,
  })    
  .then(function (response) {

  })

};

const UserService = {
  addressSave,
  orderSave,
  payMoney,
  payUser
}
export default UserService;