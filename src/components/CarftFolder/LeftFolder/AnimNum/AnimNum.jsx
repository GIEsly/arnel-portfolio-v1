import React from 'react';
import CountUpModule from 'react-countup';
import './anim.scss'

const AnimNum = () => {
    const CountUp = CountUpModule.default || CountUpModule;
  return (
    <div className="animStyle">
        <div className="wrapper">

            <div className="countBox">
                <h1 className='CountAnim'>
                    <CountUp end={8} duration={3} suffix="+" enableScrollSpy={true} scrollSpyOnce={false}/>
                </h1>
                <h2 className="info">Years of Experience </h2>
            </div>

            <div className="countBox">
                <h1 className='CountAnim'>
                    <CountUp end={8} duration={3} suffix="" enableScrollSpy={true} scrollSpyOnce={false}/>
                </h1>
                <h2 className="info">Members Lead</h2>
            </div>

            <div className="countBox">
                <h1 className='CountAnim'>
                    <CountUp end={6} duration={3} suffix="+" enableScrollSpy={true} scrollSpyOnce={false}/>
                </h1>
                <h2 className="info">Signatured Brand </h2>
            </div>

            <div className="countBox">
                <h1 className='CountAnim'>
                    <CountUp end={1000} duration={3} suffix="+" enableScrollSpy={true} scrollSpyOnce={false}/>
                    {/* ∞ */}
                </h1>
                <h2 className="info">Cups Poured </h2>
            </div>

        </div>
    </div>
  );
};

export default AnimNum;