import React, { useState } from "react";
import copy from "copy-to-clipboard"; 
export default function TextForm(props) {
  
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    // console.log("UpperCase Was Clicked:-"+text);
    setText(newText);
    props.showAlert("Converted into UpperCase","success");
  };
  const handleDownClick=()=>{
      let newText1=text.toLowerCase();
      setText(newText1);
      props.showAlert("Converted into LowerCase","success");
  };

  
  const handleOnChange = (event) => {
    // console.log("onChange");
    setText(event.target.value);
  };
  const handleCopyText=()=>{
    copy(text);
    alert("Your text is copied :-" +text);
  };

  const handleFindChar=()=>{
    const letter = prompt('Enter a letter to check: ');
    let count=0;
    for (let i = 0; i < text.length; i++) {
      if (text.charAt(i) === letter) {
        count += 1;
    }
    console.log(count);
    }
  };

  const handleClearText=()=>{
   let  newtext="";
    setText(newtext);
  };

  const [text, setText] = useState("");
  return (
<div>
    <div className="mb-3 container">
        <label htmlFor="myBox" className="form-label">
          {props.title}
        </label>
        <textarea
          className="form-control" id="myBox"rows="12" value={text} onChange={handleOnChange}
        style={{backgroundColor:props.mode==='light'?'#fafafa':'pink'}}></textarea>
        <button className="btn btn-primary my-3" onClick={handleUpClick}>
          Convert to UpperCase</button>
        <button className="btn btn-primary my-3 mx-2" onClick={handleDownClick}>
            ConvertToLowerCase</button> 
        <button className="btn btn-primary my-3" onClick={handleCopyText}>CopyText</button>       
         <button className="btn btn-primary my-3 mx-2" onClick={handleClearText}>ClearText</button> 
        <button className="btn btn-primary my-3 mx-2" onClick={handleFindChar}>FindText</button> 
    </div>
      <div className="my-3 container">
        <p>You have written</p>
        <p>
          Words:<b>{text.split(" ").length}</b>&nbsp;Characters:
          <b> {text.replace(/\s/g, "").length}</b>
        </p>
        <p>
          You Can Read this Article in &nbsp;
          <b>{0.008 * text.split(" ").length}minutes</b>
        </p>
        <p>Preview</p>
        <p>{text}</p>
      </div>
</div>
);
}
