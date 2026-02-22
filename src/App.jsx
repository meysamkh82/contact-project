import { useEffect, useState } from 'react'
import {Routes,Route,Link,Navigate,useNavigate} from 'react-router-dom'

import _ from 'lodash';
import {Toaster,toast} from 'sonner'
import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css';

import {AddContact,Contacts,ViewContact,EditContact} from './components';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
 
import {getAllContact, createContact, deleteContact ,getContact,updateContact} from './service/servise'
import {ContactContext} from './context/ContactContext';
import confirmDelete from './assets/confirmDelete';

function App() {
  const [contacts,setContacts] = useState([]);
  const [loading,setLoading] = useState(false);
  const [filterContact,setFilterContact] = useState([]);
  const [contactEdit,setContactEdit] = useState({})
  const [viewContact,setViewContact] = useState({});

const navigate = useNavigate()
// const onFileChange = (e)=>{
//   setFileImage(e.target.files[0]);
// }
// const onContactInfo = (e)=>{
//   setContact({
//     ...contact,
//     [e.target.name]:e.target.value
//   })

// }
useEffect(()=>{
  const fetch = async ()=>{
    try{
      setLoading(true)
       const {data} = await getAllContact();
      setFilterContact(data.data)
      setContacts(data.data)
      setLoading(false)
    }catch(err){
      setLoading(false)
      console.log(err)
    }
   
  }
  fetch()
},[])

const fetchGetOneContact = async (contactId)=>{
     try{
        setLoading(true)
         let response = await getContact(contactId);
         console.log(response)
         if(response.status===200){
         console.log("getContact successfully",response.data.data)
          setViewContact(response.data.data)
          setContactEdit(response.data.data)
          setLoading(false)
         }
     }
     catch(e){
         console.log(e)
        setLoading(false)
     }
 }

const createContactForm = async(values)=>{
  const formData = new FormData()

  Object.entries(values).forEach(([key, value]) => { // entries : {name:'ali',age:18} = [["name","ali"],["age",18]] 
    if(key !== 'imageName')
     formData.append(key, value);
  });
  if(values.imageName){
    formData.append('image',values.imageName)
  }
  try{
    const {status,data} = await createContact(formData);
    if(status === 201){
      setContacts([...contacts,data.data])
      setFilterContact([...contacts,data.data])
      console.log(status +" Create Contact Successfully")
      toast.success("Contact Create Successfully🎈")
      navigate('/')
    }
  }catch(e){
    console.log("Error Axios : ",e)
    toast.error(e.response.data.error.message)
  }
}

const updateContactForm = async(values,id)=>{

      console.log(id,values)
    
      const formData = new FormData()
    
      Object.entries(values).forEach(([key, value]) => { // entries : {name:'ali',age:18} = [["name","age"],["age",18]] 
        key === 'imageName' ? null : formData.append(key, value);
      });
      
      if(values.imageName){
        formData.append('image',values.imageName)
      }
      try{
        const {data,status} = await updateContact(formData,id);
        
        if(status === 200){
          console.log(data.data)
          const contactIndex = contacts.findIndex(c => c.id === parseInt(id));
          let allContacts = [...contacts];
          allContacts[contactIndex] = {...data.data}
          setContacts(allContacts)
          setFilterContact(allContacts)
          console.log(status +" Update contact Successfully")
        toast.success('Update Contact Successfully 👍')

          navigate('/')
        }
      }catch(e){
        console.log("Error Axios : ",e)
        toast.error(e.response.data.error.message)
      }
    }

const handleDeleteContact = async (id)=>{
  let res = await confirmDelete({contactName:contacts.find((c)=>c.id === id).name})
  if(res){
    try{
      const response = await deleteContact(id);
      if(response.status === 200){
        console.log('contact '+id+' is delete')
        let allContact = contacts.filter((c)=>c.id !== id)
        setContacts(allContact)
        setFilterContact(allContact)
        toast.success('Contact Deleted Successfully 💥')
      }
    }catch(e){
      console.log(e)
      toast.error('contact delete is Error')
    }
  }
}

 
// let searchTimeout;

const handleSearchContact = _.debounce((searchValue)=>{
  // clearTimeout(searchTimeout)
//  searchTimeout = setTimeout(()=>{
  console.log('search : ',searchValue)

  setFilterContact(
     contacts.filter((c)=>{
    return c.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
  }))
//  },1000)
  setLoading(false)
},1000)
  return(
    <ContactContext value={{
      setContacts,
      contacts,
      setContactEdit,
      contactEdit,
      setLoading,
      loading,
      filterContact,
      createContactForm,
      search:handleSearchContact,
      handleDeleteContact,
      fetchGetOneContact,
      viewContact,
      setViewContact,
      updateContactForm
    }}>
    <div className='App'>
      <Navbar />
      <Toaster richColors={true} position='bottom-right' duration={4000} closeButton={true} /> 
      <Routes>
        <Route path='/' element={<Navigate to="/contacts"/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='/contacts/add' element={<AddContact />}/>
        <Route path='/contacts/:id' element={<ViewContact />}/>
        <Route path='/Contacts/edit/:id' element={<EditContact/>}/>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>   
    </ContactContext>
  )
}

export default App
