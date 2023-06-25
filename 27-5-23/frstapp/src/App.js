import React from "react"
//import Prop  from "./Prop"
import MessageList from "./components/MessageList"
class App extends React.Component{
  state={
    subject:"reactjs",
    year:2023
  }
  render(){
    return(
      <div>
        <MessageList/>
      </div>
    )
  }

}
export default App
