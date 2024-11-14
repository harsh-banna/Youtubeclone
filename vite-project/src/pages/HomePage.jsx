import Sidebar from "./Sidebar";
import Videos from "./Videos";
import Header from "./Header";
import { useState } from 'react';

function HomePage(){

    const[search,setsearch]=useState([]);
    const [options,setoptions]=useState(true);
    console.log(options);
    console.log(search);

    return(
        <>
        <Header setoptions={setoptions} options={options} setsearch={setsearch}/>
        <Sidebar options={options}/>
        <Videos options={options} search={search}/>
        </>
    )
}

export default HomePage;