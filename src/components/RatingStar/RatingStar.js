import React, { useState } from 'react';
import { FaStar } from "react-icons/fa"
const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
}
const RatingStar = () => {
    const stars = Array(5).fill(0);
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const handleClick = value => {
        setCurrentValue(value)
    };
    const handleMouseHover = value => {
        setHoverValue(value);
    };
    const handleMouseLeave = () => {
        setHoverValue(undefined);
    }
    return (
        <div style={styles.container}>
            <p className=''>Give your rateing</p>
            <div style={styles.stars}>
                {stars.map((_, index) => {
                    return (
                        <FaStar
                            key={index}
                            size={24}
                            style={{
                                marginRight: 10,
                                cursor: "pointer",

                            }}
                            color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                            onClick={() => handleClick(index + 1)}
                            onMouseHover={() => handleMouseHover(index + 1)}
                            onMouseLeave={handleMouseLeave}
                        />
                    )
                })}
            </div>
            <textarea
                placeholder="what's your feedback"
                style={styles.textarea}
            />
     
        </div>
    );
};
const styles = {
 
    textarea: {
        border: "1px solid #a9a9a9",
        borderRadius: 5,
        width: 300,
        margin:"20px 0",
        minHeight:100,
        padding: 10
    },
    button: {
        border: "1px solid #a9a9a9",
        borderRadius: 5,
        width: 300,
        padding: 10,
        marginBottom:"20px"
    }
}

export default RatingStar;