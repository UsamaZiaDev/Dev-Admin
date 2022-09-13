import { FaDownload,FaCalendar,FaDollarSign,FaTasks,FaRocketchat } from "react-icons/fa";

let earningsGraph = [
    {
      title: 'Earnings (monthly)',
      value: '$40,000',
      color: '#4E73DF',
      icon: <FaCalendar/>
    },
    {
      title: 'Earnings (annual)',
      value: '$215,000',
      color: '#1CC88A',
      icon: <FaDollarSign/>,
    },
  
    {
      title: 'task',
      value: '50%',
      color: '#36B9CC',
      icon:  <FaTasks/>,
    },
  
    {
      title: 'PENDING REQUESTS',
      value: '18',
      color: '#F6C549',
      icon:  <FaRocketchat/>
    }
  ]

  export default earningsGraph