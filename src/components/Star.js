import React from "react";
import starImage from "./images/star.svg"

function Star() {

    return (
        <div>
            <img
                style={starStyle}
                src={starImage}
            />
        </div>
    )
}

const starStyle = {
    width: "40px",
    height: "auto",
    padding: "15px"
}

export default Star