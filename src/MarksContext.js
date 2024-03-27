import React from "react";
const { Component } = require("react");


const BtnColorContext = React.createContext("btn btn-darkyello");



class Marks extends React.Component {

    render() {
       return (
        <>

            <BtnColorContext.Provider value="btn btn-info">
                 <Button />
            </BtnColorContext.Provider >


        </>
        )
    }
}

function Button(props) {
    return (
        <div className="container">
            <ThemedButton />

        </div>
    )
}
class ThemedButton extends Component {
    static contextType = BtnColorContext;
    render()
     {
        return (
      
            <button className={this.context}>React Context</button>
        
        )
    }
}
export default Marks;