import React from "react";
class Employee extends React.Component{
    constructor(props){
        super(props)

        this.state ={
            txtFirstName : "",
            txtLastName: "",
            txtSalary: "",
            txtEmail:"",
            txtAddress:"",
        }
    }

    onSubmitData = (event) => {
        event.preventDefault()
        console.log(this.state)
    }

    onValueChange = event => {
        this.setState({
            [event.target.name]:  event.target.value
        })

    }

    render(){
        return(
        <div>
            <h1>Employee Data Entry From Class Component</h1>
            <form onSubmit={e => this.onSubmitData(e)}>
                <input onChange={e => this.onValueChange(e)} type="text" name="txtFirstName" placeholder="Full Name" />
                <input onChange={e => this.onValueChange(e)} type="text" name="txtEmail" placeholder="Enter email" />
                <input onChange={e => this.onValueChange(e)} type="text" name="txtAddress" placeholder="1234 Main St" />
                <input onChange={e => this.onValueChange(e)} type="text" name="txtAddress 2" placeholder="Apartment , studio or floor" />
                <input onChange={e => this.onValueChange(e)} type="text" name="txtCity" placeholder="" />
                {/* <input onChange={e => this.onValueChange(e)} type="text" name="Province Code" placeholder="Apartment , studio or floor" /> */}
                <input onChange={e => this.onValueChange(e)} type="text" name="Postal Code" placeholder="Postal Code" />
                <input type="submit" value="Submit"/>
            </form>
        </div>
        )
    }
}

export default Employee