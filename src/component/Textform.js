import React,{useState} from 'react'

export default function Textform(props) {

  const handleOnChange = (event)=>{
    // console.log("on Change")
    setText(event.target.value);
   
  }

    const handleUpcase = ()=>{
      // console.log("UpperCase was click")
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Coverted to Uppercase ","primary ")

    }
    const handleLocase = ()=>{
      // console.log("UpperCase was click")
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Coverted to Lowercase ","primary ")

    }
    const handleclearcase = ()=>{
      // console.log("UpperCase was click")
    let newText = '';
    setText(newText);
    props.showAlert("Clear Text Sucessfully " ,"primary ")

    }
    const handlespeak = () => {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
      props.showAlert("Speak Functionally work ","primary ")
    }
    const copyText = () => {
      navigator.clipboard.writeText(text);
      props.showAlert("Copy to Clipboard ","primary ")
}
const handleCapitalize = () => {
  let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
  setText(newText);
  props.showAlert("Capatilized Text Sucessfully ","primary ")
}


    
  
  const [text,setText] = useState("");
  return (
    <>
    <div className='container' style={{color: props.mode ==='dark'?'white':'#000000'}}>
    <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} rows="12" style={{backgroundColor: props.mode ==='dark'?'#000000':'white', color:props.mode==='dark'?'white':'black'}} id="myBox" onChange={handleOnChange}></textarea>
</div>
<button className="btn btn-info mx-2" onClick={handleUpcase}>Convert to Uppercase</button>
<button className="btn btn-info mx-2" onClick={handleLocase}>Convert to Lowercase</button>
<button className="btn btn-info mx-2" onClick={handleclearcase}>Clear</button>
<button className="btn btn-info mx-2" onClick={handlespeak}>Speak</button>
<button className="btn btn-info mx-2" onClick={copyText}>Copy</button>
<button className="btn btn-info mx-2" onClick={handleCapitalize}>Capatilize</button>
    </div>

    <div className="container my-3" style={{color: props.mode ==='dark'?'white':'#000000'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} Word , {text.length} characterr</p>
      <p>{0.008 *text.split(" ").length} Minutes Reads </p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter Something to preview it here"}</p>
    </div>
    
    </>
  )
}
