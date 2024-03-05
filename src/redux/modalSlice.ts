import { createSlice } from '@reduxjs/toolkit';

interface IModal {
  isHidden: boolean;
}

const initialState:IModal = {
  isHidden: true,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: state => {
      state.isHidden = false;
    },
  },
});

export const {openModal} = modalSlice.actions;

export const modalReduser = modalSlice.reducer;
