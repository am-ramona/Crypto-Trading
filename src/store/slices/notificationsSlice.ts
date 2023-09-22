import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../../app/store"
import { iNotification } from 'react-notifications-component'
import 'animate.css/animate.compat.css'
export interface NotificationsState extends iNotification {
  // content?: NotificationContent | unknown | null,
  content?: any
}

// Define the initial state using that type
// const initialState: iNotification = 
const initialState =
{
  message: "No notification found",
  type: "info",
  content: undefined,
  insert: "top",
  container: 'top-right',
  // animationIn: ['animated fadeIn'],
  animationOut: ['animated fadeOut'],
  dismiss: {
    duration: 5000,
    onScreen: false,
    pauseOnHover: true,
    showIcon: true,
    click: true,
    waitForAnimation: true
  },
  // slidingEnter: {
  //     duration: 3000,
  //     timingFunction: 'ease-in',
  //     delay: 400,
  //   }
};

// Workaround: cast state instead of declaring variable type
// const initialState = {
//     value: 0,
//   } as CounterState

export const notificationsSlice = createSlice({
  name: "notifications",
  initialState: [initialState] as Array<iNotification>,
  reducers: {
    add: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      //   state.value += 1
    },
    remove: (state) => {
      //   state.value -= 1
    },

    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<any>) => {
      //   state.value += action.payload
      // console.log('inside incrementByAmount')
      // console.log('action', action)
      state.push(action.payload);
      // console.log('incrementByAmount state', state)
    },
    // https://redux-toolkit.js.org/api/createslice
    // prepare: (text: string) => {
    //     const id = nanoid()
    //     return { payload: { id, text } }
    //   },
  },
});

// Action creators are generated for each case reducer function
export const { incrementByAmount } = notificationsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectNotifications = (state: RootState) => state.notifications.values;

export default notificationsSlice.reducer;
