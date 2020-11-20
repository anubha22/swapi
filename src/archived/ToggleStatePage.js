import React, {useState, useEffect} from 'react';

const initialLocationState = () => ({
    latitude : null,
    longitude: null,
    speed: null,
})

export const ToggleStatePage = () => {
    const [count, setCount] = useState(0);
    const [isOn, setIsOn] = useState(false);
    const [mousePosition, setMousePosition] = useState({x: null, y: null});
    const [status, setStatus] = useState(navigator.onLine);
    const [{latitude, longitude, speed}, setLocation] = useState(initialLocationState);
    let mounted = true;

    useEffect( () => {
        document.title = `You have clicked ${count} times`;
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);
        navigator.geolocation.getCurrentPosition(handleGeolocation);
        const watchId = navigator.geolocation.watchPosition(handleGeolocation);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
            navigator.geolocation.clearWatch(watchId);
            mounted = false;


        }
    },[count]);

    const handleGeolocation = (event) => {
        if (mounted){
            setLocation({
                latitude: event.coord.latitude,
                longitude: event.coord.longitude,
                speed: event.coord.speed,
            })
        }
    }

    const handleOnline = () => {
        setStatus(true);
    };

    const handleOffline = () => {
        setStatus(false);
    };

    const handleMouseMove = (event) => {
        setMousePosition({
            x: event.pageX,
            y: event.pageY,
        });
    }

    const incrementCount = () => {
        setCount( (prevCount) => prevCount + 1);
    };

    const toggleLight = () => {
        setIsOn((prevIsOn) => !prevIsOn);
    };

    return(
        <>
            <h2>Counter</h2>
            <button onClick={incrementCount}>I was clicked {count} times!</button>

            <div
                style={{
                    height: "100px",
                    width: "100px",
                    background: isOn ? "yellow" : "grey",
                }}
                onClick={toggleLight}
            />

            <h2>Mouse position</h2>
            {JSON.stringify(mousePosition, null, 2)}
            <br/>

            <h2>Network status</h2>
            <p>You are <strong> {status ? "online" : "offline"}</strong></p>

            <h2>Geolocation</h2>
            <p>Location is {latitude}</p>
            <p>Longitude is {longitude} </p>
            <p>Your speed is {speed ? speed : "0"}</p>
        </>
    )

}