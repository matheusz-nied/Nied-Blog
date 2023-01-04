import React from 'react';
import './ShadowContainer.scss'
const  ShadowContainer = ({children, marginTop}) => {

    return(
            <div className="Container" style={{ marginTop: marginTop }}>
                <div className="ShadowContainer">
                        {children}
                </div>
            </div>
    )

}

export default ShadowContainer