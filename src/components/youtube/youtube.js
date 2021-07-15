import React from 'react';
import '../youtube/youtube.css'

function Youtube() {

    //Hello, Peter. 

    // RANDOMLY PLACE COMPONENT ON PAGE
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
        const leftPos = document.getElementById('youtube_pos')
        leftPos.style.left = randPosXstring + 'px';

        const topPos = document.getElementById('youtube_pos')
        topPos.style.top = randPosYstring + 'px';   
   
    });

    return (
        <div className='content' id="youtube_pos">
            <iframe
                width="853"
                height="480"
                src='https://www.youtube.com/embed/s37x2VSZrLw'
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
        </div>
    )
}

export default Youtube;
