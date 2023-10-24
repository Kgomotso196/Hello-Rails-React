import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchgreeting } from "../slices/greetingSlice";
const Greeting = () => {
    const greetings = useSelector(store => store.greeting);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchgreeting());
    }, []);

    if(greetings.isLoading){
        return <p>Loading...</p>
    }

    return (
        <div>
            <h1>Before All</h1>
            <p>{greetings.greeting.message}</p>
        </div>
    );
};

export default Greeting;
