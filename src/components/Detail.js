import React from "react";
import Axios from "axios";
class Detail extends React.Component{
    state = {employee : []}
    componentDidMount(){
        const URL = " https://jsonplaceholder.typicode.com/users";
        Axios.get(URL)
        .then(res=>{
            this.setState({employee: res.data})
            console.log(res.data);
        }).catch(error=>
            console.error(`Error: ${error}`)
        );
    }
    render(){
        return(
            <div>
                <table className="table table-sm">
                    <thead className="table-dark">
                        <tr><th colspan={7} className="text-center p-4">Employee Table</th></tr>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Website</th>
                            <th scope="col">Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.employee.map(items=>(
                            <tr>
                                <th scope="row" className="p-3">{items.id}</th>
                                <td className="p-3">{items.name}</td>
                                <td className="p-3">{items.username}</td>
                                <td className="p-3">{items.email}</td>
                                <td className="p-3">{items.phone}</td>
                                <td className="p-3">{items.website}</td>
                                <td className="p-3">
                                        {items.address.street},&nbsp;
                                        {items.address.suite},&nbsp;
                                        {items.address.city},&nbsp;
                                        {items.address.zipcode}   
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    
                </table>
            </div>
        )
    }
}
export default Detail;