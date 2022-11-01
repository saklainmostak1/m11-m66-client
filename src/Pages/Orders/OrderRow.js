import React, { useEffect, useState } from 'react';

const OrderRow = ({ order }) => {

    const { serviceName, customer, price, phone, service, _id } = order
    const [orderService, setOrderService] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/services/${service}`)
            .then(Response => Response.json())
            .then(data => setOrderService(data))
    }, [service])
    const handleDelete = id => {
        const proceed = window.confirm('Are You Sure')
        if (proceed) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'DELETE'
            })
                .then(Response => Response.json())
                .then(data => {
                    console.log(data)
                
                })
        }
    }
    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className="btn btn-ghost">X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            {
                                orderService?.img &&

                                <img src={orderService.img} alt="" />
                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customer}</div>
                        <div className="text-sm opacity-50">{phone} </div>
                    </div>
                </div>
            </td>
            <td>
                {serviceName}
                <br />
                <span className="badge badge-ghost badge-sm">${price}</span>
            </td>
            <td>Indigo</td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default OrderRow;