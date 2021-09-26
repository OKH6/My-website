import React, { Component } from 'react'
import {Person,Description,GitHub} from "@material-ui/icons"










class HandleProjects extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
          Type: "projects",
          data: {}
           
        }
      }











      
      render(){
        if (this.state.Type=="projects") {
            return(
              <div className="added">
              {this.props.data.map((d) => (
                  <div className="item">
                      <img src={d.img} alt="" />
                      <h3>{d.title}</h3>
                      <div className="cons">
                        <a href= {d.link} target="_blank"><GitHub className="icon"/></a>
                        <Description className="icon"/>
                      </div>
                  </div>
              ))}
              </div>
        
        
            )
          
        }else{
          return <div>Broken</div>
        }
    
      }
}

export default HandleProjects

