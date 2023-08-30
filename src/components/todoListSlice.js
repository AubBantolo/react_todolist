import { createSlice } from "@reduxjs/toolkit";

const todoListSlice = createSlice({
    name: "todoList",
    initialState: {
        todoList: [],
    }, 
    reducers: {
        addTodoItem: (state, action) => {
            state.todoList.push(action.payload);
        },
        
        doneTodoItem: (state, action) => {

            const todoItem = state.todoList.find(item => item.id === action.payload);
            if(todoItem) {
                todoItem.done = !todoItem.done;
            }
            
        },

        deleteTodo: (state, action) => {
            state.todoList = state.todoList.filter(item => item.id !== action.payload);
        },
    }
});

export const { addTodoItem, doneTodoItem, deleteTodo} = todoListSlice.actions;
export default todoListSlice.reducer;