import React, { Component } from "react"
import Hoc from "./hoc"
import Ref from "./Ref"
import UseRef from "./UseRef"
import AddDynamicInput from "./AddDynamicinput"
import Album from "./Album"

class Home extends Component {
    render() {
        // function add(a, b) {
        //     return a + b
        // }
        // function Hocs(a, addRef) {
        //     return addRef(a, 100)
        // }

        // var out = Hocs(50, add)
        return (
            <>
              <Album/>
            <div>
                {/* <h1>{out}</h1>
                <div>
                    <Ref />
                </div>
                <div className="p-5">
                    <UseRef/>
                </div>

                <div className="p-5">
                    <AddDynamicInput/>
                </div> */}
              
            </div>
            </>
        )
    }
}
// Home = Hoc(Home)
export default Home;