import { UNITS } from "@/app/constants";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type userInputType = {
  location: {
    lat: string | number;
    lon: string | number;
  };

  unit: string;
  userSearchInput: string;
};

const initialState: userInputType = {
  location: {
    lat: 43,
    lon: 45,
  },

  unit: UNITS.C,
  userSearchInput: "",
};

export const userInputs = createSlice({
  name: "userInputs",
  initialState,
  reducers: {
    reset: () => initialState,
    setUnitToKelvin: (state) => {
      state.unit = UNITS.F;
    },

    setUnitToCelsius: (state) => {
      state.unit = UNITS.C;
    },

    setLocation: (
      state,
      action: PayloadAction<{ lon: string | number; lat: string | number }>
    ) => {
      state.location.lon = action.payload.lon;
      state.location.lat = action.payload.lat;
    },
  },
});

export const { reset, setUnitToKelvin, setUnitToCelsius, setLocation } =
  userInputs.actions;
export default userInputs.reducer;
