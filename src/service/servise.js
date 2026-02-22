import axios from "axios";

const Url = "http://localhost:3000/contacts";

export const getAllContact = ()=>{
    return axios.get(Url)
}
export const getContact = (id)=>{
 const url = `${Url}/${id}`
 return axios.get(url)
}
export const createContact = (contact)=>{
    return axios.post(Url,contact,{
        headers:{
            'Content-Type':"multipart/form-data"
        }
    });
}
export const updateContact = (contact,id)=>{
    const url = `${Url}/${id}`
    return axios.put(url,contact,{
        headers:{
            'Content-Type':"multipart/form-data"
        }
    })
}
export const deleteContact = (id)=>{
    const url = `${Url}/${id}`
    return axios.delete(url)
}
