import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const CheckOut = () => {
    const services = useLoaderData()
    const { title, price } = services
    const {user} = useContext(AuthContext)
    console.log(services)
    return (
        <div>
            <form>
                <h2 className="text-4xl">{title}</h2>
                <h4 className="text-3xl">Price: $ {price}</h4>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input type="text" placeholder="First Name" className="input input-bordered input-success w-full " />
                    <input type="text" placeholder="Last Name" className="input input-bordered input-success w-full " />
                    <input type="text" placeholder="Your Phone" className="input input-bordered input-success w-full " />
                    <input type="text" placeholder="Your Email"
                    defaultValue={user?.email} className="input input-bordered input-success w-full " readOnly />
                </div>
                <textarea className="textarea textarea-info w-full mt-5 p-12 mb-5" placeholder="Bio"></textarea>
            </form>
        </div>
    );
};

export default CheckOut;