export default (state = [], action) => {
    switch (action.type) {
        case 'PLAY_TIME':
            return action.payload;
        default:
            return state;
    }
};