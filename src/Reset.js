import { useQueryParam, NumberParam } from 'use-query-params';

const Reset = () => {
    const [, setNumA] = useQueryParam('numA', NumberParam);
    const [, setNumB] = useQueryParam('numB', NumberParam);

    const onReset= () => {
        setNumA(undefined);
        setNumB(undefined);
    }

    return (
        <button onClick={onReset} >Reset</button>
    )
}

export default Reset;