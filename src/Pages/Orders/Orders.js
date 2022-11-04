import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
    const {user} = useContext(AuthContext)
    const [orders, setOrders] = useState([])
    console.log(orders)
    useEffect(() =>{
        fetch(`http://localhost:5000/orders?email=${user?.email}`, {
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
        .then(Response=>Response.json())
        .then(data => setOrders(data))
    }, [user?.email])
    const handleDelete = id => {
        const proceed = window.confirm('Are You Sure')
        if (proceed) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'DELETE'
            })
                .then(Response => Response.json())
                .then(data => {
                    console.log(data)
                if(data.deletedCount > 0){
                    alert('delete Sucessfully')
                    const remaining = orders.filter(odr => odr._id !== id)
                    setOrders(remaining)
                }
                })
        }
    }
    const handleStatusUpdate = id =>{
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({status: 'Approved'})
        })
        .then(Response=>Response.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                const remaining = orders.filter(odr => odr._id !== id)
                const approving = orders.find(odr => odr._id === id)
                approving.status= "approved"
                const newsOrders = [approving, ...remaining ]
                setOrders(newsOrders)
            }
        })
    }
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
        <th>Message</th>
      </tr>
    </thead>
    <tbody> 
      {
        orders.map(order => <OrderRow
        key={order._id}
        order={order}
        handleDelete={handleDelete}
        handleStatusUpdate={handleStatusUpdate}
        ></OrderRow>)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Orders;