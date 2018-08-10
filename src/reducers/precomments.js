export default function(state = [], action) {
    switch (action.type) {
        case 'NO_COMMENTS':
            // adds action.payload to state (concatenate)
            return [...state, action.payload];
        default:
            return state;
    }
}