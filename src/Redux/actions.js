import axios from 'axios';
import { GET_CITIES, GET_PROVINCE, SEARCH_RESULTS, USER_LOGIN, GET_TERMINAL, GET_ALL_RUTES, DELETE_RUTE} from './action-types'

export const searchResults = (data) => {
    return {
        type: SEARCH_RESULTS,
        payload: data
    }
}
export const createRoute = (formData) => async () => {
    console.log('REDUX', formData);
    try {
        const response = await axios.post('http://localhost:3001/rutas', formData);
        console.log('Registro exitoso:', response.data);
    } catch (error) {
        console.error('Error en el registro:', error);
    }
};
export const deleteRute = (idRutes) => async () => {
    try {
        const response = await axios.post('http://localhost:3001/rutas/delete', idRutes);
        console.log(response);
    } catch (error) {
        console.error('Error en el borrado:', error);
    }
};
export const getAllRutes = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get('http://localhost:3001/rutas/getAll');
            dispatch({
                type: GET_ALL_RUTES,
                payload: data.data
            })
        } catch (error) {
            console.error(error);
        }
    }
};

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

export const userRegister = (formData) => async () => {
    try {
        const response = await axios.post('http://localhost:3001/usuarios', formData);
        console.log('Registro exitoso:', response.data);
    } catch (error) {
        console.error('Error en el registro:', error);
    }
};

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
export const getTerminales = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get('http://localhost:3001/terminal/get');
            dispatch({
                type: GET_TERMINAL,
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