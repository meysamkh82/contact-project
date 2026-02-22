import { useContext } from "react";

import {ContactContext} from '../context/ContactContext'

const Search = ()=>{
    const {search,setLoading}  = useContext(ContactContext)

    return(
        <>
        <div className="input-group w-100">
         
               <input type="text" className="form-control bg-dark " style={{color:"white"} }
               onChange={(e) => {setLoading(true);search(e.target.value)}}
            placeholder="Search Contact ...."
            />
               <span className="input-group-text">
                <i className="fa fa-search"></i>
            </span>
        </div>
         
        </>
    )
}

export default Search;