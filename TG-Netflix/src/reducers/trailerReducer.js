export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_TRAILER':
            return action.payload;
        default:
            return state;
    }
};