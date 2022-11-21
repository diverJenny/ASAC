import { useEffect } from "react";

function CareerContents(props) {
    // props로 받아오면 모든 props를 가져오는것.
    // main.js에서 key={value}로 지정한 key에 해당하는 value를 가져온다.
    const contentList = props.contentList;
    // contentList를 가져올때 function CareerContents({contentList})로 바로 가져올 수 있다.

    useEffect(() => {
        console.log(props);
    }, [])

    return(
        <>
            {contentList.map((i) => (
                <li className="CareerContentCard_CareerContentCard">
                    <a href="#">
                    <div className="CareerContentCard_CareerContentCard_Thumbnail">
                        <img
                        className="CareerContentCard_CareerContentCard_Thumbnail_Img"
                        src={i.CareerContentImg}
                        alt={i.CareerContentImgAlt}
                        />
                    </div>
                    <p className="CareerContentCard_CareerContentCard_Title">
                        {i.CareerContentTitle}
                    </p>
                    <p className="CareerContentCard_CareerContentCard_Text">
                        {i.CareerContentTxt}
                    </p>
                    <div className="CareerContentCard_Info">
                        <img
                        src={i.CareerContentLinkImg}
                        alt={i.CareerContentLinkImgAlt}
                        />
                        <p>{i.CareerContentWriter}</p>
                    </div>
                    </a>
                </li>
            ))}
        </>
    )
}

export default CareerContents;