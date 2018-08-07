const defaultReducer = (state = [], action) =>{
    switch (action.type) {
        case 'INCREMENT':
            return parseInt(state + 1);
        case 'DECREMENT':
            return parseInt(state - 1);
        default:
            return state;
    }
}
export default defaultReducer; 