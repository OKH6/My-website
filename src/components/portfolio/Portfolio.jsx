import Portolist from "../portolist/Protolist";
import "./portfolio.scss"

export default function Portfolio() {
    const[selected]
    const list =[
        {
            id: "Feat",
            title: "dsa",
        },
        {
            id: "web",
            title: "SsadSS",
        },
        {
            id: "wea",
            title: "SSSasdas",
        },
        {
            id: "waed",
            title: "SasdasSS",
        },


    ];
    return (
        <div className="portfolio" id="porto">
            <h1>Porto</h1>
            <ul>
                {list.map((item)=>(
                    <Portolist title={item.title}/>

                ))}

            </ul>
            <div className="container">
                <div className="item">
                    <img src="https://www.zdnet.com/a/hub/i/2020/04/09/98404cfc-5090-4b50-a26d-447ea182a162/app-store-logo.png" alt="" />
                    <h3>Banking app</h3>
                </div>
                <div className="item">
                    <img src="https://www.zdnet.com/a/hub/i/2020/04/09/98404cfc-5090-4b50-a26d-447ea182a162/app-store-logo.png" alt="" />
                    <h3>Banking app</h3>
                </div>
                <div className="item">
                    <img src="https://www.zdnet.com/a/hub/i/2020/04/09/98404cfc-5090-4b50-a26d-447ea182a162/app-store-logo.png" alt="" />
                    <h3>Banking app</h3>
                </div>
            </div>
            
        </div>
    )
}
