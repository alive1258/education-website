import React from 'react';
import Title from '../common/title/Title';

import './hero.css';

const Hero = () => {
    return (
        <div>
           <section className='hero'>
            <div className="continer">
                <div className="row">
                    <div className='heading'>
                    <Title subtitle='WECOME TO ACDAEMIA' title='Best Online Education '/>
                    </div>
                    
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit beatae pariatur saepe, et quod deleniti quam quo dolorem exercitationem! Ex quas numquam ratione fugiat facilis odio. Sequi laboriosam quisquam nobis?</p>

                    <div className="button">
                        <button className="primary-btn">
                            GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
                        </button>
                        <button >
                            VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
                        </button>
                    </div>
                </div>
            </div>

           </section>

           <div className="margin"></div>
        </div>
    );
};

export default Hero;