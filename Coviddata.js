import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

const url="https://api.coronavirus.data.gov.uk/v1/data";

const Coviddata = () => {

  const [state,setState]= useState([]);

  useEffect(()=>{
    axios.get(url).then((res)=>{
     console.log(res.data);
       setState(res.data.data);
    })
  },[]);


  return (
    <div>
         <table>
           <tr>
             <th>Date</th>
             <th>AreaName</th>
             <th>AreaCode</th>
             <th>Death</th>
             <th>DeathRate</th> 
           </tr>
                
     {
          state.slice(0,15).map((item)=>{
             const {id, date,areaName,areaCode,death,deathRate} = item;
           return (
              
              <tr key={id}>
                  <td>{date}</td>
                  <td>{areaName}</td>
                  <td>{areaCode}</td>
                  <td>{death}</td>
                  <td>{deathRate}</td> 
                  
              </tr>
             )
           })
      } 
         </table>
      </div>
  )
}

export default Coviddata;