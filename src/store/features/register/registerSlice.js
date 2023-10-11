import { createSlice, nanoid } from "@reduxjs/toolkit";

const users = [
    {userId : '1', name : 'tobi' , email : 'tobi@gmail.com', password : 'tobi@gmail.com', isLoggedIn : false, admin : true},
    {userId : '2', name : 'tori' , email : 'tori@gmail.com', password : 'tori@gmail.com', isLoggedIn : false, admin : false},
];

// Load the initial state from local storage
const initialState = {
  register: loadFromLocalStorage("register") || users, // Initialize with an empty array if not found
  currentUser: loadFromLocalStorage("currentUser") || null, 
};

// Function to load data from local storage
function loadFromLocalStorage(key) {
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    console.error("Error loading state from local storage:", e);
    return undefined;
  }
}

// Function to save data to local storage
function saveToLocalStorage(key, data) {
  try {
    const serializedData = JSON.stringify(data);
    localStorage.setItem(key, serializedData);
  } catch (e) {
    console.error("Error saving state to local storage:", e);
  }
}

export const registerSlice = createSlice({
  name: "registers",
  initialState,
  reducers: {
    login: (state, action) => {
      const { email, password } = action.payload;
      const userIndex = state.register.findIndex(
        (u) => u.email === email && u.password === password
      );
      if (userIndex !== -1) {
        const newUser = { ...state.register[userIndex], isLoggedIn: true };
        state.register[userIndex] = newUser;
        state.currentUser = newUser;
        // Save the updated state to local storage
        saveToLocalStorage("register", state.register);
        saveToLocalStorage("currentUser", newUser);
      }
    },
    logout: (state) => {
      if (state.currentUser) {
        const newUser = { ...state.currentUser, isLoggedIn: false };
        const userIndex = state.register.findIndex(
          (u) => u.userId === newUser.userId
        );
        if (userIndex !== -1) {
          state.register[userIndex] = newUser;
        }
        state.currentUser = null;
        // Save the updated state to local storage
        saveToLocalStorage("register", state.register);
        saveToLocalStorage("currentUser", null);
      }
    },
    clearStorage: {
      reducer() {
        // Clear the local storage when needed
        localStorage.clear();
      },
    },
    register: (state, action) => {
      const { name, email, password } = action.payload;
      const newUser = {
        userId: nanoid(),
        name,
        email,
        password,
        isLoggedIn: false,
        admin : false,
      };
      state.register.push(newUser);
      // Save the updated state to local storage
      saveToLocalStorage("register", state.register);
    },
  },
});

// Other selectors and actions...
export const {login , logout, register, clearStorage } = registerSlice.actions;
export default registerSlice.reducer;

export const selectAllUser = (state) => state.register.register;
export const selectIsLoggedIn = (state) => {
    if(state.register){
        return state.register.currentUser;
    }else{
        return ''
    }
}
