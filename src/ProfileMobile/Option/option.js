import React, { useState, useEffect, useContext } from "react";
import "./index.scss";
import StateContext from "./../../context";
function Option(props) {
    const [fade, setFade] = useState("");
    const [clear, setClear] = useState(true);
    const State = useContext(StateContext);
    useEffect(() => {
        if (State.key > 0) {
            if (State.key != props.keey) {
                setFade("faded");
                setTimeout(() => {
                    setClear(false);
                }, 230);
            }else{
                setTimeout(()=>{
                      setFade("selected");
                },180)
            }
        }
        return function () {
            clearTimeout();
        };
    }, [State.key]);

    const click = () => {
        State.toggleKey(props.keey);
    };

    return State.key === 0 || clear ? (
        <div className={`option fade ${fade}`} onClick={click}></div>
    ) : (
        <></>
    );
}

export default Option;
