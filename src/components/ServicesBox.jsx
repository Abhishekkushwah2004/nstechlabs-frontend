export default function ServicesBox({title,subtitle,img}){
    return(
        <>
            <div className="box">
                <div className="img">
                    <img src={img} alt="img/icon" />
                </div>
                <div className="title">
                    <h3 style={{color:'#0F0F57'}}>{title}</h3>
                </div>
                <div className="subtitle">
                    <p style={{color:'#303030'}}>{subtitle}</p>
                </div>
            </div>
        </>
    )
}