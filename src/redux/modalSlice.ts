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
    closeModal: state => {
      state.isHidden = true;
    }
  },
});

export const {openModal, closeModal} = modalSlice.actions;

export const modalReduser = modalSlice.reducer;
