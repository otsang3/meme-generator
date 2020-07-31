import React, {useState} from 'react';

function MemeGenerator(props) {

    const [topText, setTopText] = useState(null);
    const [bottomText, setBottomText] = useState(null);

    function handleChange(event) {
        if (event.target.name == 'topText') {
            setTopText(event.target.value)
        } else {
            setBottomText(event.target.value)
        }
    }

    return(
        <div className="container">
            <div className="image">
                <img className="image" src={props.image}/>
                <div className="top-text">{topText}</div>
                <div className="bottom-text">{bottomText}</div>
            </div>
            <input 
            style={{marginTop: 10}}
            type="text" 
            placeholder="top text"
            name="topText"
            onChange={event => handleChange(event)}
            />
            <input 
            type="text" 
            placeholder="bottom text"
            name="bottomText"
            onChange={event => handleChange(event)}
            />
        </div>
    )

}

export default MemeGenerator;