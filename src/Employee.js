import React from "react";
export default class Employee extends React.Component{
    constructor(props){
        super(props)

        this.state ={
            txtFirstName : "",
            txtEmail:"",
            txtAddress:"",
            txtAddress2:"",
            txtCity:"",
            txtProv:"",
            txtPostalCode:""
        }
    }

    options = ["Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador", "Nova Scotia", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan"]

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
            <form onSubmit={e => this.onSubmitData(e)}>
                <input onChange={e => this.onValueChange(e)} type="text" name="txtFirstName" placeholder="Full Name" />
                <input onChange={e => this.onValueChange(e)} type="text" name="txtEmail" placeholder="Enter email" />
                <br></br>
                <input onChange={e => this.onValueChange(e)} type="text" name="txtAddress" placeholder="1234 Main St" />
                <input onChange={e => this.onValueChange(e)} type="text" name="txtAddress 2" placeholder="Apartment , studio or floor" />
                <input onChange={e => this.onValueChange(e)} type="text" name="txtCity" placeholder="City" />
                <input onChange={e => this.onValueChange(e)} type="text" name="txtPostalCode" placeholder="Postal Code" />
                <br></br>
                <div style={{float:'left', marginLeft:'10px'}}>
                            <label style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>Province</label>
                            <select style={{width:'490px', marginTop:'10px'}} name="selectedOption" onChange={e => this.onValueChange(e)}>
                                <option name="selectedOption" key="">Choose...</option>{
                                    this.options.map(selectedOption => {
                                    return (<option key={selectedOption}>{selectedOption}</option>)
                                    })
                                }
                            </select>
                        </div>
                <br/>
                <br/>
                <input type="checkbox" name="checkbox" value="check" id="agree" /> Agree Terms & Conditions
                <input onChange={e => this.onValueChange(e)} type="submit" name="submit " placeholder="Submt" />
            </form>
        <br></br>
        <hr></hr>
            <h2>Data Output</h2>
                <h5>FullName:{this.state.txtFirstName}</h5>
                <h5>Email:{this.state.txtEmail}</h5>
                <h5>Address: {this.state.txtAddress + this.state.txtAddress2}</h5>
                <h5>City: {this.state.txtCity}</h5>
                <h5>Province: {this.state.selectedOption}</h5>
                <h5>Postal Code: {this.state.txtPostalCode}</h5>
                <hr></hr>
        </div>
        )
    }
}
