import  {   GET_CONTACT, ADD_CONTACT, EDIT_CONTACT, UPDATE_CONTACT, DEL_CONTACT } from "./type";
import Axios from "../../node_modules/axios";


export const getContact = () => async dispatch => {
    const res = await Axios.get(`https://jsonplaceholder.typicode.com/users`);
    dispatch({
        type: GET_CONTACT,
        payload: res.data
    })
}

export const addContact = dataContact => async dispatch => {
    // ส่งข้อมูลจากเวปเราเป็น Object ชื่อ dataContact // post(ส่ง) ไปเวป Server 
    // แล้วรีเทรินข้อมูลกับมาเป็น Object ชื่อ res.data 
    const res = await Axios.post(`https://jsonplaceholder.typicode.com/users`,dataContact);
    dispatch({
        type: ADD_CONTACT,
        payload: res.data,
    })
}

export const editContact = (id) => async dispatch => {
    const res = await Axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({
        type: EDIT_CONTACT,
        payload:res.id
    })
}

export const updateContact = () => async dispatch => {
    return {
        type: UPDATE_CONTACT
    }
}


export const delContact = id => async dispatch => {
    try {
        const res = await Axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
        dispatch({
            type: DEL_CONTACT,
            // ทำการส่ง id ที่ func DelData / contact.js มาแปลงเป็น object :payload เพื่อส่งไป Reducer.js
            payload: id,
        }) 
    } catch (error) {
        dispatch({
            type: DEL_CONTACT,
            // ทำการส่ง id ที่ func DelData / contact.js มาแปลงเป็น object :payload เพื่อส่งไป Reducer.js
            payload: id,
        })  
    }
}