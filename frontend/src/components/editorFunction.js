import axios from 'axios';

export const register = newEditor =>{
    return axios
    .post('editor/register',{
        firstName:newEditor.firstName,
        lastName:newEditor.lastName,
        email:newEditor.email,
        username:newEditor.username,
        password:newEditor.password
    })
    .then(res=>{
        console.log("Registered");
        window.alert("Registered");
    })
}

export const login = editor =>{
    return axios
    .post('editor/login',{
        email:editor.email,
        password:editor.password
    })
    .then(res=>{
        localStorage.setItem('usertoken',res.data)
        return res.data
    })
    .catch(err=>{
        console.log(err)
    })
}