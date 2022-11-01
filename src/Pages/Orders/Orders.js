import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Orders = () => {
    const {user} = useContext(AuthContext)
    const [orders, setOrders] = useState({})

    useEffect(() => {
        fetch( `http://localhost:5000/orders?email=${user?.email}`)
        .then(Response => Response.json())
        .then(data => setOrders(data))
    },[user?.email])
    return (
        <div>
            <h2 className="text-5xl">You Have {orders.length}</h2>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
   
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody> 
      
    </tbody>

    <tfoot>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </tfoot>
    
  </table>
</div>
        </div>
    );
};

export default Orders;