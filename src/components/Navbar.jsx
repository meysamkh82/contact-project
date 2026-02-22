import { Link,useLocation} from "react-router-dom";
import Search from "./Search";


const Navbar = ()=>{
    const location = useLocation()
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-sm py-2 px-3 shadow-lg ">
            <div className="container mx-0">
                <div className="row w-100">
                    <div className="col d-flex">
                         <Link to="/" className="navbar-brand">
                            <i className="fa fa-address-book"></i>  My Contact 
                        </Link>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to={"/contacts/add"} className="nav-link"><i className="fa fa-user-plus"></i> AddContact</Link>
                                </li>
                            </ul>
                    </div>
                    <div className="col">
                       
                        {location.pathname === '/contacts' ?  <Search />:null}

                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;