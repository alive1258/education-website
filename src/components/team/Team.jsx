import React from 'react';
import Back from '../common/back/Back';
import TeamCard from './TeamCard';
import './team.css';
import '../about/about.css';
import AWrapper from '../about/AWrapper';

const Team = () => {
    return (
        <div>
           <Back title='Team' />
      <section className='team padding'>
        <div className='continer '>
          <TeamCard />
        </div>
      </section>
      <AWrapper />
        </div>
    );
};

export default Team;