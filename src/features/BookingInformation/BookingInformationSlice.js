import { createSlice } from '@reduxjs/toolkit'
const initialState=[
    {
        id:'1',
        regionData:"",
        myData:"",
        cvcData:"",
        cardData:"",
        zipData:"",
        emailData:'',
        countryData:'',
        checkData:false,
      },
  ]
const BookingInformationSlice = createSlice({
  name: 'BookingInformation',
  initialState,
  reducers: {
    BookingInformationAdd(state, action) {
        console.log(state)
        console.log(action.payload)
        state.push(action.payload);
        state.splice(0,1);
        console.log(action.payload)
      }
  },
})
export const { BookingInformationAdd } = BookingInformationSlice.actions
// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default BookingInformationSlice.reducer