import React from 'react';
import styles from '../styles/Svg.module.css'
export default function TechCard({array,projectPage=false}) {
  // console.log(projectPage)
  const indexClass='sm:flex justify-center flex-wrap sm:gap-x-20 w-fit hidden';
  const projectClass='flex  flex-wrap justify-center gap-x-10 mx-auto'
  let classname=projectPage ? projectClass :indexClass ;
  let componentClass='text-slate-500 hover:text-black flex flex-col text-gre items-center gap-y-4 text-xl'
  return (
    <div className={classname}>
    {array.map(({name,component},index)=>{
      return(
      <div key={index} className={componentClass}>
        <h3 >
          {!projectPage && name  }</h3> 
          <div className={styles.svg}>
           {component}
          </div>
        
      </div>
      )
    })}
  </div>
  );
}

