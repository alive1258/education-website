import React from 'react';
import { awrapper } from '../data/dummydata';

const AWrapper = () => {
    return (
        <div>
           <section className='awrapper'>
            <div className="continer grid">
                {awrapper.map((val)=>(
                    <div className="box flex">
                        <div className="img">
                            <img src={val.cover} alt="" />
                        </div>
                        <div className="text">
                            <h1>{val.data}</h1>
                            <p>{val.title}</p>
                        </div>
                    </div>
                ))}
            </div>

           </section>
        </div>
    );
};

export default AWrapper;