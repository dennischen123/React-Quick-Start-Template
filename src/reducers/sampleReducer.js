export const sampleReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_SAMPLE':
            return [...state, {
                name: action.sample.name,
                id: action.sample.id
            }];
        case 'REMOVE_SAMPLE':
            return state.filter(sample => sample.name !== action.name);
        default:
            return state;
    }
}