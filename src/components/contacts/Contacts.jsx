import { useContext } from 'react';
import {useNavigate} from 'react-router-dom'
import {Contact} from '../index'

import Loading from '../Loading';
import { ContactContext } from '../../context/ContactContext';

const Contacts = ()=>{
    const {handleDeleteContact,filterContact,loading} = useContext(ContactContext)

    const navigate = useNavigate()
    return(
        <>
            <div className="container my-5">
                <div className="row w-100">
                    <div className="col text-center">
                        {/* <button className="btn btn-success w-50 " onClick={()=>navigate('/contacts/add')}><i className="fa fa-user-plus"></i> Add Contact</button> */}
                        <h1 className='bg-title-me  py-2 text-white border-bottom'>Contacts</h1>
                    </div>
                </div>
                <div className="row w-100 my-5">

                    {loading ? <Loading/> 
                    :filterContact.length > 0 ? filterContact.map((contact)=>{
                      return  <Contact key={contact.id} contact={contact} handleDeleteContact={handleDeleteContact}/>
                    })
                : <div className='text-center my-5'>
                    <h1 className='text-secondary bg-dark p-5 rounded shadow-lg'>
                         There are no Contacts to show <i className="fa fa-frown-o mx-2" aria-hidden="true"></i></h1>
                </div>
                }
                    
                </div>
            </div>

        </>

    )
}

export default Contacts;