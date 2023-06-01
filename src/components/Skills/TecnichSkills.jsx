import React from "react";
import StatItem from "../Stats/StatItem";

const TecnichSkills = ({skillType}) => {
  return (
    <section   id='skills'>
      <div className='stats-container'>
    
        <h2 className='section-title'>Languages</h2>
        <div style={{overflowX:'scroll'}}  className='stats-list'>
        <StatItem percent='75' language='Javascript' />
        <StatItem percent='50' language='TypeScript'  />
        <StatItem percent='40' language='Java'  />
        </div>
      </div>
    </section>
  );
};

export default TecnichSkills;
