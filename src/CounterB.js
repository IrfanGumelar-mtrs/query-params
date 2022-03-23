import { useState, useEffect } from 'react/cjs/react.development';
import { useQueryParam, NumberParam } from 'use-query-params';

const CounterA = () => {
    // const [numB, setNumB] = useState()
    const [numB, setNumB] = useQueryParam('numB', NumberParam);

    useEffect(()=> {
        console.log("numB changed = ", numB)
    }, [numB])

    const onInc = () => {
        setNumB(prevVal => (prevVal || 0) + 1)
    }

    const onDec = () => {
        setNumB(prevVal => (prevVal || 0) - 1)
    }

    return (
        <div>
            <div>Num B value: {`${numB || "none"}`}</div>
            <button onClick={onDec}>-</button>
            <button onClick={onInc}>+</button>
        </div>
    )}

export default CounterA;