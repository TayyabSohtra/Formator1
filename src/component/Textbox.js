import React from 'react'
import { useState } from 'react'

export default function Textbox(props) {
    const handleupclick = () =>{
        console.log("button is clicked"+text)
        let newtext=text.toUpperCase()
        settext(newtext)
        props.showalerts("Text are converted into Upper Case ","success")
        document.title="Text Formator-UpperCase"
    }
    const handleLoclick = () =>{
        console.log("button is clicked"+text)
        let newtext=text.toLowerCase()
        settext(newtext)
        props.showalerts("Text are converted into Lower Case ","success")
        document.title="Text Formator-LowerCase"


    }
    const handleronchnage=(event)=>{
        console.log("on change")
        settext(event.target.value)
        

    }
    const handleclclick=(event)=>{
      let newtext = '';
      settext(newtext)
      props.showalerts("Text Area are Cleared","success")
      document.title="Text Formator-Clear"


    }
    const handlecopy=(event)=>{
      var text = document.getElementById('textbox')
      text.select();
      navigator.clipboard.writeText(text.value)
      props.showalerts("Text are copied to Past other side ","success")
      document.title="Text Formator-Copy"


    }
    const handleextraspace=()=>{
      // let newtext=text.replace(/\s+/g, ' ').trim()
      // settext(newtext)
      let newtext=text.split(/[ ]+/)
      settext(newtext.join(" "))
      props.showalerts("Extra Space are removed from this Text ","success")
      document.title="Text Formator-Remove Space"


    }
    
    const countwords = (text)=>{
      return text.split(' ').filter(function(num){
        return num!=''
      }).length
    }
    const [text,settext] = useState(" ")
  return (
    <>
    <div class="container">
        <h1 style={{fontSize:'25pt'}}>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="textbox" rows="8" value={text} onChange={handleronchnage} style={{backgroundColor:props.Mode ==='dark'?'white':'grey',color:props.Mode==='dark'?'black':'white'}}></textarea>
        <button className="btn btn-outline-primary" onClick={handleupclick}>Convert into UpperCase</button>
        <button className="btn btn-outline-primary mx-1 my-1" onClick={handleLoclick}>Convert into LowerCase</button>
        <button className="btn btn-outline-primary mx-1 my-1" onClick={handleclclick}>Clear Text</button>
        <button className="btn btn-outline-primary mx-1 my-1" onClick={handlecopy}>Copy Text</button>
        <button className="btn btn-outline-primary mx-1 my-1" onClick={handleextraspace}>Remove Extra space</button>
        {/* <button className="btn btn-outline-primary mx-1 my-2" onClick={handlecapitalizeclick}>Capitalize the Text</button> */}
        </div>
    </div>
    <div className="container my-3">
      <h2>Text Summary</h2>
      {/* this line of code is used to count and display the words and letter in text are
      a */}
      <p>{countwords(text)} <b>Words</b> {text.length} <b>Letters</b></p>
      <p>{0.008*text.split(" ").length} <b>Minuts to Read</b></p>
      <h2>Preview</h2>
      <p>{text.length > 1 ? text : " Nothing to Preview " } </p>
    </div>
    </>
  )
}
