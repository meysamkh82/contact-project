import {useState,useEffect,useContext} from 'react';
import { useNavigate,useParams } from 'react-router-dom';


import {Player} from '@lottiefiles/react-lottie-player';
import animation from '../../../public/img/Presentation.json';
import { ContactContext } from '../../context/ContactContext'; 

import Loading from '../Loading';
const ViewContact = ()=>{
    // const [viewContact,setViewContact] = useState({})
    const {loading,contacts,fetchGetOneContact,viewContact,setViewContact} = useContext(ContactContext);
    const {id} = useParams();
    // const navigate = useNavigate()
    useEffect(()=>{
        getContactById()  // روش سریع بدون درخواست به سرور
     
        // fetchGetOneContact(id) // روش درخواست به سرور و گرفتن کاربر از سرور
    },[])


    const getContactById =()=>{

        const res = contacts.find((contact)=>{
            return contact.id === parseInt(id)
        })
        if(res){
            console.log(res)
            return setViewContact(res)
        }
        alert('Not found User')
        navigate('/')
    }
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col text-center my-5">
                     <h1  className='bg-light rounded-5 py-2'>View Contact</h1>
                </div>
            </div>
            {loading ? <Loading /> :
                <div className="row">
                <div className="col-12 col-lg-6">
                    <ul className="list-group ">
                        <div className='row m-0 ' > 
                            <li className="list-group-item  border-0  py-2 my-1  list-group-item-custom  col-12 col-lg-4 "  >
                                <div className='d-flex justify-content-center'>
                                    <img src={`http://localhost:3000/uploads/${viewContact.imageName}`} alt="" className='img-fluid' style={{maxHeight:"200px"}} />
                                </div>
                            </li>
                            <div className=' col-12 col-lg-8 pe-0  d-flex flex-column justify-content-around' >
                                <li className="list-group-item list-group-item-custom border-0 py-3 my-1" >
                                    <span className="view-contact-field  text-secondary"><i className='fa fa-user'></i> Name: </span>
                                    <span className='view-contact-value text-white mx-1'>{viewContact.name}</span>
                                </li>
                                <li className="list-group-item list-group-item-custom border-0  py-3 my-1" >
                                    <span className="view-contact-field  text-secondary"><i className='fa fa-phone'></i> Phone: </span>
                                    <span className='view-contact-value text-white mx-1'>{viewContact.phone}</span>
                                </li>
                                 <li className="list-group-item list-group-item-custom border-0  py-3 my-1" >
                                    <span className="view-contact-field  text-secondary"><i class="fa fa-briefcase"></i> Job: </span>
                                    <span className='view-contact-value text-white mx-3'>{viewContact.job}</span>
                                </li>
                            </div>
                        </div>
                        <li className="list-group-item list-group-item-custom border-0  py-3 my-1" >
                                <span className="view-contact-field  text-secondary"><i className='fa fa-envelope'></i> Email: </span>
                                <span className='view-contact-value text-white mx-1'>{viewContact.email}</span>
                            </li>
                       
                        <li className="list-group-item list-group-item-custom border-0  py-3 my-1" >
                            <span className="view-contact-field  text-secondary"><i class="fa fa-id-card-o"></i> NationalId: </span>
                            <span className='view-contact-value text-white mx-3'>{viewContact.nationalId}</span>
                        </li>
                        <li className="list-group-item list-group-item-custom border-0  py-3 my-1" >
                            <span className="view-contact-field  text-secondary"><i class="fa fa-calendar"></i> Age: </span>
                            <span className='view-contact-value text-white mx-3'>{viewContact.age && ''}</span>
                        </li>        
                    </ul>
                 
                </div>
                <div className="col-lg-6">
                    <div className="">
                            <Player style={{width:"90%"}} src={animation} loop autoplay/>
                    </div>
                </div>
            </div>
            }
            
        </div>
        </>
    )
}

export default ViewContact;