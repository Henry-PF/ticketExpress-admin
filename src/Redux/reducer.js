import { GET_CITIES, GET_PROVINCE, SEARCH_RESULTS, USER_LOGIN, USER_REGISTER, GET_TERMINAL, GET_ALL_RUTES} from './action-types'

const initialState = {
    data: [],
    cities: [],
    province: [],
    buses: [],
    userGoogle: {},
    terminales: [],
};
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_RESULTS:
            const { origin, destination, departureDate } = action.payload;
            const filter = state.trips.filter((trip) => {
                return trip.origin.toLowerCase() === origin.toLowerCase() && trip.destination.toLowerCase() === destination.toLowerCase() && trip.departureDate.toLowerCase() === departureDate.toLowerCase();
            });

            return {
                ...state,
                data: filter,
            };
        case USER_LOGIN:
            return {
                ...state,
                userGoogle: action.payload,
            }
        case GET_CITIES:
            return {
                ...state,
                cities: action.payload,
            }
        case GET_TERMINAL:
            return {
                ...state,
                terminales: action.payload,
            }
        case GET_ALL_RUTES:
            return {
                ...state,
                trips: action.payload,
            }
        case GET_PROVINCE:
            return {
                ...state,
                province: action.payload,
            }
        case GET_BUSES:
            return {
                ...state,
                buses: action.payload,
            }
        default:
            return state;
    }
};

export default rootReducer;