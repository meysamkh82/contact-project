import {Player} from '@lottiefiles/react-lottie-player';
import animation from '../../public/img/notfound.json';

const NotFound = ()=>{
    return(


        <div className="container">
            <div className="row">
                <div className="col d-flex align-items-center justify-content-center flex-column" style={{minHeight:'90vh'}}>
                    <Player src={animation} autoplay loop />
                    <h1 className="text-center my-5 shadow-lg text-white" style={{fontSize:"5rem"}}>Not Found Page</h1>
                </div>
            </div>

        </div>
    )
}

export default NotFound;