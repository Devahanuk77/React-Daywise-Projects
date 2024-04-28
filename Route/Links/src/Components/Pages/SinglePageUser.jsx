import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';



const SinglePageUser = () => {
const [data,setData]= useState([]);
const params = useParams();
    const getData =async (params)=>{
        let response = await fetch(`https://reqres.in/api/users/${params.id}`);
        let data =await response.json();
        console.log(data.data);
        setData(data.data);
    }

    useEffect(()=>{
        getData(params)
    },[]);

  return (
    <div style={{border:"1px solid silver", margin:"10px", padding:"10px"}}>
        <img src={data.avatar} alt="" />
        <p>{data.first_name}</p>
        <Link to={"/users"}>
            <button>Go Back</button>
        </Link>
    </div>
  )
}

export default SinglePageUser