import axios from "axios" 

export const getTasks = () => {
    try {
        return axios.get("http://127.0.0.1:8000/tasks/");
    } catch( error ) {
        console.error();
    }
    
}

export const getTask = (taskId) => {
    try {
        return axios.get(`http://127.0.0.1:8000/tasks/${taskId}/`);
    } catch( error ) {
        console.error();
    }
    
}

export const postTask = (taskData) => {
    try {
        return axios.post("http://127.0.0.1:8000/tasks/", taskData);
    } catch( error ) {
        console.error();
    }
    
}

export const deleteTask = (taskId) => {
    try {
        return axios.delete(`http://127.0.0.1:8000/tasks/${taskId}/`);
    } catch( error ) {
        console.error();
    }
    
}

export const updateTask = (taskId,taskData) => {
    try {
        return axios.put(`http://127.0.0.1:8000/tasks/${taskId}/`, taskData);
    } catch( error ) {
        console.error();
    }
    
}