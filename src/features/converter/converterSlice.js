import {createSlice} from "@reduxjs/toolkit";

function convertToDec(binary) {
    let result = 0;
    let pos = 0;
    for (let i = binary.length - 1; i >= 0; i--, pos++) {
        const binDigit = parseInt(binary.charAt(i));
        const tmp = binDigit * 2 ** pos;
        result += tmp;
    }
    return result;
}

function canConvert(userInput) {
    return userInput.search(/[^01]/) === -1;
}

export const converterSlice = createSlice({
    name: 'converter',
    initialState: {
        userInput: '',
        decimal: 0,
        error: false,
    },
    reducers: {
        setUserInput: (state, action) => {
            state.userInput = action.payload;
            if (canConvert(state.userInput)) {
                state.decimal = convertToDec(state.userInput);
                state.error = false;
            } else {
                state.error = true;
            }
        },
    },
});

export const {setUserInput} = converterSlice.actions;

export const selectDecimal = state => state.converter.decimal;
export const selectError = state => state.converter.error;

export default converterSlice.reducer;