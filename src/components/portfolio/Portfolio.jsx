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
  
import {useEffect,useState} from "react";
export default function Portfolio() {
    const [selected, setSelected] = useState("featured");
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
            break;
          case "web":
            setData(webPortfolio);
            break;
          case "mobile":
            setData(mobilePortfolio);
            break;
          case "design":
            setData(designPortfolio);
            break;
          case "content":
            setData(contentPortfolio);
            break;
          default:
            setData(featuredPortfolio);
        }
      }, [selected]);

    return (
        <div className="portfolio" id="porto">
            <h1>Porto</h1>
            <ul>
                {list.map((item)=>(
                    <Portolist 
                    title={item.title} 
                    active={selected===item.id} 
                    setSelected={setSelected}
                    id={item.id}
                    />

                ))}

            </ul>
            <div className="container">
                {data.map((d) => (
                    <div className="item">
                        <img
                        src={d.img}
                        alt=""
                        />
                        
                        <h3>{d.title}</h3>
                        <div className="cons">
                          <a href= {d.link} target="_blank"><GitHub className="icon"/></a>
                        
                          
                          <Description className="icon"/>
                        </div>

                        
                    </div>
                ))}
            </div>
            
        </div>
    )
}
