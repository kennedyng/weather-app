import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const UNITS = {
  F: "kelvin",
  C: "celsius",
};
type userInputType = {
  location: {
    lat: string | number;
    long: string | number;
  };

  unit: string;
  userSearchInput: string;
};

const initialState: userInputType = {
  location: {
    lat: 43,
    long: 45,
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
      action: PayloadAction<{ long: string | number; lat: string | number }>
    ) => {
      state.location.long = action.payload.long;
      state.location.lat = action.payload.lat;
    },
  },
});

export const { reset, setUnitToKelvin, setUnitToCelsius, setLocation } =
  userInputs.actions;
export default userInputs.reducer;
