import { createSlice } from '@reduxjs/toolkit'
const initialState=[
    {
      id:"1",
      switchData:false,
      selectedData:"a",
      comboData:'',
      keypadData:'',
    },
  ]
const AccessInformationSlice = createSlice({
  name: 'AccessInformation',
  initialState,
  reducers: {
    AccessInformationAdd(state, action) {
      console.log(action.playload)
        state.push(action.payload);
        state.splice(0,1);
    
      }
  },
})
export const { AccessInformationAdd } = AccessInformationSlice.actions
// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default AccessInformationSlice.reducer