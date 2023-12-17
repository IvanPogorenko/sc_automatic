import Overlay from "../components/Overlay";
import React from "react";
import ServiceCard from "../components/ServiceCard";
function Home() {
    const [overlayOpened, setOverlayOpened] = React.useState(false);
    const arr=[{name:"Ремонт", description: "jsfgjfgsdfdsfhsdfhgsdfsdfg", picture: "/img/repairing.png"},
    {name:"Разработка", description: "jsfgjfgsdfdsfhsdfhgsdfsdfg", picture: "/img/develop.png"},
    {name:"Монтаж систем управления", description: "jsfgjfgsdfdsfhsdfhgsdfsdfg", picture: "/img/montaj.png"},
    {name:"Техническое обслуживание", description: "jsfgjfgsdfdsfhsdfhgsdfsdfg", picture: "/img/obsl.png"}];

    const slideData = [{project: "Project 1", description: "egwgsjgaskljfgasjkf", slide: "/img/slide1.jpg"},
    {project: "Project 2", description: "qdlkdnsdaoidasdn", slide: "/img/slide2.jpg"},
    {project: "Project 3", description: "iw;hfwshfasfhashkjf", slide: "/img/slide3.jpg"},
    {project: "Project 4", description: "all;fhsaoifhasfhasjf", slide: "/img/slide4.jpg"}]
    const [slideSvipe, setSlideSvipe] = React.useState(0)
    function PlusIndex(index){
        if(index < slideData.length-1){
            setSlideSvipe(index+1)
        }
        else{
            setSlideSvipe(0)
        }
    }
    function MinusIndex(index){
        if (index > 0){
            setSlideSvipe(index-1)
        }
        else{
            setSlideSvipe(slideData.length-1)
        }
    }

    return (
        <div className="content">
            <div className="FirstBlock">
                {overlayOpened ? <Overlay onClose = {() => setOverlayOpened(false)} /> : null}
                <div className="FirstBlockText">
                    <h>Ремонт горношахтного оборудования</h>
                    <p>Производство ООО "МК Ильма"</p>
                    <img alt="Ilma" src="/img/ilma.png"></img>
                    <button onClick = {() => setOverlayOpened(true)}>Написать нам</button>
                </div>
            </div>
            <div className="Services">
                <div className="BlockHead">
                    <h>Услуги</h>
                </div>
                <div className="Cards">
                    {arr.map((obj)=>(
                        <ServiceCard 
                        name={obj.name}
                        description={obj.description}
                        picture={obj.picture}
                        />
                    ))}
                </div>
                <div className="BlockHead">
                    <h>Проекты</h>
                </div>
                <div className="Slider">
                    <button className="Svipe" onClick={() => MinusIndex(slideSvipe)}><img src="/img/Lbtn.png" alt="LeftButton" width={34} height={62}></img></button>
                    <div className="Slide">
                        <div className="SlideName">
                            <p>{slideData[slideSvipe].project}</p>
                        </div>
                        <img src={slideData[slideSvipe].slide} alt='slidePicture'></img>
                        <div className="SlideDescription">
                            <p>{slideData[slideSvipe].description}</p>
                        </div>
                    </div>
                    <button className="Svipe" onClick={() => PlusIndex(slideSvipe)}><img src="/img/Rbtn.png" alt="RightButton" width={34} height={62}></img></button>
                </div>
            </div>
        </div>
    );
}
export default Home;