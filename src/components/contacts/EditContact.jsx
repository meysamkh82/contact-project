import { useEffect,useContext } from 'react';
import { useParams } from 'react-router-dom';

import {Formik,Form,Field,ErrorMessage} from 'formik'

import {Player} from '@lottiefiles/react-lottie-player';
import animation from '../../../public/img/Digital.json';
import { ContactContext } from '../../context/ContactContext'; 
import {contactSchema} from '../../validation/contactSchemaYup'
import Loading from '../Loading';


const EditContact = ()=>{
    const {loading,fetchGetOneContact,updateContactForm,contactEdit} = useContext(ContactContext);

    const {id} = useParams() 

    useEffect(()=>{
       fetchGetOneContact(id)  //درخواست به سرور
        // getContactEditInfo() // روش سریعتر و بدون درخواست به سرور
    },[])
   
    // const getContactEditInfo=()=>{
    //     setLoading(true)
    //     const findContact = contacts.find((c)=> c.id === parseInt(id))
    //     setContactEdit(findContact);
    //     setLoading(false)
        
    // }

return(
    <>
        <div className="container">
            <div className="row">
                <div className="col text-center my-5">
                     <h1  className='bg-light rounded-5 py-2'>Edit Contact</h1>
                </div>
            </div>
            {loading ? <Loading />:
            <div className="row">
                <div className="col-12 col-lg-6">
                     <Formik
                        initialValues={{
                            name:contactEdit.name,
                            phone:contactEdit.phone,
                            email:contactEdit.email,
                            job:contactEdit.job === null ? '': contactEdit.job,
                            nationalId:contactEdit.nationalId === null ? '' : contactEdit.nationalId,
                            imageName:contactEdit.imageName,
                        }}
                        validationSchema={contactSchema}
                        onSubmit={(values)=>updateContactForm(values,id)}
                        >
                        {({setFieldValue,isValid,dirty})=>( //setFieldvalue baray ersal input hay type="file" estefade mishe
                        //isValid age tamam input ha validation okay bashad isValid = true vagarna isValid = false
                        //dirty age taghri dar yek input etefagh beyoftad dirty = true vagarna dirty = false
                            <Form >
                                <div className="my-2">
                                    <Field type="text"
                                    name="name"
                                    className="form-control form-control-lg bg-dark text-white  border-0" 
                                    placeholder="Name"/>
                                    <ErrorMessage name="name" component={'div'} className='text-danger mt-1'/>
                                </div>
                                <div className="my-2">
                                    <Field type="number"
                                    name='phone'
                                    className="form-control form-control-lg bg-dark  text-white border-0" 
                                    placeholder="Phone"/>
                                    <ErrorMessage name='phone' component='div' className='text-danger mt-1'/>
                                </div>
                                <div className="my-2">
                                    <Field type="email"
                                    name='email'
                                    className="form-control form-control-lg bg-dark  text-white border-0" 
                                    placeholder="Email"/>
                                    <ErrorMessage name='email' component='div' className='text-danger mt-1'/>
                                </div>
                                <div className="my-2">
                                    <Field type="text"
                                    name='job'
                                    className="form-control form-control-lg bg-dark  text-white border-0" 
                                    placeholder="Job"/>
                                    <ErrorMessage name='job' component='div' className='text-danger mt-1'/>

                                </div>
                                <div className="my-2">
                                    <Field type="number"
                                    name='nationalId' 
                                    className="form-control form-control-lg bg-dark  text-white border-0" 
                                    placeholder="National ID"/>
                                    <ErrorMessage name='nationalId' component='div' className='text-danger mt-1'/>
                                </div>
                                <div className="my-2">
                                     <label for="formFile" className="form-label text-secondary">Uplaod Image</label>
                                    <img
                                    //  src={`http://localhost:3000/uploads/${contactEdit.imageName}`} 
                                     src={`https://meysamonline.ir/server-contact/uploads/${contactEdit.imageName}`} 
                                    alt="" className='m-2 mb-0' style={{width:'80px',height:'80px'}}/>
                                    <input type="file"
                                    onChange={(event)=>setFieldValue('imageName',event.currentTarget.files[0])}
                                    name='imageName'
                                    className="form-control bg-dark text-white border-0" id="formFile"/>
                                    <ErrorMessage name='imageName' component='div' className='text-danger mt-1'/>
                                </div>
                                <div className="my-4">
                                    <button type="submit" className="btn btn-lg btn-light w-100" disabled={!dirty || !isValid}>Create Contact</button>
                                </div>
                            </Form>
                        )}                
                        </Formik>
                </div>
                <div className="col-lg-6">
                    <div className="w-100">
                            <Player className='w-100' style={{marginTop:'-50px'}} src={animation} loop autoplay />
                    </div>
                </div>
            </div> }
            
        </div>
    </>
)
}

export default EditContact;