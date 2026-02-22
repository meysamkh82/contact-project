import { useContext } from 'react';

import { Formik,Form,Field,ErrorMessage } from 'formik';

import {Player} from '@lottiefiles/react-lottie-player';
import animation from '../../../public/img/contact.json'; //file lottie json hast baray ax
import { ContactContext } from '../../context/ContactContext';
import {contactSchema} from '../../validation/contactSchemaYup'
const AddContact = (props)=>{
    const {createContactForm} = useContext(ContactContext)
    return(
<div className="container">
            <div className="row">
                <div className="col text-center my-5">
                     <h1  className='bg-light rounded-5 py-2'>Add Contact</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-lg-6">
                    <Formik
                    initialValues={{
                        name:'',
                        phone:'',
                        email:'',
                        job:'',
                        nationalId:'',
                        imageName:'',
                    }}
                    validationSchema={contactSchema}
                    onSubmit={(values)=>createContactForm(values)}
                    >
                    {({setFieldValue})=>(
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
                                <input type="file"
                                onChange={(event)=>setFieldValue('imageName',event.currentTarget.files[0])}
                                name='imageName'
                                className="form-control bg-dark text-white border-0" id="formFile"/>
                                <ErrorMessage name='imageName' component='div' className='text-danger mt-1'/>
                            </div>
                            <div className="my-4">
                                <button type="submit" className="btn btn-lg btn-light w-100" >Create Contact</button>
                            </div>
                        </Form>
                    )}
                    
                    </Formik>
                </div>
                <div className="col-lg-6">
                    <div className="">
                            <Player className='w-100'  src={animation}  autoplay loop={true} keepLastFrame={true} />
                    </div>
                </div>
            </div>
        </div>
    )
       
}

export default AddContact;