import React from 'react';

import '../article/article.css'

function Article() {

    
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
        const leftPos = document.getElementById('article-pos')
        leftPos.style.left = randPosXstring + 'px';

        const topPos = document.getElementById('article-pos')
        topPos.style.top = randPosYstring + 'px';   
   
    });

        return (
            <div className='content' id="article-pos">

            <a href="https://en.wikipedia.org/wiki/Ariana_Grande" target="_blank" rel="noreferrer">

            <img src="https://via.placeholder.com/100.png/09f/fff%20C/O%20https://placeholder.com/" alt="place holder"></img>

            </a>
            
            </div>
        )
}

export default Article;

