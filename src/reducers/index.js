const initialState = {
    apiUrl: 'https://maps.googleapis.com/maps/api/streetview?size=400x600&fov=90&heading=200&pitch10',
    apiKey: '',
    round: 0,
    score: 0,
    locations: [
        { coordinates: '57.704509,11.962912', street: 'Kyrkogatan' },
        { coordinates: '57.704779,11.963998', street: 'Kyrkogatan' },
        { coordinates: '57.705244,11.968124', street: 'Kyrkogatan' },
        { coordinates: '57.705625,11.970334', street: 'Kyrkogatan' },
        { coordinates: '57.704295,11.961901', street: 'Kyrkogatan' },
        { coordinates: '57.704410,11.962481', street: 'Kyrkogatan' },
        { coordinates: '57.704500,11.963055', street: 'Kyrkogatan' },
        { coordinates: '57.704731,11.964640', street: 'Kyrkogatan' },
        { coordinates: '57.705232,11.967939', street: 'Kyrkogatan' },
        { coordinates: '57.705542,11.969753', street: 'Kyrkogatan' },
        { coordinates: '57.705768,11.971188', street: 'Kyrkogatan' },
        { coordinates: '57.704775,11.961603', street: 'Drottninggatan' },
        { coordinates: '57.705234,11.964348', street: 'Drottninggatan' },
        { coordinates: '57.705415,11.965545', street: 'Drottninggatan' },
        { coordinates: '57.705541,11.966269', street: 'Drottninggatan' },
        { coordinates: '57.705715,11.967358', street: 'Drottninggatan' },
        { coordinates: '57.705822,11.968082', street: 'Drottninggatan' },
        { coordinates: '57.705945,11.968994', street: 'Drottninggatan' },
        { coordinates: '57.706100,11.969965', street: 'Drottninggatan' },
        { coordinates: '57.706223,11.970737', street: 'Drottninggatan' },
        { coordinates: '57.706389,11.971751', street: 'Drottninggatan' },
        { coordinates: '57.706504,11.972443', street: 'Drottninggatan' },
        { coordinates: '57.706635,11.973441', street: 'Drottninggatan' }
    ],
    currentLocation: ''
}

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_API_URL':
            const apiKey = action.apiKey;

            return { ...state, apiKey: apiKey };
        case 'START_GAME':
            console.log('reducer: start game');
            return {
                ...state,
                round: state.round + 1,
                currentLocation: state.locations[Math.floor(Math.random() * state.locations.length)]
            };
        case 'ADVANCE_GAME':
            let score = state.score;
            let newLocation;
            
            if (action.answer === state.currentLocation.street) {
                score += 1
            }

            return { 
                ...state, 
                score: score, 
                round: state.round + 1, 
                currentLocation: state.locations[Math.floor(Math.random() * state.locations.length)]
            }
        case 'INCREMENT_SCORE':
            return { ...state, score: score + 1 }
        case 'REMOVE_LOCATION':
            return {
                ...state,
                locations: [
                    ...state.locations
                        .slice(0, action.index)
                        .concat(state.locations.slice(action.index + 1))
                ]
            }
        default:
            return state;
    }
}

export default reducers;
