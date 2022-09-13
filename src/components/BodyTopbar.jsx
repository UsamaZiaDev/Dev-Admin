import SearchBar from "./SearchBar"
import PersonImg from "../assets/Images/person.png"
import { BsBellFill } from 'react-icons/bs';
import { FaEnvelope } from 'react-icons/fa';



const BodyTopbar = () => {
  return (
    <>
    <div className="topbar-wrapper d-flex justify-content-between bg-white px-4 py-3 shadow">
        <div className="search-wrapper w-25">
            <SearchBar/>
        </div>
        <div className="topbar-right-wrapper d-flex align-items-center">
            <div className="notification-wrapper d-flex align-items-center">
                <div className="bell icon-wrapper" current_counter='3+'>
                  <BsBellFill className=" me-4 fs-5" />
                </div>
                <div className="envelope icon-wrapper" current_counter='7'>
                  <FaEnvelope className="me-4 ms-2 text-gray fs-5"/>
                </div>
            </div>
            <div className="user_profile_wrapper d-flex align-items-center border-start ps-3">
              <h6 className="user_name me-2 pt-1 fw-light">
              Douglas McGee
              </h6>
              <div className="user_img_wrapper">
                <img src={PersonImg} width='35px'/>
              </div>
            </div>
        </div>
    </div>
        
    
    
    
    
    
    </>
  )
}

export default BodyTopbar