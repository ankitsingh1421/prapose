  import React, { useState } from 'react'
  import './praposal.css';

  const Praposal = () => {
    const [yes, setYes] = useState(true);
    const [swap, setSwap] = useState(false);

    const handleYes = () => {
      setYes(false);
    }
    const handleNoMouseEnter = () => {
      setSwap(prevSwap => !prevSwap);  }

      const handleMessageClick = () => {
        const phoneNumber = '9389916233';
        const message = 'i love u too ';
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.location.href = url;
      };
    
    return (
      <div className='main'>
        {yes ? (
          <div className="fram">
          <div className="another">
          <h2>i Love You</h2>
            <p> wil you be my Girlfriend ?</p> <br />
            <div className={swap ? 'button-container swap' : 'button-container'}>
              <button onClick={handleYes} className='one'>Yes</button>
              <button onClick={handleNoMouseEnter} className='two'>No</button>
          </div>
            </div>
          </div>
        ) : (
          <div className='fram'>
            <h1 className='you'>Love you 2 
            </h1>
            <button className="btn" onClick={handleMessageClick}>message now !</button>
          </div>
        )}
      </div>
    )
  }

  export default Praposal;

