import { RingLoader } from 'react-spinners'
import React from 'react';


const Loading = ({ size, color }) => {

    const spinnerColor = color ? color : "#36D7B7"

    return (
        <div className="d-flex justify-content-center">
            <RingLoader size={size} color={spinnerColor} />
        </div>
    )

}


export default Loading