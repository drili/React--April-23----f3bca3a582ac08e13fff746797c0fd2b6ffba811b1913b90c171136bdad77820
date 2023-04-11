import React from 'react'
import { useEffect, useRef } from 'react';

const Card = ({ name, age, onClicked }) => {
    useEffect(() => {
        console.log(`Hello name: ${name}`);
    }, [name])

    const printHello = () => {
        console.log(`Hello name: ${name}`);
    }

    const divRef = useRef()

    const changeStyles = () => {
        console.log(divRef.current.attributes.class);
    }

    return (
        <>
            <div onClick={onClicked}>
                <div>Im - {name}</div>
                <div>And I am {age} years old</div>
            </div>

            <div className='useRef useRef2' ref={divRef} onClick={changeStyles}>
                Use Ref
            </div>
        </>
    )
}

export default Card