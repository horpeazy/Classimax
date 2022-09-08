import React, {useRef, useEffect } from 'react';

const Feedback = ({icon, maxcount, content}) => {
    const counterRef = useRef(null);
    const counterBoxRef = useRef(null);

    const increaseCount = async (maxcount) => {
        const counterTop = counterBoxRef.current.getBoundingClientRect().top;
        if(counterTop <= window.innerHeight && counterTop > 0) {
            let count = parseInt(counterRef.current.innerHTML, 10);
            const interval = setInterval(() => {
                counterRef.current.innerHTML = ++count;
                if (count >= maxcount) {
                    clearInterval(interval);
                }
            }, 0);
        }   
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {increaseCount(maxcount)});
        }, [maxcount]);

    return (
        <div className='feedback' ref={counterBoxRef}>
            <i className={`fa ${icon}`}></i>
            <span ref={counterRef}>0</span>
            <h5>{content}</h5>
        </div>
    )
}

export default Feedback;