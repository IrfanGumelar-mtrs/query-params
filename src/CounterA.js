import { useState, useEffect } from 'react/cjs/react.development';
import { useQueryParam, NumberParam } from 'use-query-params';

const CounterA = () => {
    // const [numA, setNumA] = useState()
    const [numA, setNumA] = useQueryParam('numA', NumberParam);

    useEffect(()=> {
        console.log("numA changed = ", numA)
    }, [numA])

    const onInc = () => {
        setNumA(prevVal => (prevVal || 0) + 1)
    }

    const onDec = () => {
        setNumA(prevVal => (prevVal || 0) - 1)
    }

    return (
        <div>
            <div>Num A value: {`${numA || "none"}`}</div>
            <button onClick={onDec}>-</button>
            <button onClick={onInc}>+</button>
        </div>
    )
}

export default CounterA;