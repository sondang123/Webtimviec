import workApi from "../../../api/workApi";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const workData = createAsyncThunk("works/workData", async (page) => {
  const work = await workApi.getAll(page);
  return work;
});
export const byCategory = createAsyncThunk("works/category", async (page) => {
  const work = await workApi.getByCategory(page);
  return work;
});
const Work = createSlice({
  name: "works",
  initialState: {
    work: [],
    workCategory: [],
    loading: true,
    error: "",
  },
  reducers: {
    addwork: (state, action) => {
      workApi.postwork(action.payload);
    },
    removework: (state, action) => {
      workApi.deletework(action.payload);
    },
    updatework: (state, action) => {
      workApi.editwork(action.payload);
    },
  },
  extraReducers: {
    [workData.pending]: (state) => {
      state.loading = true;
    },
    [workData.rejected]: (state, action) => {
      state.loading = true;
      state.error = action.error;
    },
    [workData.fulfilled]: (state, action) => {
      state.loading = false;
      state.work = action.payload;
    },
    [byCategory.pending]: (state) => {
      state.loading = true;
    },
    [byCategory.rejected]: (state, action) => {
      state.loading = true;
      state.error = action.error;
    },
    [byCategory.fulfilled]: (state, action) => {
      state.loading = false;
      state.workCategory = action.payload;
    },
  },
});
const { reducer, actions } = Work;
export const { addwork, removework, updatework } = actions;

export default reducer;
