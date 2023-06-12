import { Splide, SplideSlide } from '@splidejs/react-splide';
import { fiosCabos, melhorPreco, freteGratis, melhorPrecoEletrica } from "../assets"
import '@splidejs/react-splide/css';

const Slider = () => {
    return (
        <div className='max-md:hidden '>
             
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
                    <img src={freteGratis} alt="freteGratis" />
                </SplideSlide>
                <SplideSlide>
                    <img src={melhorPreco} alt="melhorPreco" />
                </SplideSlide>
                <SplideSlide>
                    <img src={melhorPrecoEletrica} alt="melhorPrecoEletrica" />
                </SplideSlide>
                <SplideSlide>
                    <img src={fiosCabos} alt="fiosCabos" />
                </SplideSlide>
            </Splide>

    
        </div>
    )
}

export default Slider