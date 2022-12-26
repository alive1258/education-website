import React from 'react';
import Back from './../common/back/Back';
import Faq from './Faq';
import PriceCard from './PriceCard';
import './price.css';

const Price = () => {
    return (
        <div>
           <Back title="Choose The Right Plan"/>
           <section className='price padding'>
             <div className='continer '>
                <PriceCard />
            </div>
      </section>
      <Faq />
        </div>
    );
};

export default Price;