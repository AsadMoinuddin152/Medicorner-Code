import React from 'react';

import slider1 from './images/image1.jpg';
import slider2 from './images/image2.jpg';
import slider4 from './images/image3.jpg';

import BackgroundSlider from 'react-background-slider';

const ImageSlider = () => {
    return (
        <div>
            <BackgroundSlider
                images={[slider1, slider2, slider4]}
                duration={15}
                transition={2}
            />
        </div>
    );
};

export default ImageSlider;
