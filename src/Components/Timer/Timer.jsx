import React,{useState,useEffect} from "react";
export const Timer =()=>{
    const [hours, setHours] = useState(Math.floor(Math.random()*10));
    const [seconds, setSeconds] = useState(Math.floor(Math.random()*10));
    const [minuts, setMinuts] = useState(Math.floor(Math.random()*10));
    
    var timer;

    useEffect(() => {
        timer=setInterval(()=>{
            setSeconds(seconds - 1);
            if(seconds === 0){
                setMinuts(minuts - 1);
                setSeconds(59);
            }else if(minuts === 0){
                setHours(hours - 1);
                setMinuts(59);
            }
        }, 1000);
        return () => clearInterval(timer)
    });
    return(
        <>
            <p>
                {hours}:{minuts}:{seconds}
            </p>
        </>
    )
}