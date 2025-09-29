import { createSlice } from "@reduxjs/toolkit";
import type { todoType } from "../types/todos.model";

const initialState: todoType[] = [
    {
        id: "1",
        text: "Read book"
    },
    {
        id: "2",
        text: "Learn lesson"
    }
]

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        add: (state, action) => {
            const newTodo = { id: crypto.randomUUID(), text: action.payload }
            state.push(newTodo);
        }
    }
});
export default todoSlice.reducer;
export const {add} = todoSlice.actions;