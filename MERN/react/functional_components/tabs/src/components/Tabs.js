import React, {useState} from 'react';

const Tabs = (props) => {
    const [isSelected, setIsSelected] = useState(0)
    return(
        <div>
            <div id="header">{
            props.tabItems.map( (tab, i) =>{
                return <span style={{backgroundColor: isSelected === i ? "black" : "", color: isSelected === i ? "white" : "", margin:'5px'}} class="header" key={i} onClick={(e) => {setIsSelected(i)}}>{tab.header}</span>
            })
            }</div>
            <div id="content">{
                props.tabItems[isSelected].content
            }</div>
        </div>
    )

}

export default Tabs;