import axios from 'axios';
import { GET_BUSES, GET_CITIES, GET_PROVINCE, SEARCH_RESULTS, USER_LOGIN } from './action-types'

export const userLogin = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get('http://localhost:3001/auth/perfil')
            console.log('user', data.user);
            dispatch({
                type: USER_LOGIN,
                payload: data
            })
        } catch (error) {
            console.error(error);
        }
    }
}

export const getCities = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get('http://localhost:3001/ciudades/get_cities');
            dispatch({
                type: GET_CITIES,
                payload: data,
            })
        } catch (error) {
            console.error(error);
        }
    }
}

export const getProvince = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get('http://localhost:3001/provincias/get_province');
            dispatch({
                type: GET_PROVINCE,
                payload: data,
            })
        } catch (error) {
            console.error(error);
        }
    }
}

export const getBuses = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get('http://localhost:3001/buses/get_buses')
            dispatch({
                type: GET_BUSES,
                payload: data,
            })
        } catch (error) {
            console.error(error);
        }
    }
}