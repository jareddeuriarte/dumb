import React from 'react';
import '../article/article.css'

function Article() {

    //Hi, Peter. 

   
    


    
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
        const leftPos = document.getElementById('img_pos')
        leftPos.style.left = randPosXstring + 'px';

        const topPos = document.getElementById('img_pos')
        topPos.style.top = randPosYstring + 'px';   
   
    });


    

        return (
            <div className='content' id="article_pos">

            <a href="https://en.wikipedia.org/wiki/Ariana_Grande" target="_blank" rel="noreferrer">THIS IS A LINK</a>
            
            </div>
        )
}

export default Article;