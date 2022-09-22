//৯. আরেকটা কম্পোনেন্ট বানাও। যেটার নাম হবে। Mobile সেখানে একটা বাটন থাকবে। বাটন এর নাম হবে "battery down" আর উপরে একটা সংখ্যা থাকবে। ১০০। (এইটা দিয়ে বুঝবে মোবাইল এর ব্যাটারি ১০০% আছে) এখন তুমি যতবার বাটনে ক্লিক করবে। সেই সংখ্যা এর মান ১০ করে কমতে থাকবে। 
import React, { useState } from 'react';
import './Mobile.css';

const Mobile = () => {
    const [charge, setCharge] = useState(100);
    const downCharge = () =>{
        if(charge === 0){
            alert('0ppos')
            return;
        }
        const newCharge = charge - 10;
        setCharge(newCharge);
    }
    return (
        <div>
            <h1>Mobile Battery Charge.::- <span>{charge}</span></h1>
            <button onClick={downCharge}>Battery Down</button>
        </div>
    );
};

export default Mobile;
//disabled={charge === 0}








