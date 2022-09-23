import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import './Gun.css';

const Gun = (props) => {
    const [modalData, setModalData] = useState({})
    console.log(modalData);
    const {countIncrease} = props;
    const {name, action, bullet, img} = props.gun;
    // console.log(props)
    return (
        <div>
            <div className="card w-full h-full bg-base-100 shadow-xl">
                <figure><img className='w-full md:w-96 lg:96 h-60' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions mt-3">
                        <div className="badge badge-outline bg-green-200 border-pink-400">{action}</div> 
                        <div className="badge badge-outline bg-pink-200 border-green-400">{bullet}</div>
                        <div>
                            <button onClick={() => countIncrease()} className="btn btn-sm btn-primary mr-4">Add to Cart</button>
                            {/* <button className="btn btn-sm btn-secondary">Details</button> */}
                            <label onClick={() => {setModalData(props.gun)}} htmlFor="my-modal-3" className="btn modal-button btn-sm btn-secondary">Details</label>
                        </div>
                    </div>
                </div>
            </div>
            {
                modalData && (<Modal data = {modalData} setModalData={setModalData} />)
            }
        </div>
    );
};

export default Gun;