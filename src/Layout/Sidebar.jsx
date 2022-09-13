import { NavLink } from "react-router-dom"
import { TbAbacus } from "react-icons/tb";
import { AiFillDashboard, AiOutlineAreaChart, AiOutlineTable} from "react-icons/ai";
import { MdPages, MdSettings,MdOutlineArrowBackIos } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import BodyTopbar from "../components/BodyTopbar";
import Rocket from "../assets/Images/rocket.png"


const Sidebar = ({children}) => {
  
  const SidebarRoutes = [
    {
      path: 'Home',
      name: 'Dashboard',
      icon: <AiFillDashboard/>,
      subMenu:[]
    },
    
    {
      path: 'Components',
      name: 'Components',
      icon: <MdSettings/>,
      subMenu: [
                  'Buttons',
                  'Cards'                
              ]
    },
    {
      path: 'Utilities',
      name: 'Utilities',
      icon: <TbAbacus/>,
      subMenu: [
              'Colors',
              'Borders',
              'Animations',
              'Other'                
          ]
    },
    {
      path: 'Pages',
      name: 'Pages',
      icon: <MdPages/>,
      subMenu: [
        'Login',
        'Register',
        'Forgot Password',
        '404 Page',
        'Blank Page'
      ]
    },
    {
      path: 'Charts',
      name: 'Charts',
      icon: <AiOutlineAreaChart/>,
      subMenu:[]
    },
    {
      path: 'Tables',
      name: 'Tables',
      icon: <AiOutlineTable/>,
      subMenu:[]

    }
    
  ]
  let [himbar, sethimbar] = useState(true)
  let himbar_Toggle = (!himbar)


  let [sidebarLinkToggle, setsidebarLinkToggle] = useState(true)

  let active_sidebar_Toggle = (!sidebarLinkToggle)


  return (
    <>
      <main className='main-container container-fluid d-flex px-0 main-body-dashboard'>

        {/* Sidebar-code-Start */}
        <div className="sidebar-main px-3" style={{width: himbar ? '250px':'110px'}}>

          <div className='sidebar-logo my-4 text-white fs-3 fw-bold text-dark d-flex align-items-center'>
             <GiHamburgerMenu  
                className="me-2 pointer mb-2" 
                onClick={()=>sethimbar(himbar_Toggle)}
                style={{width: himbar ? "auto":"100%"}}
              />
             <h2 className={himbar ? "d-block":"d-none"}>
               Web Dev
             </h2>
          </div>

          {
            // console.warn(SidebarRoutes)
            SidebarRoutes.map((SidebarRoutes, index)=>{
              let {name, path, icon, subMenu} = SidebarRoutes

              return(
                <div key={index} onClick={()=>{setsidebarLinkToggle(active_sidebar_Toggle)}} className="main_link_sidebar">
                  <NavLink to={path} className=' flex-wrap sidebar-link nav-link d-flex text-light align-items-baseline pb-2'
                    style={{flexDirection: himbar? 'row':'column'}}
                  >
                    <div className="icon-wraper pt-2" >
                        {icon}
                    </div>
                    <h6 className="link-nav pt-3 ms-2">
                      {name}
                    </h6>
                      {/* sub-Menu */}    
                      <div className='bg-danger bg-light px-3 py-2 my-2  rounded w-100'
                        style={{display: SidebarRoutes?.subMenu.length > 0 ? 'block': 'none'} }  id='subMenu'  >
                        {  SidebarRoutes?.subMenu?.length > 0  &&  SidebarRoutes.subMenu.map((NavVal, NavValindex)=>{
                          return <p key={NavValindex} className="fw-light text-dark my-2">
                                  {NavVal}
                                </p>
                            })
                          }
                      </div>
                  </NavLink>
                </div>
              )
            })
          }

          <div className="left-arrow-wrapper text-center my-4 opacity-50 bg-light">
            <MdOutlineArrowBackIos/>
          </div>

          <div className="rocket-card-wrapper text-center" style={{display: himbar? "block":"none"}}>
            <div className="rocket_img_wrapper">
              <img src={Rocket} />
            </div>
            <p>
              SB Admin Pro is packed with premium features, components, and more!
            </p>
            <button className="btn btn-sm bg_success text-white">
              Upgrade to Pro!
            </button>
          </div>

        </div>
        {/* // End-Sidebar */}


        {/* Start dashboard body Content*/}
        <section className='main-body-con'>
          <BodyTopbar/>
          <div className="p-4"> 
            <h2>
              {children}  
            </h2> 
          </div>
        </section>
        {/* // End dashboard body Content*/}
      </main>
    </>
  )
}

export default Sidebar