import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import { m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14, m15, m16, m17 } from "../assets/marcas"


const SliderBrands = () => {
    const cssSlide = "w-15 h-10 "
    return (
        <div>

            <Splide
                options={{
                    type: 'loop',
                    pagination:false,
                    perPage:16,
                    height: 'auto',
                   speed:100000,
                   arrows:false,
                   interval:0,
                   autoplay:true,
                   gap:"1rem"
                }}
                
            >
                <SplideSlide>
                    <img src={m1} alt="brands" className={cssSlide} />
                </SplideSlide>
                <SplideSlide>
                    <img src={m2} alt="brands" className={cssSlide} />
                </SplideSlide>
                <SplideSlide>
                    <img src={m3} alt="brands" className={cssSlide} />
                </SplideSlide>
                <SplideSlide>
                    <img src={m4} alt="brands" className={cssSlide} />
                </SplideSlide>
                <SplideSlide>
                    <img src={m5} alt="brands" className={cssSlide} />
                </SplideSlide>
                <SplideSlide>
                    <img src={m6} alt="brands" className={cssSlide} />
                </SplideSlide>
                <SplideSlide>
                    <img src={m7} alt="brands" className={cssSlide} />
                </SplideSlide>
                <SplideSlide>
                    <img src={m8} alt="brands" className={cssSlide} />
                </SplideSlide>
                <SplideSlide>
                    <img src={m9} alt="brands" className={cssSlide} />
                </SplideSlide>
                <SplideSlide>
                    <img src={m10} alt="brands" className={cssSlide} />
                </SplideSlide>
                <SplideSlide>
                    <img src={m11} alt="brands" className={cssSlide} />
                </SplideSlide>
                <SplideSlide>
                    <img src={m12} alt="brands" className={cssSlide} />
                </SplideSlide>
                <SplideSlide>
                    <img src={m13} alt="brands" className={cssSlide} />
                </SplideSlide>
                <SplideSlide>
                    <img src={m14} alt="brands" className={cssSlide} />
                </SplideSlide>
                <SplideSlide>
                    <img src={m15} alt="brands" className={cssSlide} />
                </SplideSlide>
                <SplideSlide>
                    <img src={m16} alt="brands" className={cssSlide} />
                </SplideSlide>
                <SplideSlide>
                    <img src={m17} alt="brands" className={cssSlide} />
                </SplideSlide>
            </Splide>


        </div>
    )
}

export default SliderBrands