

export default function FlowWorkBox({img,title,colorName}){
    return(
        <>
            <div className="flowWorkBox">
                <div style={{width:"60px"}} className="img">
                    <img src={img} alt="" />
                </div>
                <div className="text">
                    <h3 style={{color:colorName}}>{title}</h3>
                </div>
            </div>
        </>
    )
}