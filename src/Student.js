import React from "react";
class Student extends React.Component{
    constructor(props){
        super(props)
        this.y = 1
        this.state = {
            x: 1,
            name: "NO Name"
        }

        this.names = ["Pritesh", "Yaro", "Do", "Patel"]
    }

    onBtnAddClick = () => {
        //alert("Button Clicked")
        this.y = this.y + 1
        this.setState({x: this.state.x + 1})
        console.log("Y : " + this.y)
    }

    onBtnEventClick(event){
        alert("Event Button Clicked")
        console.log(event)
    }

    onNameChanged = (event) => {
        event.preventDefault()
        console.log(event.target.value)
        this.setState({name: event.target.value})
    }

    render(){
        return(
            <>
                <h2>Student Component</h2>
                X: {this.state.x}<br/>
                Y: {this.y}
                <button name="btnAdd" onClick={this.onBtnAddClick}>Add</button>
                <button name="btnEvent" onClick={(event) => this.onBtnEventClick(event)}>Event Parameter</button>

                <input type="text" name="txtName" onChange={(event) => this.onNameChanged(event)}/>
                <p>{this.state.name}</p>
                <ol>
                    {
                        this.names.map(name => (
                            <li key={name}>{name}</li>
                        ))
                    }
                </ol>
                <select>
                    {
                        this.names.map(name => (
                            <option key={name} value={name}>{name}</option>
                        ))
                    }
                </select>
            </>
        )
    }
}

export default Student