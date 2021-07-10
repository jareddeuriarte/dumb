import React from 'react';
import '../image/image.css'

function Image() {

    //Hi, Peter. 
    
    document.addEventListener("DOMContentLoaded", function(){
        var bodyWidth = document.body.clientWidth
        var bodyHeight = document.body.clientHeight;
        var randPosX = Math.floor((Math.random()*bodyWidth));
        var randPosXstring = randPosX.toString()
        var randPosY = Math.floor((Math.random()*bodyHeight));
        var randPosYstring = randPosY.toString()

        const leftPos = document.getElementById('rand_pos')
        
        leftPos.style.left = randPosXstring + 'px';
        
        const topPos = document.getElementById('rand_pos')
        topPos.style.top = randPosYstring + 'px';      

    
    
    });

        return (
            <div id="rand_pos">
            <img  src="https://via.placeholder.com/300.png/09f/fff%20C/O%20https://placeholder.com/" alt="place holder"></img>

            </div>
        )
}

export default Image;
