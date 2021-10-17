import React, { Component } from 'react'
import {Description,GitHub} from "@material-ui/icons"
import ArrowBack from '@material-ui/icons/ArrowBack';








class HandleProjects extends Component {




  render(){
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
                    {d.content ? <Description className="icon" onClick={()=> this.props.setProject(d.id)}/>:""}



                    
                    
                    
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
      
    }else{
      console.log(this.props.Type)
      var Acc= this.props.data[0].content
      console.log(this.props.selected.substring(0, this.props.selected.length-4));
      return(
        <div className="Content">
          <ArrowBack className="icon" onClick={()=>{
            if(this.props.selected==="featured"){this.props.setSelected("featuredBack")}
            else if(this.props.selected==="web"){this.props.setSelected("webBack")}
            else if(this.props.selected==="mobile"){this.props.setSelected("mobileBack")}
            else if(this.props.selected==="webBack"){this.props.setSelected("web")}
            else if(this.props.selected==="mobileBack"){this.props.setSelected("mobile")}
            else if(this.props.selected==="featuredBack"){this.props.setSelected("featured")}
            } }/>
        <h1>Broken {this.props.Type}</h1>
        <Acc />
        </div>


      ) 
    }

  }
}

export default HandleProjects

