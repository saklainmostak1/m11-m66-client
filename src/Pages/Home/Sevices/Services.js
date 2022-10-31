import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() =>{
        fetch('services.json')
        .then(Response => Response.json())
        .then(data => setServices(data))
    }, [])

    return (
        <div >
            <div className='text-center mb-4'>
                <p className="text-2xl font-bold text-orange-600">
                </p>
                    <h2 className="text-5xl font-semibold">Our Service Area</h2>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
                        {
                            services.map(service => <ServiceCard
                            key={service._id}
                            service={service}
                            ></ServiceCard> )
                        }
                    </div>
               
            </div>
        </div>
    );
};

export default Services;