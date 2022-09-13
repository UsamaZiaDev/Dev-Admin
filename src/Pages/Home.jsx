import { FaDownload} from "react-icons/fa";
import EarningGraphCard from '../components/EarningGraphCard'
import earningsGraph from '../APIs/EarningGraph'
import {Line, Pie} from 'react-chartjs-2'
import {chart} from 'chart.js/auto'



const Home = () => {

  let lineChartData ={
    labels:['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov'],
      datasets:[
        {
          data:[0, 1000, 800, 1500, 1300, 2000, 1800, 2500, 2200],
          backgroundColor:'#4E73DF',
          borderColor: '#4E73DF'
        }
      ]
  }
  const PieData = {
    type:'pie',
    labels:['Direct','Social','Referral'],
    datasets:[
      {
        data:[700, 300, 200],
        backgroundColor:[
          '#4E73DF',
          '#36B9CC',
          '#1CC88A'
        ]
      }
    ]
    
  };
  return (
    <>  

      {/* title-row-start */}
      <div className="home-title-row d-flex justify-content-between ">
        <h3 className="title-wrapper">
          Dashboard
        </h3>
        <div className="genrate-_report_cta_wrapper">
          <button className="btn bg_primary text-light d-flex align-items-center">
              <FaDownload className="me-2"/>
            Genrate Report
          </button>
        </div>
      </div>
      
      {/* earning stack section start  */}
      <section>
        <div className="row mt-4">
          {
            earningsGraph.map((earningsGraph, index)=>{
              return(
                <div className="col-sm-6 col-md-3" key={index}>
                  <EarningGraphCard graphData={earningsGraph}/>
                </div>
              )    
            })
          }
        </div>
      </section>

      {/* Chart Section Start */}
      <section className="my-5">
        <div className="row">
          <div className="col-lg-8">
            <div className="chart-card card">
              <div className="card-header">
                <h6 className="text-primary pt-1">
                  Earning Overview
                </h6>
              </div>
              <div className="card-body ">
                <Line data={lineChartData} />
              </div>
            </div>
          </div>

          <div className="col-lg-4 mt-4 mt-lg-0">
            <div className="chart-card card">
              <div className="card-header">
                <h6 className="text-primary pt-1">
                Revenue Sources
                </h6>
              </div>
              <div className="card-body pb-5">
                <Pie data={PieData}/>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Home