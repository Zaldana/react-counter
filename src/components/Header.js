import React from "react";

function Header() {
    
    return (
        <div style={headerStyle}>
            <div>
                logo
            </div>
            <div>
                Menu
            </div>
        </div>
    )
}

const headerStyle = {
        backgroundColor: "gold",
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
        textTransform: "uppercase",
        marginBottom: "30px"
}

export default Header