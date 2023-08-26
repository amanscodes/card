import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Card(props){
  debugger
 let icon= props.price >= 9? `fa-solid fa-check`:`fa-solid fa-xmark`
 let icon1=props.price ==49?`fa-solid fa-check`:`fa-solid fa-xmark`
    return <div style={{
         width:"300px",textAlign:"initial",padding:"20px",backgroundColor:"white",}}>
           <div style={{textAlign:"center"}}><h5>{props.type}</h5>
            <h2>${props.price}/month</h2></div>
            <h5><FontAwesomeIcon icon="fa-solid fa-check" />  {props.user}</h5>
            <h5><FontAwesomeIcon icon="fa-solid fa-check" />  50gb Storage</h5>
            <h5><FontAwesomeIcon icon="fa-solid fa-check" />  Unlimted Public Projects</h5>
            <h5><FontAwesomeIcon icon="fa-solid fa-check" />  Community Access</h5>
            <h5><FontAwesomeIcon icon={icon} /> Unlimted Private Projects</h5>
            <h5><FontAwesomeIcon icon={icon} /> Dedicated Phone Support</h5>
            <h5> <FontAwesomeIcon icon={icon} /> Free Subdomain</h5>
            <h5> <FontAwesomeIcon icon={icon1} /> Monthly Status Reports</h5>
            <button style={{backgroundColor:"rgb(28, 151, 233)",color:"white",width:"300px",height:"40px",textAlign:"center"}}>BUTTON</button>

         </div>
}
export default Card