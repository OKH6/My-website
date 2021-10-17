import Portolist from "../portolist/Protolist";

import "./portfolio.scss"
import {
    featuredPortfolio,
    webPortfolio,
    mobilePortfolio,

  } from "../../data";
import Portolists from "./Projects"
  
import {useEffect,useState} from "react";



export default function Portfolio() {
    const [selected, setSelected] = useState("featured");
    const [project, setProject] = useState("projects");
    const [data, setData] = useState([]);
    const list = [
      {
        id: "featured",
        title: "Featured",
      },
      {
        id: "web",
        title: "Web & Desktop Apps",
      },
      {
        id: "mobile",
        title: "Mobile Apps",
      },
    ];


    useEffect(() => {
        switch (selected) {
          case "featured":
            setData(featuredPortfolio);
            setProject("projects");
            break;
          case "featuredBack":
            setData(featuredPortfolio);
            setProject("projects");
            break;
          case "web":
            setData(webPortfolio);
            setProject("projects");
            break;
          case "webBack":
            setData(webPortfolio);
            setProject("projects");
            break;
          case "mobile":
            setData(mobilePortfolio);
            setProject("projects");
            break;
          case "mobileBack":
            setData(mobilePortfolio);
            setProject("projects");
            break;
          default:
            setData(featuredPortfolio);
            setProject("projects");
        }

      }, [selected]);

    return (
      
        <div className="portfolio" id="porto">



          <div className="head">
            <hr className="hr"/>
            <h1>Portfolio</h1>
            <hr className="hr"/>
          </div>



          <div className="cant">






            <ul>
                {list.map((item)=>(
                    <Portolist 
                    project={project}
                    title={item.title} 
                    active={selected===item.id || selected.substring(0, selected.length-4)===item.id } 
            
                    setSelected={setSelected}
                    id={item.id}
                    />

                ))}

            </ul>
          </div>          
            

            <div className="container">
              <Portolists Type={project} data={data} setProject={setProject} setSelected={setSelected} selected={selected} />

         
                






            </div>
            
        </div>
    )
}
