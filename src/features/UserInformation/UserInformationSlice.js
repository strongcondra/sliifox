import { createSlice } from '@reduxjs/toolkit'
const initialState=[
    {
        id:'',
        stateData:"",
        cityData:"",
        zipData:"",
        emailData:"",
        phoneData:"",
        nameData:""
      },
  ]
const UserInformationSlice = createSlice({
  name: 'UserInformation',
  initialState,
  reducers: {
    UserInformationAdd(state, action) {

        state.push(action.payload);
        state.splice(0,1);
      }
  },
})
export const { UserInformationAdd } = UserInformationSlice.actions
// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default UserInformationSlice.reducer