import React, {Component} from 'react';  
  
export default function Hoc(HocComponent){  
    return class extends Component{  
        render(){  
            return (  
                <div>  
                    <h1>Hello... WELCOME TO PUNE</h1>
                    
                    <HocComponent></HocComponent>  
                </div>  
  
            );  
        }  
    }   
} 