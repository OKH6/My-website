import React, { Component } from 'react'
import {Person,Description,GitHub} from "@material-ui/icons"










class HandleProjects extends Component {

      render(){
        console.log(this.props.Type)
        if (this.props.Type==="projects") {
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
          return(

            <h1>Broken {this.props.Type}</h1>



          ) 
        }
    
      }
}

export default HandleProjects

