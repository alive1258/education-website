import React from 'react';
import Title from '../../common/title/Title';
import PriceCard from '../../pricing/PriceCard';
import './hprice.css';

const Hprice = () => {
    return (
        <div>
              <section className='hprice padding'>
                <div className='continer tit-sub'>
                <Title subtitle='OUR PRICING' title='Pricing & Packages' />
                </div>
        
        <div className='price  continer '>
          <PriceCard />
        </div>
      </section>
        </div>
    );
};

export default Hprice;