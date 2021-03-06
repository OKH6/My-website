import React, { Component } from 'react'
import {Description,GitHub} from "@material-ui/icons"
import ArrowBack from '@material-ui/icons/ArrowBack';








class HandleProjects extends Component {




  render(){
    if (this.props.Type==="projects") {


      console.log(this.props.data[0])
        return(






          
          <div className="added">
          {this.props.data.map((d) => (
            <div>
                <div className="item">
                  <img src={d.img} alt="" />
                  <h3>{d.title}</h3>

        
                  {d.description ? <li>{d.description}</li>:""}
                  <h2>Technologies used</h2>
                  <div className="underBar">
                    
                      {d.tags.map((x)=> (
                        <div>
                        <h4>{x}</h4>

                        </div>

                      ))}
                      
                  </div>
                  <div className="cons">

                  {d.link ? <a href= {d.link} target="_blank"><GitHub className="icon"/></a>:<h1>Coming Soon</h1>}
                  {d.content ? <Description className="icon" onClick={()=> this.props.setProject(d.id)}/>:""}








                  </div>
                </div>

              
            </div>
              
          ))}
          </div>
    
    
        )
      
    }else{
      console.log(this.props.Type)
      var Loc=0;
      for (let index = 0; index < this.props.data.length; index++) {
        if (this.props.data[index].id===this.props.Type) {
          Loc=index;
          break;
          
        }
        
      }
      var Acc= this.props.data[Loc].content
      console.log(this.props.selected.substring(0, this.props.selected.length-4));

      return(
        <div className="Content">
          <div className="Line">
            <ArrowBack className="icon" onClick={()=>{
              if(this.props.selected==="featured"){this.props.setSelected("featuredBack")}
              else if(this.props.selected==="web"){this.props.setSelected("webBack")}
              else if(this.props.selected==="mobile"){this.props.setSelected("mobileBack")}
              else if(this.props.selected==="webBack"){this.props.setSelected("web")}
              else if(this.props.selected==="mobileBack"){this.props.setSelected("mobile")}
              else if(this.props.selected==="featuredBack"){this.props.setSelected("featured")}
              } }> HELLO</ArrowBack>
            <div>

              <h1>{this.props.data[Loc].title}</h1>
              <hr className="hr"/>
            </div>


          </div>

        <Acc />
        </div>


      ) 
    }

  }
}

export default HandleProjects

