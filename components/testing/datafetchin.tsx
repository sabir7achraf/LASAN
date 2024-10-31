'use client';
import {useEffect, useState} from "react";

import axios from 'axios';

export default function DataFitching() {
    const[data,setdata]=useState(null);
    useEffect(()=>{
        axios.get("http://localhost:8080/data").then(result => {
             setdata(result.data);
        })
        },[])
    if (!data) {
        return <p>Athlète non trouvé.</p>; // Message à afficher si l'athlète est null
    }
return(
    <div>
        {data}
    </div>
)


}