export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_SHOW':
            return action.payload;
        default:
            return state;
    }
};