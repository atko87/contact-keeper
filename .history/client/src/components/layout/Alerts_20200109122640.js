import React, { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";

export const Alerts = () => {
  const alertContext = useContext(AlertContext);
  return (
      alertContext.alert.lenght>0 && alertContext.alert.map(alert=>(<div key={alert.id}className={`alert alert=${alert.type}`}>
      <i className='fas fa-info-circle'/>{alert.msg}    
      </div>))
  )

export default Alerts
