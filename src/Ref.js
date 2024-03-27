import React, { Component } from "react";

class Ref extends Component{
    constructor(props){
        super(props)
        this.callref=React.createRef();
        this.FocusInp=this.FocusInp.bind(this);
    }

    FocusInp(){
        this.callref.current.focus();
    }
    render(){
        return(
            <div className="container ">
                <div>
                    <input className="me-2"  type="text" ref={this.callref}/>  
                    <input type="submit" onClick={this.FocusInp } value={"foucs "}/>  
                </div>
            </div>
        )
    }
}
export default Ref;