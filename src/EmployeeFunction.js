import { useState } from "react"

export default function EmployeeFunction(props) {

    const [emp, setEmp] = useState({
                txtFirstName : "",
                txtLastName: "",
                txtSalary: ""
            })
    
    //const [x, setX] = useState(0)

    let onSubmitData = (event) => {
        event.preventDefault()
        console.log(emp)
    }

    let onValueChange = event => {
        setEmp({ ...emp, [event.target.name]:  event.target.value})
    }

    return(
        <div>
        <h1>Employee Data Entry From Function Component</h1>
        <form onSubmit={e => onSubmitData(e)}>
            <input onChange={e => onValueChange(e)} type="text" name="txtFirstName" placeholder="Enter First Name" />
            <input onChange={e => onValueChange(e)} type="text" name="txtLastName" placeholder="Enter Last Name" />
            <input onChange={e => onValueChange(e)} type="text" name="txtSalary" placeholder="Enter Salary" />
            <input type="submit" value="Submit"/>
        </form>
    </div>
    )
    
}