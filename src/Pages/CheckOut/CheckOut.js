import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const CheckOut = () => {
    const services = useLoaderData()
    const {_id , title, price } = services
    const {user} = useContext(AuthContext)
    console.log(services)

    const handlePlaceOrder = event =>{
        event.preventDefault()
        const form = event.target
        const name = `${form.firstName.value} ${form.lastName.value}`
        const email = user?.email || 'unregister'
        const phone = form.phone.value
        const message = form.message.value
        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message
        }
        // if(phone.length > 11){
        //     alert('phone number not valid')
        // }
        // else{

        // }
        fetch('http://localhost:5000/orders', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        } )
        .then(Response => Response.json())
        .then(data => {
            console.log(data)
            if(data.acknowledge){
                alert('order sucessfully')
                form.reset()
            }
        })
        .catch(error => console.error(error))
    }
    return (
        <div>
            <form onSubmit={handlePlaceOrder}>
                <h2 className="text-4xl">{title}</h2>
                <h4 className="text-3xl">Price: $ {price}</h4>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name='firstName' type="text" placeholder="First Name" className="input input-bordered input-success w-full " />
                    <input name='lastName' type="text" placeholder="Last Name" className="input input-bordered input-success w-full " />
                    <input name='phone' type="text" placeholder="Your Phone" className="input input-bordered input-success w-full " required/>
                    <input name='email' type="text" placeholder="Your Email"
                    defaultValue={user?.email} className="input input-bordered input-success w-full " readOnly />
                </div>
                <textarea name='message' className="textarea textarea-info w-full mt-5 h-28 mb-5" placeholder="Bio"></textarea>
                <input className='btn btn-outline btn-success mb-5 text-center' type="submit" value="Place Your Order" />
            </form>
        </div>
    );
};

export default CheckOut;