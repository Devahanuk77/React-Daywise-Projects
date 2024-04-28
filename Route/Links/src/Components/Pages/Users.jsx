import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Users = () => {
const [data,setData]= useState([]);
    const getData= async ()=>{
        let response = await fetch("https://reqres.in/api/users?page=2");
        let fetchData = await response.json();
        console.log(fetchData.data);
        setData(fetchData.data);
    }

    useEffect(()=>{
        getData();
    },[]);

  return (
  <>
    {data.map((user)=>{
        return <div style={{border:"1px solid silver", margin:"10px"}}>
        <img src={user.avatar} alt="" />
        <Link to={`${user.id}`}>{user.first_name}</Link>
        </div>
    })}
  
  </>
  )
}

export default Users