

export default function BannerSection({title,subtitle,img}) {
    return (
        <>
            <div className="banner">
                <div className="img">
                    <img src={img} alt="" />
                    <div className="text">
                        <div className="heading">
                            <h6>{title}</h6>
                            <h5 className="poppins-regular">{subtitle}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
