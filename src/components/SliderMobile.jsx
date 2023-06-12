import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import { mobile1,mobile2,mobile3} from "../assets/slideMenor"
import '@splidejs/react-splide/css';


const SliderMobile = () => {
    return (
        <div className='md:hidden'>
             
            <Splide 
            
            options={{
                type: "loop",
                loop: true,
                autoplay: true,
                interval:3500,
                drag: true,
                speed:1000,
            }}
            >
                <SplideSlide>
                    <img src={mobile1} alt="mobile1" />
                </SplideSlide>
                <SplideSlide>
                    <img src={mobile2} alt="mobile2" />
                </SplideSlide>
                <SplideSlide>
                    <img src={mobile3} alt="mobile3" />
                </SplideSlide>
            </Splide>

    
        </div>
    )
}

export default SliderMobile