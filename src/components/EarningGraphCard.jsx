import React from 'react'

const EarningGraphCard = ({graphData}) => {
    const {title, value, icon, color} = graphData
    function cgfun(){
      if(title == 'task'){
        return <div className='task_lin w-100 align-self-end mx-3 rounded bg-secondary overflow-hidden'  style={{height:"8px"}}>
           <div className='w-50 h-100' style={{background: '#36B9CC'}}>

           </div>
        </div>
      }
    }
  return (
    <>
        <div className="earning_card d-flex shadow-sm justify-content-between" 
                                     style={{borderLeftColor: color ? color:"#4E73DF"}}>
            <div className="content"> 
            <h5 className="text-uppercase" style={{color: color? color: '#5A5C69'}}>
              {title}
            </h5>
            <h3>{value}</h3>

            </div>
              {cgfun()}
            <div className="earning-icon-wrapper">
            {icon}
            </div>
        </div>
    </>
  )
}

export default EarningGraphCard