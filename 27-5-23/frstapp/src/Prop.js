import React from 'react'
class Prop extends React.Component{
    render(){
        console.log(this.props)
        return(
            <div>
                <p>name is {this.props.name} and age is {this.props.age}</p>
            </div>
        )
    }
}
export default Prop