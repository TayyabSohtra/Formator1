import React from 'react'
import { useState } from 'react'

export default function About(props) {
    // const [myStyle,setMyStyle]=useState({
    //     color:'black',
    //     backgroundColor:'white'
    // })
    // let myStyle = ({
    //   color:'white',
    //   backgroundColor:'black'
    // })
    // const toggleStyle = () =>{
    //   if (myStyle.color === 'white'){
    //     setMyStyle({
    //       color:'black',
    //     backgroundColor:'white'
    //     })
    //     setbtnText("Enable Dark Mdoe")
    //   }
    //   else{
    //     setMyStyle({color:'white',
    //     backgroundColor:'black',
    //     border:'1px solid white'
    //   })
    //     setbtnText("Enable Light Mode")
    //   }

    // }
    // const [btnText,setbtnText] = useState("Enable Dark Mode")

    const myStyle = {
      color:props.Mode==='dark'?'white':'black',
      backgroundColor:props.Mode==='dark'?'#151B54':'white',
      // border: '1px solid' ,
      // borderColor:props.Mode==='dark'?'white':'black'

    }
  return (
    <div className="container" style={myStyle}>
    <h1 className='my-3'>About Us</h1>
  <div className="accordion" id="accordionExample" >
<div className="accordion-item" style={myStyle}>
<h2 className="accordion-header" id="headingOne">
  <button className="accordion-button my-2" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
    <b>About Web_App: </b>
  </button>
</h2>
<div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
  <div className="accordion-body">
    <strong>This is my First Web App By React JS</strong> In this we format our text by using different buttons. We also change the color this Web App by single click Which convert into dark Mode and them come back into Lighter Mode.
  </div>
</div>
</div>
<div className="accordion-item" style={myStyle}>
<h2 className="accordion-header" id="headingTwo">
  <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
   <b> About Developer:</b>
  </button>
</h2>
<div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
  <div className="accordion-body">
    <strong>Personal and Education</strong>
    <ul type="circle">
      <li>Full_Name: Tayyab Shaukat Sohtra</li>
      <li>E_mail: Tayyabsohtra@gmail.com</li>
      <li>Mobile_no: 0307*******</li>
      <li>Bacholar: BSSE</li>
      <li>Specility: Front-end Web Development</li>
    </ul>
  </div>
</div>
</div>
<div className="accordion-item" style={myStyle}>
<h2 className="accordion-header" id="headingThree">
  <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" >
    <b>About Contact_us:</b>
  </button>
</h2>
<div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
  <div className="accordion-body">
    <strong>Links:</strong>
    <ul type="circle">
      <li>FaceBook: </li>
      <li>Instagram: </li>
      <li>LinkedIn: </li>
      <li>Replit: </li>
      
    </ul>
  </div>
</div>
</div>
</div>
{/* <div className='container'>
<button className='btn btn-outline-primary my-2 mx-0' onClick={toggleStyle}>{btnText}</button>
</div> */}
</div>
  )
}
