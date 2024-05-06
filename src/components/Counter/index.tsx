import {Minus, Plus} from "phosphor-react";
import {CounterContainer} from "./styles.ts";
import {useState} from "react";

export function Counter() {
    const [counter, setCounter] = useState(0);

    function increment() {
        setCounter(counter + 1);
    }

    function decrement() {
        if (counter > 0) {
            setCounter(counter - 1);
        }
    }

    return (
        <CounterContainer>
            <button type="button" onClick={decrement}>
                <Minus size={14}/>
            </button>
            <span>{counter}</span>
            <button type="button" onClick={increment}>
                <Plus size={14}/>
            </button>
        </CounterContainer>
    );
}
