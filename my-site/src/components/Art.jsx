import React from 'react';
import Cityscape from './assets/imgs/Cityscape.jpg'
import Waveface from './assets/imgs/Waveface.jpg'
import TrumpetBlue from './assets/imgs/TrumpetBlue.jpg'
import SaxBlue from './assets/imgs/saxBlue.jpg'
import Guitar from './assets/imgs/guitar.jpg'

function Art () {
return (
<div className= "painting-container">


<div className= "paintings">


<h2>Acrylic on Canvas, 16x20"</h2>
<img src={Cityscape} alt="cityscape"></img>

<h2>  Acrylic on Canvas, 8x10"</h2>
<img src={Waveface} alt="waveface"></img>


<h2> Acrylic on Canvas, 12x16"</h2>
<img src={TrumpetBlue} alt="TrumpetBlue"></img>

<h2>Acrylic on Canvas, 16x20"</h2>
<img src={SaxBlue} alt="saxBlue"></img>

<h2>Acrylic on Canvas, 16x20"</h2>
<img src={Guitar} alt="guitar"></img>


</div>

</div>
    )
}

export default Art