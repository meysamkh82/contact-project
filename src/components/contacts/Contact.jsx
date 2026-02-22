import {Link} from 'react-router-dom';

const Contact = (props)=>{
    const {contact,handleDeleteContact} = props;
return(
    <>
      <div className=" col-md-12 col-lg-6 " style={{marginBottom:"1.5em"}}>
            <div className="card bg-dark shadow-lg ">
                <div className="card-body ">
                    <div className='d-flex justify-content-cetner align-items-center row '>
                        <div className='col-3'>
                             <img 
                            //  src={`http://localhost:3000/uploads/${contact.imageName}`}
                             src={`https://meysamonline.ir/server-contact/uploads/${contact.imageName}`}
                             className='img-fluid border-black rounded-3 w-100 '
                              style={{maxWidth:"130px", height:'130px'}} alt="" />
                        </div>
                         <div className='col-8'>
                             <ul className='list-group' >
                                 <li className='list-group-item bg-dark border-0  ' >
                                    <span className='text-muted-me'><i className='fa fa-user'></i> Name:</span>
                                    <span className='text-white'>{contact.name}</span>
                                 </li>
                                 <li className='list-group-item bg-dark border-0'>
                                    <span className=' text-muted-me'><i className='fa fa-phone'></i> Phone:</span>
                                    <span className='text-white'>{contact.phone}</span>
                                 </li>
                                 <li className='list-group-item bg-dark border-0'>
                                    <span className=' text-muted-me'><i className='fa fa-envelope'></i> Email</span><br /> 
                                    <span className='text-white'>{contact.email}</span>
                                 </li>
                             </ul>
                         </div>
                        <div className='col-1 d-flex flex-column align-items-center justify-content-center'>
                             <Link to={`/contacts/${contact.id}`} className='btn btn-light '><i className='fa fa-eye'></i></Link>
                             <Link to={`/contacts/edit/${contact.id}`} className='btn btn-warning my-2'><i className='fa fa-pencil'></i></Link>
                             <button className='btn btn-danger '  onClick={()=>handleDeleteContact(contact.id)}>
                                <i className='fa fa-trash'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    </>
)
}

export default Contact;