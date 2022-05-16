import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showSideBar: true,
    showLogout: false,
    showBigSideBar : false,
    showJobModal: false,
}


const componentSlice = createSlice({
    name:'component',
    initialState,
    reducers : {
        toggleSideBar : (state) => {
            state.showSideBar = !state.showSideBar;
            state.showBigSideBar = !state.showBigSideBar;
        },
        closeBigSideBar : (state) => {
            state.showBigSideBar = false;
        },
        toggleLogout : (state) => {
            state.showLogout = !state.showLogout;
        },
        openJobModal : (state) => {
            state.showJobModal = true;
        },
        closeJobModal : (state) => {
            state.showJobModal = false;
        }

    }
})



export const {toggleSideBar, toggleLogout, closeBigSideBar, openJobModal, closeJobModal} = componentSlice.actions;

export default componentSlice.reducer;