import "./portolist.scss"

export default function Protolist({project,id,title,active,setSelected}) {

    if(project==="projects"){
        return (
            <li className={active ? "portolist active":"portolist"} onClick={()=>{ setSelected(id)}} >
                {title}
            </li>
        )

    }else{
        return (
            <div></div>
        )
    }

}
