import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getTodos = createAsyncThunk('todos/getTodos', async () => {
  const res = await axios.get('https://dummyjson.com/todos');
  return res.data.todos;
});

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    updateUrgency(state, action) {
      const task = state.data.find(t => t.id === action.payload.id);
      if (task) task.urgency = action.payload.urgency;
    },
    updateCompleted(state, action) {
      const task = state.data.find(t => t.id === action.payload.id);
      if (task) task.completed = !task.completed;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getTodos.pending, state => {
        state.loading = true;
      })
      .addCase(getTodos.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(getTodos.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export const { updateUrgency, updateCompleted } = todoSlice.actions;
export default todoSlice.reducer;