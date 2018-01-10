export const startGame = () => {
    // todo: add player name
    console.log('START_GAME');
    return {
        type: 'START_GAME'
    }
}

export const advanceGame = (answer) => {
    return {
        type: 'ADVANCE_GAME',
        answer: answer
    }
}

export const incrementScore = () => {
    return {
        type: 'INCREMENT_SCORE'
    }
}

export const decrementScore = () => {
    return {
        type: 'DECREMENT_SCORE'
    }
}

export const loadApiKey = () => {
    return (dispatch) => {
        return fetch('/api', {
            method: 'GET',
            headers: {
                'Content-Type': 'text/plain'
            }
        })
            .then(res => {
                return res.text();
            })
            .then(apiKey => {
                dispatch(updateApiUrl(apiKey));
            })
            .catch(error => {
                throw (error);
            })
    }
}

export const updateApiUrl = (apiKey) => {
    return { type: 'UPDATE_API_URL', apiKey }
}
