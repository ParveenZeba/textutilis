import React from 'react'

export default function Alert(props) {
  //not working
 /*const capitalize=(word)=>{
    console.log(word);
    const lower=word.toLowerCase();
    lower=lower.charAt(0).toUpperCase() + lower.slice(1);
  }*/
return (
    
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
          <strong>{props.alert.type}</strong>:{props.alert.msg}
        </div>
    
    )
}
