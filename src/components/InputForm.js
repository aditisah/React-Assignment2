import React from "react";
import './InputForm.css'
class InputForm extends React.Component{
constructor(){
    super();
    this.state={
        bio: '',
        btnClicked: false
    }
}
capitalizeInputValue(value){
    this.setState({
        bio: value.toUpperCase()
    })
}
onSubmit(){
this.setState({
    btnClicked: true
})
}
render(){
    return(
        <div className="container">
            <label>Bio</label>
            <div className="form">
            <textarea className="input" type='text' onChange={(event)=>this.capitalizeInputValue(event.target.value)}></textarea>
            {this.state.btnClicked&&<p>{this.state.bio}</p>}
             <button onClick={()=>this.onSubmit()}>change</button> 
            
            </div>
        </div>
    )
}
}

export default InputForm;