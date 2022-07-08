import axios from "axios";
import { useState,useEffect } from "react";
import AddDuty from "../components/AddDuty";
import ShowDuties from "../components/ShowDuties";


const Home = () => {
    const [fill, setFill] = useState();
    const url = "https://axios-example-cw.herokuapp.com/api/tutorials";

const getApi =async ()=>{
    try {
        const{data}= await axios.get(url);
        // console.log(data);
        setFill(data);
        console.log(data);
    } catch (error) {
        console.log(error);
        
    }
}
useEffect(() => {
getApi();
},[])

const postApi=async (newduty)=>{
    try {
        await axios.post(url,newduty);
        
    } catch (error) {
        console.log(error);        
    }
    getApi();
}
const delApi=async (id)=>{
    try {
        await axios.delete(`${url}/${id}`)
       
    } catch (error) {
        console.log(error);      
    }
    getApi();
}
const editApi=async (id,title,desc)=>{
    try {
        await axios.put(`${url}/${id}`,{title,description:desc});
        
    } catch (error) {
        console.log(error);
        
    }
    getApi()

}

  return (
    <div>
        <AddDuty postApi={postApi} />
        <ShowDuties 
        fill={fill}  delApi={delApi} editApi={editApi} />
        
        


    </div>
  )
}

export default Home;