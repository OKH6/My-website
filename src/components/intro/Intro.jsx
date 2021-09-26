import "./intro.scss"

import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
export default function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imageContainer">
                    <img src="assets/me.png" alt="" />
                    
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, Im</h2>
                    <h1> OKH6</h1>
                    <h3>Student <span> </span></h3>
                </div>
                <a href="#porto">
                    <ArrowDownwardIcon className="icon"/>
                </a>

            </div>
            
        </div>
    )
}
