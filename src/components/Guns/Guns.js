import React, { useEffect, useState } from 'react';
import Gun from '../Gun/Gun';

const Guns = ({countIncrease}) => {
    const [guns, setGuns] = useState([]);
    // console.log(guns);
    // const allGuns = async () => {
    //     const res = await fetch(`https://raw.githubusercontent.com/mir-hussain/guns/main/data.json`);
    //     const data = await res.json();
    //     setGuns(data);
    // }
    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/mir-hussain/guns/main/data.json`)
        .then(res => res.json())
        .then(data => setGuns(data))
        // allGuns();
    },[])
    return (
        <div className='lg:mx-20 mt-14'>
            <div className='mb-14'>
                <h1 className='text-center text-4xl font-bold'>Welcome too My Guns Store {guns.length}</h1>
                <p className='text-center text-gray-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor nemo porro aspernatur ducimus, sunt totam culpa ex, perferendis suscipit deserunt in maiores at ut voluptatum pariatur cum? Similique, omnis distinctio.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    guns.map(gun => <Gun 
                    gun={gun} countIncrease={countIncrease}
                    key={gun.id}/>)
                }
            </div>
        </div>
    );
};

export default Guns;