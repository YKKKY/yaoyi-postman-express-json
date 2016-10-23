module.exports = (state = {viewFlag: ''}, action) => {
    switch (action.type) {
        case "CHANGE_VIEW":
            return {
                viewFlag: action.text
            };
        default:
            return state;
    }
};