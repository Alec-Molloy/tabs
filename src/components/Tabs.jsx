import React ,{useState} from 'react'

const Tabs = props => {
    const[currentTab,setCurrentTab] = useState(0);

    const content=[
        "This is tab 1", "This is tab 2", "This is tab 3"
    ]

    return(
        <>
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a className={currentTab===0 ? "nav-link active text-dark" : "nav-link text-primary"} onClick={e => setCurrentTab(0)} href="#">Tab 1</a>
            </li>
            <li className="nav-item">
                <a className={currentTab===1 ? "nav-link active text-dark" : "nav-link text-primary"} onClick={e => setCurrentTab(1)} href="#">Tab 2</a>
            </li>
            <li className="nav-item">
                <a className={currentTab===2 ? "nav-link active text-dark" : "nav-link text-primary"} onClick={e => setCurrentTab(2)} href="#">Tab 3</a>
            </li>
        </ul>
        <div className="alert alert-success">{content[currentTab]}</div>
        </>
    )
}

export default Tabs;