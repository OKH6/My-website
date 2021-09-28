import Portolist from "../portolist/Protolist";
import GitHubIcon from '@material-ui/icons/ArrowDownward';
import {Person,Description,GitHub} from "@material-ui/icons"
import "./portfolio.scss"
import {
    featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
    designPortfolio,
    contentPortfolio,
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
        title: "Web App",
      },
      {
        id: "mobile",
        title: "Mobile App",
      },
    ];


    useEffect(() => {
        switch (selected) {
          case "featured":

            setData(featuredPortfolio);
            console.log(project)

            break;
          case "web":
            setData(webPortfolio);
            break;
          case "mobile":
            setData(mobilePortfolio);
            break;
          default:
            setData(featuredPortfolio);
        }
        switch (project) {
          default:
            setProject("projects");
        }

      }, [selected]);

    return (
      
        <div className="portfolio" id="porto">
      




          <div className="cant">
            <hr className="hr"/>
            <h1>Portfolio</h1>
            <hr className="hr"/>
            <ul>
                {list.map((item)=>(
                    <Portolist 
                    project={project}
                    title={item.title} 
                    active={selected===item.id} 
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
