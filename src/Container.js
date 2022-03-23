import CounterA from './CounterA';
import CounterB from './CounterB';
import Title from './Title';
import Reset from './Reset';
import Dialog from './Dialog';

const Container = () => {

    return (
        <div>
            <Title />
            <CounterA />
            <CounterB />
            <Reset />
            <Dialog />
        </div>
    )

}

export default Container;