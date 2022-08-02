import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface IMonitor {
  id: number;
  url: string;
  label: string;
}

// Define a type for the slice state
interface MonitorState {
  monitors: IMonitor[];
}

// Define the initial state using that type
const initialState: MonitorState = {
  monitors: [],
  // [
  //   // {
  //   //   url: "http://www.youtube.com/embed/oHg5SJYRHA0?autoplay=1",
  //   //   label: "RickRoll 1",
  //   //   id: 1,
  //   // },
  //   // {
  //   //   url: "http://www.youtube.com/embed/oHg5SJYRHA0?autoplay=1",
  //   //   label: "RickRoll 2",
  //   //   id: 2,
  //   // },
  //   // {
  //   //   url: "http://www.youtube.com/embed/oHg5SJYRHA0?autoplay=1",
  //   //   label: "RickRoll 3",
  //   //   id: 3,
  //   // },
  //   // {
  //   //   url: "http://www.youtube.com/embed/oHg5SJYRHA0?autoplay=1",
  //   //   label: "RickRoll 4",
  //   //   id: 4,
  //   // },
  //   // {
  //   //   url: "http://www.youtube.com/embed/oHg5SJYRHA0?autoplay=1",
  //   //   label: "RickRoll 5",
  //   //   id: 5,
  //   // },
  //   // {
  //   //   url: "http://www.youtube.com/embed/oHg5SJYRHA0?autoplay=1",
  //   //   label: "RickRoll 6",
  //   //   id: 6,
  //   // },
  //   // {
  //   //   url: "http://www.youtube.com/embed/oHg5SJYRHA0?autoplay=1",
  //   //   label: "RickRoll 7",
  //   //   id: 7,
  //   // },
  // ],
};

export const monitorSlice = createSlice({
  name: "monitor",
  initialState,
  reducers: {
    newMonitor: (
      state,
      action: PayloadAction<{ url: string; label: string }>
    ) => {
      const newId = getNewId(state.monitors);
      state.monitors.push({ ...action.payload, id: newId });
    },
    deleteMonitor: (state, action: PayloadAction<number>) => {
      state.monitors = state.monitors.filter(
        (monitor) => monitor.id != action.payload
      );
    },
    defineMonitors: (state, action: PayloadAction<IMonitor[]>) => {
      state.monitors = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { newMonitor, deleteMonitor, defineMonitors } =
  monitorSlice.actions;

export const selectMonitors = (state: RootState) => state.monitor.monitors;

export const getNewId = (monitors: IMonitor[]) => {
  const newId = monitors.length > 0 ? monitors[monitors.length - 1].id + 1 : 0;
  return newId;
};
export default monitorSlice.reducer;
