import React from 'react';
import '../image/image.css'

function Image() {

    //Hi, Peter. 
    
    document.addEventListener("DOMContentLoaded", function(){
        
        // grab the width and height of the browser window
        var bodyWidth = document.body.clientWidth
        var bodyHeight = document.body.clientHeight;
        
        // generating a random number for the left and top positions 
        var randPosX = Math.floor((Math.random()*bodyWidth));
        var randPosXstring = randPosX.toString()
        var randPosY = Math.floor((Math.random()*bodyHeight));
        var randPosYstring = randPosY.toString()

        // grab elm, concat position # with 'px', setting style
        const leftPos = document.getElementById('img_pos')
        leftPos.style.left = randPosXstring + 'px';

        const topPos = document.getElementById('img_pos')
        topPos.style.top = randPosYstring + 'px';   
   
    });

        return (
            <div id="img_pos">
            <img  src="https://via.placeholder.com/300.png/09f/fff%20C/O%20https://placeholder.com/" alt="place holder"></img>
            </div>
        )
}

export default Image;
