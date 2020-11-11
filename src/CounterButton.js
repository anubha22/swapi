import React,{useState, useEffect} from 'react'

export const CounterButton = () => {
    const [numberOfClicks, setNumberOfClicks] = useState(1);
    useEffect(() => {
        document.title = `You have clicked ${numberOfClicks} times`

        return () => console.log=('Unmounting...')
    }, [numberOfClicks]);

    return (
        <>
            <p>You have clicked the button {numberOfClicks} times</p>
            <button onClick={() => setNumberOfClicks(numberOfClicks + 1)}>Click Me!</button>
        </>
    )
}