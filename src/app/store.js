import { configureStore } from '@reduxjs/toolkit'
import UserInformationReducer from '../features/UserInformation/UserInformationSlice.js'
import AccessInformationReducer from '../features/AccessInformation/AccessInformationSlice.js'
import TimeInformationReducer from '../features/TimeInformation/TimeInformationSlice.js'
import BookingInformationReducer from '../features/BookingInformation/BookingInformationSlice.js'

export default configureStore({
  reducer: {
    UserInformation: UserInformationReducer,
    AccessInformation:AccessInformationReducer,
    TimeInformation:TimeInformationReducer,
    BookingInformation:BookingInformationReducer,
  },
})

