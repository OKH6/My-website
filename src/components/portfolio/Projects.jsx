import React, { Component } from 'react'
import {Person,Description,GitHub,ArrowBackIcon} from "@material-ui/icons"
import ArrowBack from '@material-ui/icons/ArrowBack';









class HandleProjects extends Component {

      render(){
        console.log(this.props.Type)
        if (this.props.Type==="projects") {
            return(






              
              <div className="added">
              {this.props.data.map((d) => (
                <div>
                  <div className="item">
                      <img src={d.img} alt="" />
                      <h3>{d.title}</h3>
                      <div className="cons">
                        <a href= {d.link} target="_blank"><GitHub className="icon"/></a>
                        <Description className="icon" onClick={()=> this.props.setProject("WebGL")}/>
                        
                      </div>
                      
                  </div>
                  <div className="underBar">
                    {d.tags.map((x)=> (
                      <div>
                      <h4>{x}</h4>

                      </div>

                    ))}
                    
                  </div>
                  
                </div>
                  
              ))}
              </div>
        
        
            )
          
        }else if(this.props.Type==="WebGL"){
          console.log("DDDDD")
          var Acc= this.props.data[0].content
          console.log(this.props.data[0]);
          return(
            <div className="Content">
              <ArrowBack className="icon" onClick={()=>{if(this.props.selected!="featured"){this.props.setSelected("featured")}else if(this.props.selected!="web"){this.props.setSelected("web")}} }/>
            <h1>Broken {this.props.Type}</h1>
            <Acc />
            </div>


          ) 
        }
    
      }
}

export default HandleProjects

