
import './UserInfo.css'
import UserDetailModel from '../UserDetailModel/UserDetailModel'
import { useState } from 'react'

const UserInfo = (props) => {
// console.log(props)

const [modelOpened,setModelOpened]=useState(false);
  return (
    <div className='UserInfo'>

       

      <table className='Table'>
        <tr className='Table-row'>
          <td className="username">{props.data.name}</td>
          <td className="contact-name">
            <span style={{fontWeight:'bold', fontSize:'1.3rem'}}>Contact</span>
            <span  style={{fontWeight:'400',fontSize:'1.2rem', flex:'1', color:'var(--darkGrey)'}}>{props.data.username}</span>
          </td>
          <td className="city contact-name">
            <span style={{fontWeight:'bold', fontSize:'1.3rem'}}>Address</span>
            <span style={{fontWeight:'400',fontSize:'1.2rem', flex:'1', color:'var(--darkGrey)'}}>{props.data.address.street}</span>
          </td>
          <td className="State contact-name">
            <span style={{fontWeight:'bold', fontSize:'1.3rem'}}>State</span>
            <span style={{fontWeight:'400',fontSize:'1.2rem', flex:'1', color:'var(--darkGrey)'}}>{props.data.address.city}</span>
          </td>
          <td>
            <button className='btn n-button button' onClick={()=>setModelOpened(true)}>View Details</button>
            <UserDetailModel modelOpened={modelOpened} setModelOpened={setModelOpened} data={props}/>
          </td>
        </tr>
      </table>




      {/* <div className="username">
        {props.data.name}
      </div>
      <div className="contact-name">
        <span style={{fontWeight:'bold', fontSize:'1.3rem'}}>Contact</span>
        <span style={{fontWeight:'400',fontSize:'1.2rem', flex:'1', color:'var(--darkGrey)'}}>{props.data.username}</span>
      </div>
      <div className="city contact-name">
        <span style={{fontWeight:'bold', fontSize:'1.3rem'}}>Address</span>
        <span style={{fontWeight:'400',fontSize:'1.2rem', flex:'1', color:'var(--darkGrey)'}}>{props.data.address.street}</span>
      </div>
      <div className="State contact-name">
        <span style={{fontWeight:'bold', fontSize:'1.3rem'}}>State</span>
        <span style={{fontWeight:'400',fontSize:'1.2rem', flex:'1', color:'var(--darkGrey)'}}>{props.data.address.city}</span>
      </div>
      <div className="button">
        <button className='btn n-button button'>View Details</button>
      </div> */}
    </div>
  )
}

export default UserInfo
