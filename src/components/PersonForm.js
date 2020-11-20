import React from 'react';

export const PersonForm = () => {
    return(
        <div>
            <h2>Person Form</h2>

            <form>
                <p>Select person id:</p>
                <p>
                    <input type="text"></input>
                </p>
                <p><button type="submit">Submit</button></p>
            </form>
        </div>
    )
}