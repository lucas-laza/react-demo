import React, { useState } from 'react';
import '../App.css';

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return <>
        <div>
            <h1>Compteur</h1>
            <p>Le compteur est à : <span className={(count > 5) ? 'orange' : ''}> {count} </span></p>
            <div>{(count > 5) ? <h3 className='warning'>attention</h3> : null}</div>
            <button onClick={increment}>Incrémenter</button>
            <button onClick={decrement}>Décrémenter</button>
        </div>
    </>;
}

export default Counter;